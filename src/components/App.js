// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";

// Layout
import Header from "./layout/header";
import Main from "./layout/main";

// // Component
import TrangChu from "./pages/trangchu";
import BoSuuTap from "./pages/bosuutap/BoSuuTap";
import DungCu from "./pages/dungcu/DungCu";
import VeChungToi from "./pages/VeChungToi";
import LienHe from "./pages/LienHe";
import ChinhSach from "./pages/ChinhSach";
import KienThuc from "./pages/kienthuc";
import ThongTin from "./pages/thongtin";

// // Child Component
// import CategoryBST from "./home/pages/bosuutap/CategoryBST";
// import CategoryDCTT from "./home/pages/dungcu/CategoryDCTT";

import ScrollToTop from "./layout/effect/ScrollToTop";
// Css
import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path="/" component={TrangChu} />

          <Main styles={{ padding: "0" }}>
            <Route exact path="/bo-suu-tap" component={BoSuuTap} />
            <Route exact path="/dung-cu" component={DungCu} />
            <Route exact path="/ve-chung-toi" component={VeChungToi} />
            <Route exact path="/lien-he" component={LienHe} />
            <Route exact path="/chinh-sach" component={ChinhSach} />
            <Route exact path="/kien-thuc" component={KienThuc} />
            <Route exact path="/thong-tin" component={ThongTin} />
            {/* <Route exact path={["bo-suu-tap/:"]}
            <Route exact path="/bo-suu-tap/:category" component={CategoryBST} />
            <Route exact path="/dung-cu/:category" component={CategoryDCTT} /> */}
          </Main>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
