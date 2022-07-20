import React from "react";
import Header from "@components/header";
import { MeliContext } from "../context/MeliContext";
const Layout = ({ children, title, subtitle }) => {
  const { search, setSearch } = React.useContext(MeliContext);

  return (
    <div className="Layout">
      <Header search={search} setSearch={setSearch} />
      {children}
    </div>
  );
};

export default Layout;
