import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import SideNavigation from "../../blocks/sidenav/sideNavigation";
import { Button } from "react-bootstrap";
import RamenItem from "../../demo/ramenItem/ramenItem";

const paths = [
  { href: "home", title: "home" },
  { href: "home", title: "home" },
  { href: "home", title: "home" },
  { href: "home", title: "home" },
  [
    { href: "home", title: "home" },
    { href: "home", title: "home" },
    { href: "home", title: "home" }
  ]
];

const data = {
  Brand: "MAMA",
  Variety: "Instant Noodles Coconut Milk Flavour",
  Style: "Pack",
  Country: "Myanmar",
  Stars: 5,
  "Top Ten": "2016 #10"
};

const Playground = () => {
  const [navState, setNavState] = useState(true);
  return (
    <div>
      {/* <Button onClick={()=>setNavState(!navState)}> Toggle </Button>
         <SideNavigation paths={paths} value={{state:navState}}/> */}
      <RamenItem
        brand={data.Brand}
        variety={data.Variety}
        style={data.Style}
        country={data.Country}
        stars={data.Stars}
        year={data["Top Ten"].split(" ")[0]}
        ranking={data["Top Ten"].split(" ")[1]}
      />
    </div>
  );
};

export default Playground;
