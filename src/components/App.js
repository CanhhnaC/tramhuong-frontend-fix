// Modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import Event from "./pages/thongtin/Event";
import Post from "./pages/kienthuc/Post";

// // List component
import CategoryBST from "./pages/bosuutap/CategoryBST";
import CategoryDCTT from "./pages/dungcu/CategoryDCTT";

import ProductDCTT from './pages/dungcu/ProductDCTT'
// Product 

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

            <Route exact path="/thong-tin/:eventID" component={Event} />
            <Route exact path="/kien-thuc/:postID" component={Post} />


            <Route exact path="/bo-suu-tap/:category" component={CategoryBST} />
            <Route exact path="/dung-cu/:category" component={CategoryDCTT} />
            <Route exact path="/dung-cu/:category/:productID" component={ProductDCTT} />
            {/* <Route exact path="/bo-suu-tap/:category/:productID" component={ProductBST} /> */}
          </Main>
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
