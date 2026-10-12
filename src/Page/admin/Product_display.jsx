import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Image, message, Popconfirm, Button, Space } from "antd";

const Product_display = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products", err);
        message.error("Could not load products");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/products/${id}`)
      .then(() => {
        message.success("Product deleted successfully");
        fetchProducts(); // Refresh the product list
      })
      .catch((err) => {
        console.error("Delete failed", err);
        message.error("Failed to delete product");
      });
  };

  const handleEdit = (id) => {
    message.info(`Edit feature is not implemented. Product ID: ${id}`);
    
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "product_id",
      key: "product_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${parseFloat(price).toFixed(2)}`,
    },
    {
      title: "Category ID",
      dataIndex: "category_id",
      key: "category_id",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <Image
          width={80}
          src={`http://127.0.0.1:8000/storage/images/${image}`}
          alt="product"
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record.product_id)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(record.product_id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="product_id"
        loading={loading}
        bordered
        pagination={{ pageSize: 4 }}
      />
    </div>
  );
};

export default Product_display;
