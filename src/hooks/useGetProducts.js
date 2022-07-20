import React, { useEffect } from "react";
import axios from "axios";
import { MeliContext } from "../context/MeliContext";
const ITEMS = 1;
const ITEMDETAIL = 2;

const useGetProducts = (type, queryParams = undefined) => {
  const {
    search,
    setProducts,
    setDetail,
    setCategories,
    query,
    productId,
    setLoadingDetail,
    setLoadingList,
  } = React.useContext(MeliContext);

  const ApiProducts = `http://localhost:3000/v1/api/items?q=${
    query || queryParams
  }&limit=4&offset=1`;
  const ApiDetail = `http://localhost:3000/v1/api/items/${productId}`;

  if (type === ITEMS) {
    useEffect(async () => {
      setLoadingList(true);
      const response = await axios(ApiProducts);
      setCategories(response.data.categories);
      setProducts(response.data.items);
      setLoadingList(false);
    }, [search]);
  } else if (type === ITEMDETAIL) {
    useEffect(async () => {
      setLoadingDetail(true);
      const response = await axios
        .get(ApiDetail)
        .then((response) => {
          const res = response.data;
          return {
            ...res.author,
            ...res.item,
            ...res.item.price,
            price: res.item.price.amount,
          };
        })
        .catch(() => {});

      setDetail(response);
      setLoadingDetail(false);
    }, [productId]);
  }
};

export default useGetProducts;
