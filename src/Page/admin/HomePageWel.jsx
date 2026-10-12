import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faDesktop,
  faMicrochip,
  faUsers,
  faShoppingCart,
  faBox,
  faBoxOpen,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Register icons
library.add(faDesktop, faMicrochip, faUsers, faShoppingCart, faBox, faBoxOpen, faImage);

const HomePageWel = () => {
  const counts = {
    categories: 5, 
    products: 10,
    users: 4,
    cartItems: 4,
    orders: 0,
    orderDetails: 0,
    slideshowImages: 2,
  };

  const recentOrders = [
    // { orderId: 201, username: "Tyy", totalPrice: 899.99, status: "pending", createdAt: "2025-04-20" },
    // { orderId: 202, username: "Vichet", totalPrice: 1350.00, status: "shipped", createdAt: "2025-04-19" },
    // { orderId: 205, username: "Vichet", totalPrice: 299.99, status: "cancelled", createdAt: "2025-04-16" },
  ];

  const topProducts = [
    // { productId: 1, name: "Intel Core i9 Processor", totalSold: 75 },
    // { productId: 2, name: "NVIDIA RTX 4080", totalSold: 62 },
    // { productId: 3, name: "Dell XPS 15 Laptop", totalSold: 58 },
    // { productId: 4, name: "Samsung SSD 1TB", totalSold: 49 },
  ];

  const cardData = [
    { className: "categories-card", icon: "desktop", label: "Categories", value: counts.categories },
    { className: "products-card", icon: "microchip", label: "Products", value: counts.products },
    { className: "clients-card", icon: "users", label: "Clients", value: counts.clients },
    { className: "cart-card", icon: "shopping-cart", label: "Cart Items", value: counts.cartItems },
    { className: "orders-card", icon: "box", label: "Orders", value: counts.orders },
    { className: "order-details-card", icon: "box-open", label: "Order Details", value: counts.orderDetails },
    { className: "slideshow-card", icon: "image", label: "Slideshow Images", value: counts.slideshowImages },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Computer Store Admin Dashboard</h2>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className={`count-card ${card.className}`}>
              <FontAwesomeIcon icon={card.icon} className="me-2" />
              {card.label}: {card.value}
            </div>
          </div>
        ))}
      </div>

      <SectionBox title="Recent 5 Orders">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Ordered At</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.username}</td>
                <td>${order.totalPrice.toFixed(2)}</td>
                <td>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</td>
                <td>{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionBox>

      <SectionBox title="Top 4 Best-Selling Products">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Total Sold</th>
            </tr>
          </thead>
          <tbody>
            {topProducts.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.totalSold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionBox>

      <style>{`
        .count-card {
          padding: 20px;
          border-radius: 10px;
          color: #fff;
          font-size: 20px;
          text-align: center;
        }
        .categories-card { background-color: #007bff; }
        .products-card { background-color: #28a745; }
        .clients-card { background-color: #ffc107; color: #000; }
        .cart-card { background-color: #dc3545; }
        .orders-card { background-color: #6f42c1; }
        .order-details-card { background-color: #fd7e14; }
        .slideshow-card { background-color: #17a2b8; }

        .section-title {
          font-size: 24px;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 3px solid #007bff;
          display: inline-block;
          padding-bottom: 5px;
          margin-bottom: 15px;
        }

        .custom-table {
          border-collapse: collapse;
          width: 100%;
          border: 1px solid #dee2e6;
        }

        .custom-table th {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 12px;
        }

        .custom-table td {
          padding: 10px;
          text-align: center;
          border: 1px solid #dee2e6;
        }

        .custom-table tbody tr:nth-child(even) {
          background-color: #f8f9fa;
        }

        .custom-table tbody tr:hover {
          background-color: #e9ecef;
        }
      `}</style>
    </div>
  );
};

const SectionBox = ({ title, children }) => (
  <div className="section-box mt-4">
    <h3 className="section-title">{title}</h3>
    {children}
  </div>
);

export default HomePageWel;
