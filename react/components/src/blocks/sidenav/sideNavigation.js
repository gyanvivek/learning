import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import List from "../list";
import NavigationItem from "./navigationitem";

const SideNavigation = ({ paths, value }) => {
  let defaultValue = { state: true };
  defaultValue =
    typeof value === "undefined" ? defaultValue : { ...defaultValue, ...value };

  //let [collapseState, setCollapseState] = useState(new Map());

  const initCollapseState = function(level, paths) {
    if (!(typeof paths === "undefined")) {
      //if(Array.isArray(paths))
    }
  };

  //  React.useEffect(()=>{
  //     if(!(typeof paths === "undefined"))
  //      paths.array.forEach(element => {

  //      });
  //  })

  return (
    <div style={{ width: 200 }}>
      <Collapse in={defaultValue.state}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <List list={paths} renderItem={item => (<NavigationItem item={item} />)} />
        </Nav>
      </Collapse>
    </div>
  );
};

export default SideNavigation;
