import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "../assets/vendor.css";
import "../assets/style.css";
import "../assets/bootstrap.min.css";

// Cart utility functions
const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];
const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

function ElectronicProduct() {
  const [lists, setList] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = () => {
    axios
      .get("http://127.0.0.1:8000/api/lastest")
      .then((res) => {
        setList(res.data.products); // assuming the response has { products: [...] }
        console.log(res.data.products);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };

  const handleAddToCart = (product) => {
    const cart = getCart();
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      message.warning(`${product.title} is already in your cart!`);
    } else {
      cart.push({ ...product, quantity: 1 });
      setCart(cart);
      message.success(`${product.title} has been added to your cart!`);

      setTimeout(() => {
        window.location.reload(); // Optional: refresh to reflect cart state
      }, 1000);
    }
  };
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength);
    }
    return title;
  };
  return (
    <section id="smart-watches" className="product-store position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Lastest Product</h2>
            <div className="btn-right">
              <a
                href="shop.html"
                className="btn btn-medium btn-normal text-uppercase"
              >
                Go Shop
              </a>
            </div>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper d-flex flex-wrap justify-content-start">
              {lists.map((item, index) => (
                <div
                  className="swiper-slide"
                  style={{ width: "23%", margin: 10 }}
                  key={index}
                >
                  <div className="product-card position-relative">
                    <div className="image-holder">
                      <img
                        src={`http://127.0.0.1:8000/storage/images/${item.image}`}
                        alt="product-item"
                        width={250}
                        height={300}
                      />
                    </div>
                    <div className="cart-concern position-absolute">
                      <div className="cart-button d-flex">
                        <button
                          className="btn btn-medium btn-black"
                          onClick={() => handleAddToCart(item)}
                        >
                          Add to Cart
                          <svg className="cart-outline">
                            <use xlinkHref="#cart-outline"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="card-detail d-flex justify-content-between align-items-baseline">
                      <h3
                        className="card-title text-uppercase"
                        style={{ width: "100%", fontSize: 18, height: 50 }}
                      >
                        <a
                          href="#"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          {truncateTitle(item.name, 16)}
                        </a>
                      </h3>
                      <span className="item-price pro_price">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
  );
}

export default ElectronicProduct;
