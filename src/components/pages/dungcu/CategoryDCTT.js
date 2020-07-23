import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Image, Button, Row, Col } from "react-bootstrap";

import { CategoryBar, NavCategory } from "../../layout/category";
import { GetProductList, numberWithCommas } from "../../data/GetData";
import { typeCategory, nameCategory, dataCategory } from "../../data/config";
import FadeInSection from "../../layout/effect/FadeInSection";

import imgVongCo from "../img/vongco.jpg";
import imgVongTay from "../img/vongtay.jpg";

import "./CategoryDCTT.scss";

function Navbar() {
  var links = useRouteMatch();
  var parentPath = links.url.substring(0, links.url.lastIndexOf("/"));
  var navbar = null;

  const dataBar = [
    {
      name: "Lư đốt trầm",
      link: parentPath + "/lu-dot-tram",
    },
    {
      name: "Lư xông điện",
      link: parentPath + "/lu-xong-dien",
    },
    {
      name: "Bộ thưởng trầm",
      link: parentPath + "/bo-thuong-tram",
    },
    {
      name: "Lư Bình Dân",
      link: parentPath + "/lu-binh-dan",
    },
  ];

  return <CategoryBar data={dataBar} name="Bộ sưu tập" />;
}

function ShowProduct({ product }) {
  let match = useRouteMatch();
  return (
    <Col sm={6} lg={4}>
      {typeof product.pictures != "undefined" && (
        <Image
          fluid
          key={product.id}
          src={product.pictures[0].src}
          alt={product.pictures[0].title}
        />
      )}
      <h2 className="ici">{product.name}</h2>
      <h5 className="col-yell">{numberWithCommas(product.price)}</h5>
      <Link to={`${match.url}/${product.id}`}>
        <Button variant="dark">Tìm hiểu</Button>
      </Link>
    </Col>
  );
}

function ProductList({ typeId }) {
  const [limit, setLimit] = useState(12);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const item = await GetProductList({ typesId: typeId, limit: limit });
      if (item) {
        setProductList(item);
      }
    }
    fetchData();
  }, [limit, typeId]);
  return (
    <div>
      <Row className="productDCTT-item">
        {productList.map((item) => {
          return <ShowProduct key={item.id} product={item} />;
        })}
      </Row>
      <NavCategory>
        <Button onClick={() => setLimit(limit + 6)}>Xem Thêm</Button>
      </NavCategory>
    </div>
  );
}

function Main() {
  var link = useRouteMatch().params.category;
  var main = null;

  switch (link) {
    case typeCategory[link]:
      main = (
        <div>
          <NavCategory titleNav={nameCategory[link]} />
          <ProductList typeId={dataCategory[link]} />
        </div>
      );
      break;
    default:
      main = <h1>Trang bạn yêu cầu không tìm thấy</h1>;
      break;
  }

  return main;
}

export default function CategoryDCTT() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
