import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.png";
import "./index.css";
import { Nav } from "react-bootstrap";

export default function Header() {
  const activeStyle = { color: "#FCCC84" };

  return (
    <header>
      <Nav className="justify-content-center upper align-items-center">
        <Nav.Item>
          <NavLink
            activeStyle={activeStyle}
            className="nav-link"
            to="/bo-suu-tap"
          >
            Bộ sưu tập
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeStyle={activeStyle} className="nav-link" to="/dung-cu">
            Dụng cụ thưởng trầm
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={activeStyle}
            className="nav-link"
            to="/ve-chung-toi"
          >
            Về chúng tôi
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeStyle={activeStyle} className="nav-link" to="/">
            <img className="header-logo"  src={logo} alt={"logo"} />
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={activeStyle}
            className="nav-link"
            to="/kien-thuc"
          >
            Kiến thức
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={activeStyle}
            className="nav-link"
            to="/thong-tin"
          >
            Thông tin sự kiện
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={activeStyle}
            className="nav-link"
            to="/chinh-sach"
          >
            Chính sách
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink activeStyle={activeStyle} className="nav-link" to="/lien-he">
            Liên hệ
          </NavLink>
        </Nav.Item>
      </Nav>
    </header>
  );
}
