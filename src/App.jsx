import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Page/Header";
import MainLayout from "./Page/MainLayout";
import Cart from "./Page/Cart";
import LayoutOne from "./layouts/LayoutOne";
import UserRegister from "./layouts/UserRegister";
import UserLogin from "./layouts/UserLogin";
import HomePageWel from "./Page/admin/HomePageWel";
import Product_display from "./Page/admin/Product_display";
import UserDisplay from "./Page/admin/UserDisplay";
function App() {
  const adminLogin = localStorage.getItem("is_admin") == "1";
  const clientLogin = localStorage.getItem("is_client") == "1";

  return (
    <BrowserRouter>
      {adminLogin && !clientLogin && (
        <LayoutOne>
          <Routes>
            <Route path="/" element={<HomePageWel />}></Route>
            <Route path="/product" element={<Product_display />}></Route>
            <Route path="/users" element={<UserDisplay />}></Route>
          </Routes>
        </LayoutOne>
      )}

      {!adminLogin && clientLogin && (
        <Routes>
          <Route path="/" element={<MainLayout />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      )}

      {!clientLogin && !adminLogin && (
        <Routes>
          <Route path="/regi" element={<UserRegister />}></Route>
          <Route path="/" element={<UserLogin />}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element = {<MainLayout />}></Route>
  //         <Route path="/header" element = {<Header />}></Route>
  //         <Route path="/cart" element = {<Cart />}></Route>
  //         <Route path="/one" element = {<LayoutOne />}></Route>
  //         <Route path="/regi" element = {<UserRegister />}></Route>
  //         <Route path="/login" element = {<UserLogin />}></Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;
