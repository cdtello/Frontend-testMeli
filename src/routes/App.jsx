import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Lists from "@pages/Lists";
import Detail from "@pages/Detail";
import "@styles/global.css";
import { MeliProvider } from "../context/MeliContext";

const App = () => {
  return (
    <MeliProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/items" element={<Lists />} />
            <Route path="/items/:id" index element={<Detail />} />
            <Route path="*" index element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </MeliProvider>
  );
};

export default App;
