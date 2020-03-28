import React from "react";
import { Container, Overlay, Popover, ListGroup } from "react-bootstrap";
import { getProducts } from "../util/service";
import { Col, Row, Spinner, Tooltip } from "react-bootstrap";
import RamenItem from "../components/ramenItem";
import Filter from "../components/filterIcon";
import FilterComponent from "./FilterComponent";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [filterState, setFilter] = React.useState(false);
  const [selectedFilteIndex, setFilterIndex] = React.useState(0);
  const filterTarget = React.useRef(null);
  const filters = ["country", "year", "style"];
  const sortByOptions = ["year", "rating"];
  const [selectedFilters, setSelectedFilters] = React.useState(new Map());
  const [filterSets, setFilterState] = React.useState(new Map());
  const [searchText, setSearchText] = React.useState(null);

  async function fetchProducts() {
    const res = await getProducts();
    res.json().then(products => {
      setProducts(products);
      filters.forEach(filter => {
        filterSets.set(filter, new Set([]));
        selectedFilters.set(filter, []);
      });
      products.forEach(element => {
        filterSets.get("year").add(element["Top Ten"].split(" ")[0]);
        filterSets.get("country").add(element.Country);
        filterSets.get("style").add(element.Style);
      });
      console.log(filterSets);
      setLoading(false);
    });
  }

  const applyFilters = () => {
    let filteredProducts = [];
    products.forEach(item => {
      let flag = false;
      let emptyFilterFlag = true;
      filters.forEach(filter => {
        if (filter === "year") {
          if (!(selectedFilters.get("year").length === 0)) {
            emptyFilterFlag = false;
            if (
              selectedFilters
                .get("year")
                .indexOf(item["Top Ten"].split(" ")[0]) !== -1
            ) {
              flag = true;
            }
          }
        }
        if (filter === "country") {
          if (!(selectedFilters.get("country").length === 0)) {
            emptyFilterFlag = false;
            if (selectedFilters.get("country").indexOf(item.Country) !== -1) {
              flag = true;
            }
          }
        }
        if (filter === "style") {
          if (!(selectedFilters.get("style").length === 0)) {
            emptyFilterFlag = false;
            if (selectedFilters.get("style").indexOf(item.Style) !== -1) {
              flag = true;
            }
          }
        }
      });

      if (emptyFilterFlag === true) filteredProducts.push(item);
      if (flag === true) return filteredProducts.push(item);
    });

    return filteredProducts;
  };

  const applyTextFilter = item => {
    if (searchText === null || searchText.trim() === "") return true;
    if (item.Variety.includes(searchText)) return true;
    return false;
  };

  React.useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  const renderProducts = () => {
    //console.log
    let filteredItems = applyFilters();

    return filteredItems.filter(applyTextFilter).map((data, key) => {
      return (
        <Col sm="4"  xm="6" style={{ padding: 8 }}>
          <RamenItem
            brand={data.Brand}
            variety={data.Variety}
            style={data.Style}
            country={data.Country}
            stars={data.Stars}
            year={data["Top Ten"].split(" ")[0]}
            ranking={data["Top Ten"].split(" ")[1]}
            key={key}
          />
        </Col>
      );
    });
  };
  const renderHeader = () => {
    return (
      <Row
        style={{
          margin: 5,
          borderRadius: 30,
          borderColor: "blue",
          borderStyle: "solid"
        }}
      >
        <input
          style={{
            height: 60,
            flexGrow: 1,
            outline: "none",
            border: "white",
            background:'transparent',
            marginLeft: 30
          }}
          type="search"
          placeholder={"Search Ramen..."}
          onChange={event => setSearchText(event.target.value)}
        ></input>
        <div
          ref={filterTarget}
          onClick={() => setFilter(!filterState)}
          style={{ textAlign: "center", justifyContent: "center",display:"flex" }}
        >
          <Filter style={{ alignSelf: "center", marginRight: 20 }} />
        </div>
        {renderFilterOverLay()}
      </Row>
    );
  };

  const renderSortBy = () => {
    return <ListGroup>{sortByOptions.map(() => {})}</ListGroup>;
  };

  const renderFilterOverLay = () => {
    return (
      <Overlay
        target={filterTarget.current}
        show={filterState}
        placement="right"
      >
        {props => {
          return (
            <Popover id="overlay-example" {...props}>
              <Popover.Content>
                <FilterComponent
                  selectedFilters={selectedFilters}
                  filters={filters}
                  selectedFilteIndex={selectedFilteIndex}
                  filterSets={filterSets}
                  onChangeFilter={index => setFilterIndex(index)}
                  onChangeFilterIndex={(key, item) => {
                    console.log(key);
                    console.log(item);

                    let i = selectedFilters.get(key).indexOf(item);
                    const copy = new Map(selectedFilters);
                    console.log(copy);
                    if (i == -1) {
                      copy.get(key).push(item);
                    } else {
                      copy.get(key).splice(i, 1);
                    }

                    setSelectedFilters(copy);
                  }}
                  onClose={() => setFilter(!filterState)}
                  onReset={() => {
                    let tempMap = new Map();
                    filters.forEach(filter => {
                      tempMap.set(filter, new Set([]));
                      tempMap.set(filter, []);
                    });
                    setSelectedFilters(tempMap);
                  }}
                />
              </Popover.Content>
            </Popover>
          );
        }}
      </Overlay>
    );
  };

  const renderLoading = () => {
    return (
      <Spinner
        animation="border"
        style={{ justifyContent: "center", alignItems: "center" }}
      />
    );
  };
  return (
    <Container style={{height: "100%", width: "100%"}}>
      {renderHeader()}
      <h3 style={{marginTop:10}} >Ramen List</h3>
      {loading ? renderLoading() : <Row>{renderProducts()}</Row>}
    </Container>
  );
};

export default Home;
