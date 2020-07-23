import React from "react";
import { useRouteMatch } from "react-router";

import {
  CategoryMain,
  CategorySlide,
  CategoryBar,
} from "../../layout/category";

import imgSlide from "../img/ludottram.jpg";

const dataSlide = {
  name: "Lư đốt trầm",
  des: "lorem islum dolor lorem islum dolorlorem islum dolorlorem islum dolor",
  link: "/lu-dot-tram",
  img: imgSlide,
};

const dataMain = [
  {
    name: "Lư xông điện",
    des:
      "lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor",
    link: `/lu-xong-dien`,
    orderTxt: "first",
    img: [imgSlide],
  },
  {
    name: "bộ thưởng trầm",
    des: "lorem islum dolor lorem islum dolor lorem islum dolor",
    link: `/bo-thuong-tram`,
    orderTxt: "last",
    img: [imgSlide],
  },
  {
    name: "lư bình dân",
    des: "lorem islum dolor lorem islum dolor lorem islum dolor",
    link: `/lu-binh-dan`,
    orderTxt: "first",
    img: [imgSlide],
  },
];

export default function DungCu() {
  var link = useRouteMatch().url;
  const dataBar = [
    {
      name: "Lư đốt trầm",
      link: link + "/lu-dot-tram",
    },
    {
      name: "Lư xông điện",
      link: link + "/lu-xong-dien",
    },
    {
      name: "Bộ thưởng trầm",
      link: link + "/bo-thuong-tram",
    },
    {
      name: "Lư Bình Dân",
      link: link + "/lu-binh-dan",
    },
  ];

  return (
    <div>
      <CategoryBar data={dataBar} name="Dụng cụ thưởng trầm" />
      <CategorySlide data={dataSlide} />
      <CategoryMain data={dataMain} />
    </div>
  );
}
