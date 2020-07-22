import React from "react";

import imgSlide from "../img/ludottram.jpg";

import {
  CategoryMain,
  CategorySlide,
  CategoryBar,
} from "../../layout/category";

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

const dataBar = [
  {
    name: "Lư đốt trầm",
    link: "lu-dot-tram",
  },
  {
    name: "Lư xông điện",
    link: "lu-xong-dien",
  },
  {
    name: "Bộ thưởng trầm",
    link: "bo-thuong-tram",
  },
  {
    name: "Lư Bình Dân",
    link: "lu-binh-dan",
  },
];

export default function DungCu() {
  return (
    <div>
      <CategoryBar data={dataBar} name="Dụng cụ thưởng trầm" />
      <CategorySlide data={dataSlide} />
      <CategoryMain data={dataMain} />
    </div>
  );
}
