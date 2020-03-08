import React from "react";

import { Card, Button, Col, Row, Badge } from "react-bootstrap";
import Rating from "../../blocks/rating/rating";

const RamenItem = ({
  brand,
  variety,
  style,
  country,
  stars,
  year,
  ranking
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ height: 100, width: "100%", backgroundColor: "blue" }}
      />
      <Card.Body>
        <Card.Title>{brand}</Card.Title>
        <Card.Subtitle>{variety}</Card.Subtitle>
        <Row style={{ justifyContent: "space-between" }}>
          <Card.Text>{style}</Card.Text>
          <Card.Text>{country}</Card.Text>
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Rating rating={"NaN"} />
          <Badge pill variant="primary">
            {year} {ranking}
          </Badge>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RamenItem;
