import React from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
