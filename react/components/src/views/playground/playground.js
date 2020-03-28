import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import SideNavigation from "../../blocks/sidenav/sideNavigation";
import { Button } from "react-bootstrap";
import RamenItem from "../../demo/ramenItem/ramenItem";

const paths = [
  { href: "home", title: "home" },
  { href: "components", title: "Components" },
  { href: "demo", title: "Demo" },
  { href: "home", title: "home" },
  { title: "haschidren",
    child:[ 
    { href: "sub1", title: "Sub1" },
    { href: "sub2", title: "Sub2" },
    { href: "sub3", title: "Sub3" }
  ]
}
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
     <Button onClick={()=>setNavState(!navState)}> Toggle </Button>
         <SideNavigation paths={paths} value={{state:navState}}/>
    </div>
   );
};

export default Playground;
