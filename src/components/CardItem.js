import { Card, Col } from "react-bootstrap";
import React from "react";
const CardItem = ({ id, name, username, email }) => {
  return (
    <Col className="d-flex">
      <Card className="flex-fill shadow p-3 mb-5 bg-body rounded" key={id}>
        <Card.Img
          className="p-5"
          src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        />
        <Card.Body>
          <Card.Text className="h2">Id:{id}</Card.Text>
          <Card.Text className="h5">Name:{name}</Card.Text>
          <Card.Text className="h5">Username:{username}</Card.Text>
          <Card.Text className="h5">Email:{email}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardItem;
