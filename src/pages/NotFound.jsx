import React from "react";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>MELI | Error ✨</title>
        <meta name="Error MELI" content="Estamos en el Error MELI" />
      </Helmet>
      No encontrado, error 404.
    </div>
  );
};

export default NotFound;
