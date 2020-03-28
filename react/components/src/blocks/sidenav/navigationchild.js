import React from "react";
import {Col} from "react-bootstrap";

const NavigationChild = ({item})=>{
   return ( <Col>
   {item.title}
   </Col>)
}

export default NavigationChild;