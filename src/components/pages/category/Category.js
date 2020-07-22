import React, { useState } from "react";
// Components

import Header from "../layout/header/Header";
import Main from "../layout/main/Main";
import CategoryBST from "./category/CategoryBST";
import { dataCategory, nameCategory, typeCategory } from "../data/config";

// Image
import imgVongCo from "./img/vongco.jpg";
import imgVongTay from "./img/vongtay.jpg";
import { ProductList } from "../data/product";
import ProductsContext from "../data/ProductCtx";
import ShowBST from "../data/ShowBST";
import ShowDCTT from "../data/ShowDCTT";

import NavCategory from "../layout/NavCategory/NavCategory";
import KienThuc from "./KienThuc";

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
    link: "/bo-suu-tap/day-chuyen",
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

// const barBST = [
//   {
//     name: "Tác phẩm",
//     link: "tac-pham",
//   },
//   {
//     name: "Vòng",
//     link: "vong",
//   },
//   {
//     name: "Trầm Cảnh",
//     link: "tram-canh",
//   },
//   {
//     name: "Nhang Trầm",
//     link: "nhang-tram",
//   },
// ];

// const barDC = [
//   {
//     name: "Lư đốt trầm",
//     link: "lu-dot-tram",
//   },
//   {
//     name: "Lư xông điện",
//     link: "lu-xong-dien",
//   },
//   {
//     name: "Bộ thưởng trầm",
//     link: "bo-thuong-tram",
//   },
//   {
//     name: "Lư Bình Dân",
//     link: "lu-binh-dan",
//   },
// ];

export default function Category({ match }) {
  // Define
  var link = match.params.category,
    show,
    pageSize;
  const [product, setProduct] = useState([]);
  const [pageNum, setPageNum] = useState(0);

  // Logic
  if (match.params.pages === "bo-suu-tap") {
    pageSize = 4;
    show = <ShowBST />;
  } else if (match.params.pages === "dung-cu") {
    pageSize = 12;
    show = <ShowDCTT />;
  } else if (match.params.pages === "kien-thuc") {
    pageSize = 5;
    show = <KienThuc />;
  }

  switch (link) {
    case "vong":
      link = <CategoryBST data={dataVong} />;
      break;
    case "nhang-tram":
      link = <CategoryBST data={dataNhang} />;
      break;
    case typeCategory[link]:
      link = (
        <div>
          <NavCategory titleNav={nameCategory[link]} />
          <ProductList pageSize={pageSize} typeId={dataCategory[link]} />
        </div>
      );
      break;
    default:
      link = <h1>Not found</h1>;
  }

  return (
    <div>
      <Header />
      <Main styles={{ padding: "0" }}>
        <ProductsContext.Provider
          value={{
            product,
            setProduct,
            pageNum,
            setPageNum,
          }}
        >
          {/* <CategoryBar name="Dung cu thuong tram" data={barDC} router="dung-cu" /> */}
          {link}
          {show}
        </ProductsContext.Provider>
      </Main>
    </div>
  );
}
