import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "./ProductsCtx";
import { collectIdsAndData } from "../utilities";
import { firestore } from "../firebase";

export default function Type({ setType }) {
  const ctx = useContext(ProductsContext);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    const fetchType = async () => {
      const snapshot = await firestore.collection("types").get();
      const items = snapshot.docs.map(collectIdsAndData);
      setCate(items);
    };
    fetchType();
    console.log("type");
  }, []);

  return (
    <select onChange={(e) => ctx.setType(e.target.value)}>
      {cate.map((item, key) => (
        <option key={key} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
