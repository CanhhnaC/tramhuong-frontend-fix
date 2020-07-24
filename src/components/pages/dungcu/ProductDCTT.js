import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { CategoryBar } from "../../layout/category";
import { GetOne, numberWithCommas, GetProductList } from "../../data/GetData";
import { Row, Col, Button, Image } from "react-bootstrap";
import { CarouselSlides } from "../../layout/effect/CarouselSlides";
import { dataCategory } from "../../data/config";

function Product({ id }) {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState("");

  function showImage(image) {
    setImage(image.src);
  }

  useEffect(() => {
    async function fetchData() {
      const item = await GetOne({ collection: "products", uid: id });
      if (item) {
        setProduct(item);
        setImage(item.pictures[0].src);
      }
    }
    fetchData();
  }, [id]);

  return (
    <Row className="oneProduct-dctt">
      <Col lg={7} className="oneProduct-dctt-col1">
        <div className="dctt-col1_container">
          <Image fluid width={600} height={600} src={image} alt={image} />
        </div>

        <Row className="dctt-col1_list ">
          {(product.pictures || []).map((item, key) => (
            <Col key={key} lg={4}>
              <Image
                fluid
                src={item.src}
                alt={item.title}
                onClick={() => showImage(item)}
              />
            </Col>
          ))}
        </Row>
      </Col>

      <Col lg={5} className="oneProduct-dctt-col2">
        <h1 className="ici upper">{product.name}</h1>
        <h5>{numberWithCommas(product.price)}</h5>
        <h6>SỐ LƯỢNG CÒN: {product.amount} chiếc</h6>
        <div className="oneProduct-dctt_text">
          {(product.description || []).map((item, key) => (
            <p key={key}>{item.content}</p>
          ))}
        </div>
        <Button variant="dark" className="upper">
          Chia sẻ
        </Button>
      </Col>
    </Row>
  );
}

function RelatedProduct({ category }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const item = await GetProductList({ typesId: category, limit: 5 });
      if (item) setProduct(item);
    }
    fetchData();
  }, []);

  return (
    <div className="carousel-slides">
      <CarouselSlides slides={product} />
    </div>
  );
  // return <div>{console.log(category)}</div>;
}

export default function ProductDCTT() {
  var link = useRouteMatch();
  var path = link.url.substring(0, link.url.lastIndexOf("/"));
  var parentPath = path.substring(0, path.lastIndexOf("/"));
  var id = link.params.productID;
  var category = dataCategory[link.params.category];

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

  return (
    <div>
      <CategoryBar data={dataBar} name="Dụng cụ thưởng trầm" />
      <Product id={id} />
      <RelatedProduct category={category} />
    </div>
  );
}
