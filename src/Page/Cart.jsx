import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Space,
  Image,
  message,
  Popconfirm,
} from "antd";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const profile = JSON.parse(localStorage.getItem("profile"));
  const user_id = profile?.id;

  useEffect(() => {
    if (user_id) {
      fetchCart();
    }
  }, [user_id]);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/cart/${user_id}`);
      if (res.data && res.data.cart) {
        setCart(res.data.cart);
        setTotalPrice(calculateTotalPrice(res.data.cart));
      } else {
        setCart([]);
        setTotalPrice(0);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
      message.error("Failed to load cart.");
    }
  };

  const calculateTotalPrice = (cartData) => {
    return cartData.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const increaseQuantity = async (productId) => {
    await updateQuantity(productId, 1);
  };

  const decreaseQuantity = async (productId) => {
    await updateQuantity(productId, -1);
  };

  const updateQuantity = async (productId, change) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/cart/update", {
        user_id,
        product_id: productId,
        change,
      });
      fetchCart();
    } catch (error) {
      message.error("Error updating quantity.");
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/cart/remove", {
        user_id,
        product_id: productId,
      });
      fetchCart();
    } catch (error) {
      message.error("Error removing item.");
    }
  };


  const createOrder = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/api/order/${user_id}`);
      message.success("Order placed successfully!");
     
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
      message.error("Failed to place order.");
    }
  };

  const columns = [
    {
      title: "Product",
      key: "product",
      render: (_, record) => (
        <div className="product-column">
          <Image
            alt={record.product_name}
            src={`http://127.0.0.1:8000/storage/images/${record.image}`}
            style={{ width: 80, height: 80, marginRight: 10 }}
          />
          {record.product_name}
        </div>
      ),
    },
    {
      title: "Quantity",
      key: "quantity",
      render: (_, record) => (
        <Space>
          <Button onClick={() => decreaseQuantity(record.product_id)} danger>
            -
          </Button>
          <span>{record.quantity}</span>
          <Button
            onClick={() => increaseQuantity(record.product_id)}
            type="primary"
          >
            +
          </Button>
        </Space>
      ),
    },
    {
      title: "Total",
      key: "total",
      render: (_, record) =>
        `$${(record.price * record.quantity).toFixed(2)}`,
      responsive: ["md"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to remove this item?"
          onConfirm={() => removeFromCart(record.product_id)}
          okText="Yes"
          cancelText="No"
        >
          <Button danger>Remove</Button>
        </Popconfirm>
      ),
      responsive: ["sm"],
    },
  ];

  const footer = (
    <tr>
      <td colSpan={3} style={{ padding: "10px 15px", fontWeight: "bold" }}>
        <strong>Total Quantity:</strong>
      </td>
      <td colSpan={2} style={{ padding: "10px 15px", fontWeight: "bold" }}>
        {calculateTotalQuantity()}
      </td>
    </tr>
  );

  const footerTotal = (
    <tr>
      <td
        colSpan={3}
        style={{
          textAlign: "right",
          padding: "10px 15px",
          fontWeight: "bold",
          color: "#e74c3c",
        }}
      >
        <strong>Total Price:</strong>
      </td>
      <td
        colSpan={2}
        style={{
          padding: "10px 15px",
          fontWeight: "bold",
          color: "#e74c3c",
        }}
      >
        ${totalPrice.toFixed(2)}
      </td>
    </tr>
  );

  const initialOptions = {
    clientId: "AQj79O-9Gb5cinSPSBToGoyJUltqWY4n0ldFUqnzcjRYeCUM7RG28A5-TuyNPJ8quKSmQSxm6yKII1wD", // Replace with your real PayPal Client ID
    currency: "USD",
    intent: "capture",
  };

  return (
    <div>
      <Header />
      <div className="product-store position-relative" style={{ marginBottom: 50 }}>
        <div className="container">
          <div className="row">
            <div className="display-header">
              {cart.length === 0 ? (
                <div style={{ marginTop: 200, color: "red" }}>
                  <h1>Your cart is empty</h1>
                </div>
              ) : (
                <div style={{ marginTop: 80 }}>
                  <Table
                    rowKey="product_id"
                    columns={columns}
                    dataSource={cart}
                    pagination={false}
                    footer={() => (
                      <>
                        {footer}
                        {footerTotal}
                      </>
                    )}
                  />
                  <div className="col-12 mt-4">
                    <PayPalScriptProvider options={initialOptions}>
                      <PayPalButtons
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            purchase_units: [
                              {
                                amount: {
                                  value: totalPrice.toFixed(2),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          return actions.order.capture().then((details) => {
                            message.success(
                              `Payment Successful! Thank you, ${details.payer.name.given_name}.`
                            );
                            createOrder(); // <-- create order after PayPal success
                          });
                        }}
                      />
                    </PayPalScriptProvider>

                    <Link to="/">
                      <Button
                        className="mt-3"
                        style={{ marginLeft: 10 }}
                        size="large"
                      >
                        Back To Homepage
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
