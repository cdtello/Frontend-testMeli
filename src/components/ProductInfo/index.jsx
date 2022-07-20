import React from "react";
import "@styles/ProductInfo.scss";

const ProductInfo = ({ product }) => {
  return (
    <div className="containerInfo">
      <div className="ProductInfo">
        <div className="First">
          <img
            className="ProductImg"
            src={product.picture}
            alt="{product.title}"
          />
          <div className="BasicInfo">
            <p className="Condition">
              {product.condition && "Nuevo"} - {product.sold_quantity} vendidos
            </p>
            <p className="Title">{product.title}</p>
            <p className="Price">
              $ {product.amount && product.amount.toLocaleString("de-DE")}
            </p>
            <button
              className="Button"
              onClick={() => {
                alert("Elemento comprado");
              }}
            >
              Comprar
            </button>
          </div>
        </div>

        <p className="DescriptionTitle">Descripción del producto</p>

        <p className="Description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductInfo;
