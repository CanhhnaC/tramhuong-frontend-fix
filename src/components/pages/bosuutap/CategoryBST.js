import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { Image, Button, Row, Col } from "react-bootstrap";

import { CategoryBar, NavCategory } from "../../layout/category";
import { GetProductList, numberWithCommas } from "../../data/GetData";
import { typeCategory, nameCategory, dataCategory } from "../../data/config";
import FadeInSection from "../../layout/effect/FadeInSection";

import imgVongCo from "../img/vongco.jpg";
import imgVongTay from "../img/vongtay.jpg";

import "./CategoryBTS.scss";

function Navbar() {
  var links = useRouteMatch();
  var parentPath = links.url.substring(0, links.url.lastIndexOf("/"));
  var navbar = null;

  const dataBar = [
    {
      name: "Tác phẩm",
      link: parentPath + "/tac-pham",
    },
    {
      name: "Vòng",
      link: parentPath + "/vong",
    },
    {
      name: "Trầm Cảnh",
      link: parentPath + "/tram-canh",
    },
    {
      name: "Nhang Trầm",
      link: parentPath + "/nhang-tram",
    },
  ];

  if (
    links.params.category !== "vong" ||
    links.params.category !== "nhang-tram"
  )
    navbar = <CategoryBar data={dataBar} name="Bộ sưu tập" />;
  return navbar;
}

function MainBTS({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="main-bst" key={item.name}>
          <NavCategory titleNav={item.name} />
          <p>{item.des}</p>
          <Image src={item.img} title={item.name} fluid />
          <br />
          <Link to={item.link}>
            <Button>Tìm hiểu</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

function ShowProduct({ product }) {
  let match = useRouteMatch();
  return (
    <FadeInSection>
      <Row className="productBST-item">
        <Col lg={6} className="productBST-item__col1">
          {typeof product.pictures != "undefined" && (
            <Image
              fluid
              src={product.pictures[0].src}
              alt={product.pictures[0].title}
            />
          )}
        </Col>
        <Col lg={6} className="productBST-item__col2">
          <h1 className="ici">{product.name}</h1>
          <h4 className="col-yell">{numberWithCommas(product.price)}</h4>
          <p>{product.description[0].content}</p>
          <Link to={`${match.url}/${product.id}`}>
            <Button variant="dark" className="upper">
              Tìm hiểu
            </Button>
          </Link>
        </Col>
      </Row>
    </FadeInSection>
  );
}

function ProductList({ typeId }) {
  const [limit, setLimit] = useState(4);
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
      {productList.map((item) => {
        return <ShowProduct key={item.id} product={item} />;
      })}
      <NavCategory>
        <Button onClick={() => setLimit(limit + 5)}>Xem Thêm</Button>
      </NavCategory>
    </div>
  );
}

function Main() {
  // var links = useRouteMatch().url;
  // var parentPath = links.substring(0, links.lastIndexOf("/"));
  var link = useRouteMatch().params.category;
  var main = null;

  const dataVong = [
    {
      name: "Vòng cổ",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt voluptate dicta odit similique ipsam nobis voluptatum sed dolorem corrupti, sit error itaque sequi commodi impedit incidunt porro obcaecati delectus?",
      img: imgVongCo,
      link: "/bo-suu-tap/vong-co",
    },
    {
      name: "Vòng tay",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci amet",
      img: imgVongTay,
      link: "/bo-suu-tap/vong-tay",
    },
    {
      name: "Mặt dây chuyền",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci met",
      img: imgVongCo,
      link: "/bo-suu-tap/mat-day-chuyen",
    },
  ];

  const dataNhang = [
    {
      name: "Nhang cây",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt voluptate dicta odit similique ipsam nobis voluptatum sed dolorem corrupti, sit error itaque sequi commodi impedit incidunt porro obcaecati delectus?",
      img: imgVongCo,
      link: "nhang-cay",
    },
    {
      name: "Nhang nụ",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci amet",
      img: imgVongTay,
      link: "nhang-nu",
    },
    {
      name: "nhang không tăm",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci met",
      img: imgVongCo,
      link: "nhang-khong-tam",
    },
    {
      name: "Bột trầm",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci met",
      img: imgVongCo,
      link: "bot-tram",
    },
    {
      name: "trầm miếng",
      des:
        "Voluptatum, facilis! Necessitatibus alias, a recusandae, delectus repellat commodi, nihil consequuntur ut nisi quisquam officia? Rerum perferendis expedita reiciendis sed, assumenda iure quas soluta numquam necessitatibus quo id consequatur cum. Recusandae assumenda ducimus placeat, non beatae adipisci met",
      img: imgVongCo,
      link: "tram-mieng",
    },
  ];

  switch (link) {
    case "vong":
      main = <MainBTS data={dataVong} />;
      break;
    case "nhang-tram":
      main = <MainBTS data={dataNhang} />;
      break;
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

export default function CategoryBST() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
