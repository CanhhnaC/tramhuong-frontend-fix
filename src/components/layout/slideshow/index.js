import React from "react";
import { Carousel, Button, Image } from "react-bootstrap";

import "./index.css";

import img from "../img/SlideShow.jpg";

export default function SlideShow() {
  const dataCar = [
    {
      id: "1",
      title: "Tác phẩm tiêu biểu",
      name: "Mai Hóa Long",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,    quaerat saepe perspiciatis, totam facilis libero unde voluptatum temporibus nesciun enim maxime non commodi ea accusamus a magni, ex    minus ipsum!",
    },
    {
      id: "2",
      title: "Tác phẩm tiêu biểu",
      name: "Mai Hóa Long",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,    quaerat saepe perspiciatis, totam facilis libero unde voluptatum temporibus nesciun enim maxime non commodi ea accusamus a magni, ex    minus ipsum!",
    },
    {
      id: "3",
      title: "Tác phẩm tiêu biểu",
      name: "Mai Hóa Long",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,    quaerat saepe perspiciatis, totam facilis libero unde voluptatum temporibus nesciun enim maxime non commodi ea accusamus a magni, ex    minus ipsum!",
    },
  ];

  return (
    <Carousel>
      {dataCar.map((item) => (
        <Carousel.Item key={item.id}>
          <Image className="w-100" src={img} alt="slideshow" />
          <Carousel.Caption>
            <h5 className="col-yell">{item.title}</h5>
            <h1 className="ici upper">{item.name}</h1>
            <p className="h5">{item.des}</p>
            <Button className="upper" variant="dark">
              Tìm hiểu
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
