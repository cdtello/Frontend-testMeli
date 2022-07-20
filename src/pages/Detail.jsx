import React from "react";
import ProductDetail from "@containers/ProductDetail";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Detail = () => {
  return (
    <>
      <Helmet>
        <title>MELI | Item Detail ✨</title>
        <meta
          name="Item Detail MELI"
          content="Estamos en el Item Detail de MELI"
        />
      </Helmet>
      <ProductDetail productId={useParams().id} />
    </>
  );
};

export default Detail;
