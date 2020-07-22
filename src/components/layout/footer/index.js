import React from "react";

import { NavLink } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";

import "./index.css";
import logo from "../img/lgog.png";
import logoFb from "../img/ico-fb.png";
import logoIns from "../img/ico-ins.png";
import logoMail from "../img/ico-mail.png";

const linkFB = "https://www.facebook.com/tramhuongdaoquan.vn/";

export default function Footer() {
  return (
    <footer className="container-fluid">
      <Row className="lien-lac align-items-center">
        <Col className="d-flex justify-content-start">
          <NavLink to="/">
            <Image src={logo} height={50} />
          </NavLink>
        </Col>

        <Col className="d-flex justify-content-end align-items-center">
          <span>Liên lạc chúng tôi trên: </span>
          <a href={linkFB} style={{ paddingLeft: "20px" }}>
            <Image src={logoFb} height={18} />
          </a>
          <a href={`https://www.instagram.com`}>
            <Image src={logoIns} height={20} />
          </a>
          <a href={`https://www.gmail.com`}>
            <Image src={logoMail} height={17} />
          </a>
        </Col>
      </Row>

      <Row>
        <Col lg={8} style={{ paddingLeft: "80px" }}>
          <Row className="footer-2">
            <Col lg={3}>
              <ul>
                <li>
                  <span>Bộ sưu tập</span>
                </li>
                <li>
                  <NavLink to="/">Vòng</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lư xông</NavLink>
                </li>
                <li>
                  <NavLink to="/">Tác phẩm</NavLink>
                </li>
                <li>
                  <NavLink to="/">Đặt riêng</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li>
                  <span>Phụ kiện</span>
                </li>
                <li>
                  <NavLink to="/">Vòng</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lư xông</NavLink>
                </li>
                <li>
                  <NavLink to="/">Tác phẩm</NavLink>
                </li>
                <li>
                  <NavLink to="/">Đặt riêng</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul>
                <li>
                  <span>Chính Sách</span>
                </li>
                <li>
                  <NavLink to="/">Vòng</NavLink>
                </li>
                <li>
                  <NavLink to="/">Lư xông</NavLink>
                </li>
                <li>
                  <NavLink to="/">Tác phẩm</NavLink>
                </li>
                <li>
                  <NavLink to="/">Đặt riêng</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>

        <Col lg={3} className="footer-1 ">
          <ul>
            <li>
              <span>Địa chỉ</span>
            </li>
            <li>
              Địa chỉ: Số 51, ngõ 50 Đặng Thai Mai, phường Quảng An, quận Tây Hồ
            </li>
            <li style={{ paddingTop: "10px" }}>Số điện thoại:</li>
            <li>089 833 33 38 </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
