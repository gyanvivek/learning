import React from "react";

import { Card, Button, Col, Row, Badge } from "react-bootstrap";
import Rating from "./rating";

const RamenItem = ({
  brand,
  variety,
  style,
  country,
  stars,
  year,
  ranking,
  
}) => {
  return (
    <Card key={brand+variety} style={{height:'100%',cursor:"pointer",transition:'.3c ',marginRight:0,padding:"0px 10px"}}>
      <Card.Img
        variant="top"
        // style={{ height: "30%", width: "100%", backgroundColor: "blue" }}
      />
      <Card.Body style={{}}>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle>{variety}</Card.Subtitle>
        <Row style={{ justifyContent: "space-between" }}>
          <Card.Text>{style}</Card.Text>
          <Card.Text>{country}</Card.Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Rating rating={stars} />
          <Badge pill variant="primary" style={{display:'flex', alignItems:'center'}}>
            {year} {ranking}
          </Badge>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RamenItem;
