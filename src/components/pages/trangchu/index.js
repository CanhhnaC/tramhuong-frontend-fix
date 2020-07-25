import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

// Component
import Main from "../../layout/main/";
import SlideShow from "../../layout/slideshow/";
// Css
import "./index.scss";

// Image
import imgBoSuuTap from "../img/bosuutap.jpg";
import imgDungCu1 from "../img/dungcu1.jpg";
import imgDungCu2 from "../img/dungcu2.jpg";
import imgVeChungToi from "../img/vechungtoi-home.jpg";
import imgKienThuc from "../img/kienthuc.jpg";
import imgSuKien from "../img/sukien.jpg";
import imgChinhSach from "../img/chinhsach.jpg";
import FadeInSection from "../../layout/effect/FadeInSection";

function HomePage() {
  const rowStyle = {
    backgroundColor: "#161616",
    padding: "30px",
    margin: "15px 1px",
    fontSize: "1.1rem",
  };
  const veChungToiStyle = {
    margin: "15px 1px",
    position: "relative",
  };
  const textStyle = {
    position: "absolute",
    bottom: "10%",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    width: "400px",
  };
  const chinhSachStyle = {
    position: "absolute",
    right: "10%",
    top: "30%",
  };

  return (
    <div className="content">
      <Row style={rowStyle}>
        <Col lg={6}>
          <Image fluid src={imgBoSuuTap} alt="Bộ sưu tập" />
        </Col>
        <Col lg={6} className="align-self-center text-center">
          <FadeInSection>
            <h2 className="upper ici">Bộ sưu tậP</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.{" "}
            </p>
            <Link to="/bo-suu-tap">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </Col>
      </Row>

      <Row style={rowStyle}>
        <Col lg={6} className="align-self-center text-center">
          <FadeInSection>
            <h2 className="upper ici">Dụng cụ thưởng trầm</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.{" "}
            </p>
            <Link to="/dung-cu">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </Col>

        <Col lg={6}>
          <Row>
            <Col>
              <Image
                fluid
                style={{ height: "480px" }}
                src={imgDungCu1}
                alt="Dụng cụ thưởng trầm"
              />
            </Col>
            <Col>
              <Image
                style={{ height: "480px" }}
                fluid
                src={imgDungCu2}
                alt="Dụng cụ thưởng trầm"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={veChungToiStyle}>
        <Image fluid src={imgVeChungToi} alt="Về chúng tôi" />
        <div style={textStyle} className="text-center">
          <FadeInSection>
            <h2 className="upper ici">Về chúng tôi</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.{" "}
            </p>
            <Link to="/ve-chung-toi">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </div>
      </Row>

      <Row style={rowStyle}>
        <Col lg={6}>
          <Image fluid src={imgKienThuc} alt="Kiến thức" />
        </Col>
        <Col lg={6} className="align-self-center text-center">
          <FadeInSection>
            <h2 className="upper ici">Kiến thức</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.{" "}
            </p>
            <Link to="/kien-thuc">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </Col>
      </Row>

      <Row style={rowStyle}>
        <Col lg={6} className="align-self-center text-center">
          <FadeInSection>
            <h2 className="upper ici">Thông tin sự kiện</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit sit amet
              consectetur adipisicing elit.{" "}
            </p>
            <Link to="/thong-tin">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </Col>

        <Col lg={6}>
          <Row>
            <Col>
              <Image fluid src={imgSuKien} alt="Sự kiện" />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={veChungToiStyle}>
        <Image fluid src={imgChinhSach} alt="Chính sách" />
        <div style={chinhSachStyle} className="text-center">
          <FadeInSection>
            <h2 className="upper ici">Chính sách</h2>
            <Link to="/chinh-sach">
              <Button className="upper" variant="dark">
                Tìm hiểu
              </Button>
            </Link>
          </FadeInSection>
        </div>
      </Row>
    </div>
  );
}

export default function TrangChu() {
  return (
    <div className="home">
      <SlideShow />
      <Main>
        <HomePage />
      </Main>
    </div>
  );
}
