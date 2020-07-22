import React from "react";

import { NavCategory } from "../layout/category";
import background from "./img/lienhe.jpg";

export default function LienHe() {
  return (
    <div>
      <NavCategory titleNav={"Liên hệ"} />
      <h3 className="text-center" style={{ padding: "50px 0" }}>
        Liên hệ với chúng tôi để được tư vấn tận tình nhất
      </h3>
      <img className="w-100" src={background} alt="Về chúng tôi" />
    </div>
  );
}
