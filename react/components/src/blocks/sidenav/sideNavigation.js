import React, { useState } from "react";
import { Nav ,Collapse } from "react-bootstrap";
import ExpandDropdown from "./expandDropdown";

const SideNavigation = ({ paths , value }) => {
  
   let defaultValue = { state:true}
   defaultValue = typeof value === "undefined" ? defaultValue : {...defaultValue,...value};

   let [collapseState ,setCollapseState] = useState(new Map());

   const initCollapseState = function(level,paths){
         if(!(typeof paths === "undefined")){
            //if(Array.isArray(paths))
         }
   }
   
  //  React.useEffect(()=>{
  //     if(!(typeof paths === "undefined"))
  //      paths.array.forEach(element => {
         
  //      });
  //  })
   
   const renderPath = paths => {
    return paths.map((item, index) => {
      console.log(item);
      if (Array.isArray(item)) {
      return <ExpandDropdown list={item}  collapse={false} renderItem={(item)=>{return(<div>{item.item}</div>)}}/>;
      } else {
        return <Nav.Link {...item}>{item.title}</Nav.Link>;
      }
    });
  };
  return (
    <div  style={{width:200}}>
    <Collapse in={defaultValue.state}>
    <Nav defaultActiveKey="/home" className="flex-column">
      {renderPath(paths)}
    </Nav>
    </Collapse>
    </div>
  );
};

export default SideNavigation;
