import React from "react";

import { Row, Col, ListGroup, FormCheck, Button } from "react-bootstrap";

const FilterComponent = ({
  selectedFilters,
  filters,
  filterSets,
  selectedFilteIndex,
  onChangeFilter,
  onChangeFilterIndex,
  onClose,
  onReset
}) => {
  

  const renderFilterSubItems = () => {
    let temp = [];
    filterSets.get(filters[selectedFilteIndex]).forEach(item => {
      temp.push(
        <ListGroup.Item style={{marginRight:0}}>
          <Row>
            <FormCheck
              label={item}
              id={filters[selectedFilteIndex] + item}
              checked={!(selectedFilters.get(filters[selectedFilteIndex]).indexOf(item) === -1)}
              onChange={() => {
                onChangeFilterIndex(filters[selectedFilteIndex],item);
              }}
            />
          </Row>
        </ListGroup.Item>
      );
    });
    return temp;
  };
  return (
    <Col>  
    <Row>
      <Col style={{marginRight:0,paddingRight:0}}>
        <ListGroup style={{marginRight:0}}>
          {filters.map((item, index) => {
            return (
              <ListGroup.Item
                active={index === selectedFilteIndex}
                onClick={() => onChangeFilter(index)}
                style={{marginRight:0}}
              >
                {item}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Col>
      <Col style={{marginLeft:0,marginRight:0,paddingLeft:0}}>{<ListGroup style={{marginLeft:0}}>{renderFilterSubItems()}</ListGroup>}</Col>
    </Row>
    <Row style={{justifyContent:"space-between",marginTop:8}}>
    <Button onClick={()=>onClose()}> Close</Button>
    <Button onClick={()=>onReset()}> Reset</Button>
    </Row>
    </Col>
  );
};

export default FilterComponent;
