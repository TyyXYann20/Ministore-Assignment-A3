import React, { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "../assets/vendor.css";
import "../assets/style.css";
import "../assets/bootstrap.min.css";

function JeweleryProduct() {
  const [lists, setList] = useState([]);
  const [titleP1, setTitleP1] = useState("New Arrival");

  useEffect(() => {
    getAllProduct();
    getTitle();
  }, []);

  const getAllProduct = () => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
        if (res.data.status === 200) {
          setList(res.data.products);
        } else {
          message.error("Failed to load products.");
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Error fetching product data.");
      });
  };

  const getTitle = () => {
    axios
      .get("http://127.0.0.1:8000/api/title/alls")
      .then((res) => {
        if (res.data?.p1?.name) {
          setTitleP1(res.data.p1.name);
        }
      })
      .catch((err) => {
        console.error(err);
        message.warning("Failed to load title.");
      });
  };

  const handleAddToCart = (product) => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const user_id = profile?.id;

    if (!user_id) {
      message.warning("Please log in to add items to your cart.");
      return;
    }

    axios
      .post("http://127.0.0.1:8000/api/cart/add", {
        user_id: user_id,
        product_id: product.product_id,
        quantity: 1,
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          message.success(`${product.name} has been added to your cart!`);
        } else {
          message.warning("Something went wrong while adding to cart.");
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("Error adding product to cart.");
      });
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <section id="products" className="product-store position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">{titleP1}</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">
                Go to Shop
              </a>
            </div>
          </div>

          {/* Row for Products */}
          <div className="row">
            {lists.map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img
                      src={`http://127.0.0.1:8000/storage/images/${item.image}`}
                      alt={item.name}
                      width={250}
                      height={300}
                    />
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <button className="btn btn-medium btn-black" onClick={() => handleAddToCart(item)}>
                        Add to Cart
                        <svg className="cart-outline">
                          <use xlinkHref="#cart-outline"></use>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline">
                    <h3 className="card-title text-uppercase" style={{ width: "100%", fontSize: 18, height: 50 }}>
                      <a href="#" style={{ textDecoration: "none", color: "black" }}>
                        {truncateTitle(item.name, 16)}
                      </a>
                    </h3>
                    <span className="item-price pro_price">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
  );
}

export default JeweleryProduct;
