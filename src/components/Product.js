import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "./ProductsCtx";
import { collectIdsAndData } from "../utilities";
import { firestore } from "../firebase";

export default function Product({ type }) {
  const ctx = useContext(ProductsContext);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchType = async () => {
      const snapshot = await firestore
        .collection("products")
        .where("typesId", "==", ctx.type)
        .get();
      const items = snapshot.docs.map(collectIdsAndData);
      setProduct(items);
    };
    fetchType();
    console.log("product");
  }, [ctx.type]);

  return (
    <ul>
      {product.map((item, key) => (
        <li key={key}>{item.name}</li>
      ))}
    </ul>
  );
}
