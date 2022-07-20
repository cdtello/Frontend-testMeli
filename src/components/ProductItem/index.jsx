import React from "react";
import "@styles/ProductItem.scss";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="ProductItem">
      <img
        src={product.picture}
        alt={product.title}
        onClick={() => navigate(`/items/${product.id}`)}
      />

      <div className="product-info">
        <div>
          <div className="PriceItem">
            <div className="PriceAmount">
              ${product.price.amount.toLocaleString("de-DE")}
            </div>
            {product.free_shipping && <div className="FreeShipping" />}
          </div>

          <p className="Title">{product.title}</p>
        </div>
        <div>
          <p>{product.state_name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
