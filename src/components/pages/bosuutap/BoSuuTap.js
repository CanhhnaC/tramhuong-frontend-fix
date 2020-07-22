import React from "react";

import imgVong from "../img/vong.jpg";
import imgTramCanh from "../img/tramcanh.jpg";
import imgNhangTram from "../img/nhangtram.jpg";
import imgSlide from "../img/ludottram.jpg";

import {
  CategoryMain,
  CategorySlide,
  CategoryBar,
} from "../../layout/category";
import { useRouteMatch } from "react-router";

const dataSlide = {
  name: "Tác phẩm",
  des: "lorem islum dolor lorem islum dolorlorem islum dolorlorem islum dolor",
  link: "/tac-pham",
  img: imgSlide,
};

const dataMain = [
  {
    name: "Vòng",
    des: "lorem islum dolor",
    link: `/vong`,
    orderTxt: "first",
    img: imgVong,
  },
  {
    name: "Trầm Cảnh",
    des:
      "lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor lorem islum dolor",
    link: `/vong`,
    orderTxt: "last",
    img: imgTramCanh,
  },
  {
    name: "Nhang Trầm",
    des: "lorem islum dolor lorem islum dolor lorem islum dolor",
    link: `/vong`,
    orderTxt: "first",
    img: imgNhangTram,
  },
];

export default function BoSuuTap() {
  var link = useRouteMatch().url;

  const dataBar = [
    {
      name: "Tác phẩm",
      link: link + "/tac-pham",
    },
    {
      name: "Vòng",
      link: link + "/vong",
    },
    {
      name: "Trầm Cảnh",
      link: link + "/tram-canh",
    },
    {
      name: "Nhang Trầm",
      link: link + "/nhang-tram",
    },
  ];

  return (
    <div>
      <CategoryBar data={dataBar} name="Bộ sưu tập" />
      <CategorySlide data={dataSlide} />
      <CategoryMain data={dataMain} />
    </div>
  );
}
