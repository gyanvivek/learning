import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const ExpandDropdown = ({ list, title, collapse, renderItem}) => {

  console.log("ExpandedDropdown")  ;
  console.log(list);
  if ((typeof list === "undefined") || collapse === true) {
     return null;
  } else {
      return(
    <div>
      <div></div>
      <ListGroup>
        {list.map((item, index) => {
          return (
            <ListGroupItem>
              {renderItem(item,index)}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>);
  }
};

export default ExpandDropdown;
