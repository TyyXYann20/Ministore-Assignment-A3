import React from "react";
import Header from "./Header";
import Slide from "./Slide";
import CompanyService from "./CompanyService";
import JeweleryProduct from "./JeweleryProduct";
import ElectronicProduct from "./ElectronicProduct";
import NewYears from "./NewYears";
import LastestPost from "./LastestPost";
import Footer from "./Footer";
import UserRegister from "../layouts/UserRegister";

function MainLayout() {
  return (
    <div>
      <Header />
      <Slide />
      <CompanyService />

      <JeweleryProduct />
      <ElectronicProduct />
      <Footer />
    </div>
  );
}

export default MainLayout;
