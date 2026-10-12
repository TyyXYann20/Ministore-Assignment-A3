import React, { useState, useEffect } from "react";
import logo from "../assets/main-logo.png";

import { Link } from "react-router-dom";


const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

function Header() {
  
  const [cartCount, setCartCount] = useState(0);
  const handleLogout = () => {
    localStorage.setItem("is_client", false);
    window.location.href = "/";
  };
 
  useEffect(() => {
    const cart = getCart();
    setCartCount(cart.length); 
  }, []); 

  return (
    <div>
      <div className="search-popup">
        <div className="search-popup-container">
          <form role="search" method="get" className="search-form" action="">
            <input
              type="search"
              id="search-form"
              className="search-field"
              placeholder="Type and press enter"
              value=""
              name="s"
            />
            <button type="submit" className="search-submit">
              <svg className="search">
                <use xlinkHref="#search"></use>
              </svg>
            </button>
          </form>

          <h5 className="cat-list-title">Browse Categories</h5>

          <ul className="cat-list">
            <li className="cat-list-item">
              <a href="#" title="Mobile Phones">
                Mobile Phones
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Smart Watches">
                Smart Watches
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Headphones">
                Headphones
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Accessories">
                Accessories
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Monitors">
                Monitors
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Speakers">
                Speakers
              </a>
            </li>
            <li className="cat-list-item">
              <a href="#" title="Memory Cards">
                Memory Cards
              </a>
            </li>
          </ul>
        </div>
      </div>

      <header
        id="header"
        className="site-header header-scrolled position-fixed text-black bg-light"
      >
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src={logo} className="logo" />
            </a>
            <button
              className="navbar-toggler d-flex d-lg-none order-3 p-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg className="navbar-icon">
                <use xlinkHref="#navbar-icon"></use>
              </svg>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="bdNavbar"
              aria-labelledby="bdNavbarOffcanvasLabel"
            >
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} className="logo" />
                </a>
                <button
                  type="button"
                  className="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul
                  id="navbar"
                  className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3"
                >
                  <li className="nav-item">
                    <a className="nav-link me-4 active" href="#billboard">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#company-services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#products">
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#smart-watches">
                      Watches
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#yearly-sale">
                      Sale
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="#latest-blog">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link me-4 dropdown-toggle link-dark"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="about.html" className="dropdown-item">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="blog.html" className="dropdown-item">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="shop.html" className="dropdown-item">
                          Shop
                        </a>
                      </li>
                      <li>
                      <Link to={"/cart"} className="dropdown-item"  >
                      Cart
                      </Link>
                      </li>
                      <li>
                        <a href="checkout.html" className="dropdown-item">
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a href="single-post.html" className="dropdown-item">
                          Single Post
                        </a>
                      </li>
                      <li>
                        <a href="single-product.html" className="dropdown-item">
                          Single Product
                        </a>
                      </li>
                      <li>
                        <a href="contact.html" className="dropdown-item">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <div className="user-items ps-5">
                      <ul className="d-flex justify-content-end list-unstyled">
                        <li className="search-item pe-3">
                          <a href="#" className="search-button">
                            <svg className="search">
                              <use xlinkHref="#search"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="pe-3">
                          <a href="#"onClick={() => handleLogout()} >
                            <svg className="user">
                              <use xlinkHref="#user"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <Link to={"/cart"}  style={{ textDecoration:"none"}}>
                            <svg className="cart">
                              <use xlinkHref="#cart"></use>
                            </svg>
                            {cartCount > 0 && (
                              <span
                                className="cart-count"
                                style={{ color: "red ", fontWeight: "bold" , textDecoration:"none"}}
                              >
                                {cartCount}
                              </span>
                            )}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
