import React from "react";
import { Link, useRouteMatch, NavLink } from "react-router-dom";
import { Button, Row, Col, Image } from "react-bootstrap";

import FadeInSection from "../effect/FadeInSection";
import "./index.css";

const rowStyle = {
  backgroundColor: "#1a1a1a",
  padding: "30px",
  margin: "15px 0px",
};

const textStyle = {
  position: "absolute",
  top: "10%",
  left: "0",
  right: "0",
  marginLeft: "auto",
  marginRight: "auto",
  width: "400px",
};

function NavCategory(props) {
  return (
    <div className="nav-category text-center">
      <h2 className=" upper ici" style={{ fontSize: "1em" }}>
        {props.titleNav}
      </h2>
      {props.children}
    </div>
  );
}

function CategoryBar(props) {
  const activeStyle = { color: "#FCCC84" };

  const link =
    "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Ftramhuongdaoquan.vn%2F&amp;src=sdkpreparse";

  return (
    <Row className="upper categoryBar">
      <Col lg={3} className="text-center">
        {props.name}
      </Col>
      <Col lg={7}>
        {props.data.map((item, key) => (
          <NavLink key={key} activeStyle={activeStyle} to={`${item.link}`}>
            {item.name}
          </NavLink>
        ))}
      </Col>
      <Col lg={2}>
        <a href={link}>
          <Button variant="dark" className="upper">
            Chia sẻ
          </Button>
        </a>
      </Col>
    </Row>
  );
}

function CategorySlide(props) {
  let match = useRouteMatch();
  return (
    <div style={{ position: "relative" }} className="text-center">
      <Image
        src={props.data.img}
        fluid
        style={{ maxHeight: "465px", width: "100%", objectFit: "cover" }}
      />
      <div style={textStyle}>
        <FadeInSection>
          <h2 className="upper ici">{props.data.name}</h2>
          <p>{props.data.des}</p>
          <Link to={`${match.url}${props.data.link}`}>
            <Button className="upper" variant="dark">
              Tìm hiểu
            </Button>
          </Link>
        </FadeInSection>
      </div>
    </div>
  );
}

function CategoryMain(props) {
  let match = useRouteMatch();

  return (
    <div>
      {props.data.map((item, i) => (
        <Row key={i} style={rowStyle}>
          <Col
            lg={{ order: item.orderTxt }}
            className="align-self-center text-center"
          >
            <FadeInSection>
              <h2 className="upper ici">{item.name}</h2>
              <p>{item.des}</p>
              <Link to={`${match.url}${item.link}`}>
                <Button variant="dark" className="upper">
                  Tìm hiểu
                </Button>
              </Link>
            </FadeInSection>
          </Col>

          <Col className="text-center">
            <Image
              fluid
              src={item.img}
              key={i}
              alt={item.name}
              style={{ maxHeight: "400px", objectFit: "cover" }}
              className="align-self-center"
            />
          </Col>
        </Row>
      ))}
    </div>
  );
}

export { NavCategory, CategoryBar, CategorySlide, CategoryMain };
