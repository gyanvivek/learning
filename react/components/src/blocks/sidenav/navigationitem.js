import React from "react";
import { Col, Row } from "react-bootstrap";
import List from "../list";
import NavigationChild from "./navigationchild";

const NavigationItem = ({ item }) => {
  const hasChildren = Array.isArray(item.child) ? true : false;

  const renderChildren = () => {
    console.log("has children");
    console.log(hasChildren);
    console.log(item.child);
    if (hasChildren === false) return null;
    return (
      <List
        list={item.child}
        renderItem={item => <NavigationChild item={item} />}
      />
    );
  };
  const renderChevron = () => {
    return <div className="chevron"></div>;
  };
  return (
    <Col>
      <Row>
        {item.title}
        {hasChildren ? renderChevron() : null}
      </Row>
      {renderChildren()}
    </Col>
  );
};

export default NavigationItem;
