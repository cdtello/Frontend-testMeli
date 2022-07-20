import React, { useEffect } from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "../hooks/useGetProducts";
import { Loading } from "@components/Loading";
import "@styles/ProductList.scss";
import { MeliContext } from "../context/MeliContext";

const ProductList = ({ queryParams }) => {
  const { products, categories, loadingList, setQuery } =
    React.useContext(MeliContext);
  const queryP = queryParams?.replace("?q=", "");
  useEffect(() => {
    if (queryParams) {
      setQuery(queryP);
    }
  }, []);
  useGetProducts(1, queryP);
  return (
    <section className="main-container">
      {loadingList && <Loading />}
      {!loadingList && (
        <div className="ProductList">
          <div className="Categories">
            {categories && categories.map((cat) => `  > ${cat}`)}
          </div>
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
