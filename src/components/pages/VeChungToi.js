import React from "react";

import { NavCategory } from "../layout/category";
import background from "./img/vechungtoi.png";

export default function VeChungToi() {
  return (
    <div>
      <NavCategory titleNav={"Về chúng tôi"} />
      <img className="w-100" src={background} alt="Về chúng tôi" />
    </div>
  );
}
