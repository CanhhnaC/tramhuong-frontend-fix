import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./index.css";
import Footer from "../footer/";

export default function Main(props) {
  return (
    <Container fluid>
      <Row className="main">
        <Col sm={0} md={1} className="img"></Col>
        <Col style={props.styles} sm={12} md={10} className="content">
          {props.children}
          <Footer />
        </Col>
        <Col sm={0} md={1} className="img"></Col>
      </Row>
    </Container>
  );
}
