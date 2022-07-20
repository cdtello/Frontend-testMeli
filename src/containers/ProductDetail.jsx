import React, { useEffect } from "react";
import ProductInfo from "@components/ProductInfo";
import "@styles/ProductDetail.scss";
import { MeliContext } from "../context/MeliContext";
import useGetProducts from "../hooks/useGetProducts";
import { Loading } from "@components/Loading";

const ProductDetail = ({ productId }) => {
  const { detail, setProductId, loadingDetail } = React.useContext(MeliContext);

  useEffect(() => {
    setProductId(productId);
  }, []);
  useGetProducts(2);
  return (
    <aside className="ProductDetail">
      {loadingDetail && <Loading />}
      {!!detail && !loadingDetail && <ProductInfo product={detail} />}
    </aside>
  );
};

export default ProductDetail;
