import React from "react";
import ProductList from "@containers/ProductList";
import { Helmet } from "react-helmet";
const Lists = () => {
  return (
    <>
      <Helmet>
        <title>MELI | List Items ✨</title>
        <meta
          name="List Items MELI"
          content="Estamos en el List Items de MELI"
        />
      </Helmet>
      <ProductList queryParams={location?.search} />
    </>
  );
};

export default Lists;
