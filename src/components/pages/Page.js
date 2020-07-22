import React from "react";

// Components
import Main from "../layout/main/Main";
import Header from "../layout/header/Header";
import BoSuuTap from "./BoSuuTap";
import DungCu from "./DungCu";
import VeChungToi from "./VeChungToi";
import LienHe from "./LienHe";
import KienThuc from "./KienThuc";
import ThongTin from "./ThongTin";
import ChinhSach from "./ChinhSach";

import "./page.scss";

export default function Page({ match }) {
  var link = match.params.pages;
  if (link === "bo-suu-tap") {
    link = <BoSuuTap />;
  } else if (link === "dung-cu") {
    link = <DungCu />;
  } else if (link === "ve-chung-toi") {
    link = <VeChungToi />;
  } else if (link === "lien-he") {
    link = <LienHe />;
  } else if (link === "kien-thuc") {
    link = <KienThuc />;
  } else if (link === "thong-tin") {
    link = <ThongTin />;
  } else if (link === "chinh-sach") {
    link = <ChinhSach />;
  } else link = <h1>Không tìm thấy trang bạn yêu cầu</h1>;

  return (
    <div className="home">
      <Header />
      <Main styles={{ padding: "0" }}>{link}</Main>
    </div>
  );
}
