import React from "react";
const MeliContext = React.createContext();

function MeliProvider(props) {
  const [query, setQuery] = React.useState("");
  const [search, setSearch] = React.useState(1);
  const [products, setProducts] = React.useState([]);
  const [detail, setDetail] = React.useState([]);
  const [productId, setProductId] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [loadingDetail, setLoadingDetail] = React.useState(true);
  const [loadingList, setLoadingList] = React.useState(true);
  return (
    <MeliContext.Provider
      value={{
        search,
        setSearch,
        products,
        setProducts,
        query,
        setQuery,
        detail,
        setDetail,
        productId,
        setProductId,
        categories,
        setCategories,
        loadingDetail,
        setLoadingDetail,
        loadingList,
        setLoadingList,
      }}
    >
      {props.children}
    </MeliContext.Provider>
  );
}

export { MeliContext, MeliProvider };
