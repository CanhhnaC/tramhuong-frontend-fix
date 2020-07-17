import React, { useState } from "react";
import ProductsContext from "./ProductsCtx";
import Product from "./Product";
import Type from "./Type";

function App() {
  const [type, setType] = useState("");

  return (
    <ProductsContext.Provider value={{ type, setType }}>
      <Type />
      <Product />
    </ProductsContext.Provider>
  );
}

export default App;
