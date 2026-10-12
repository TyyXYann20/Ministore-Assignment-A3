import { useEffect, useState } from "react";
import axios from "axios";
import { Table, message, Button, Space, Popconfirm } from "antd";

const UserDisplay = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users", err);
        message.error("Could not load users");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (id) => {
    message.info(`Edit feature is not implemented. User ID: ${id}`);
    // Navigate to edit page or show a modal (optional)
  };

  const handleDelete = (id) => {
    // Replace this with actual DELETE request if needed
    message.warning(`Delete request for user ID ${id} (not implemented)`);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record.id)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDelete(record.id)}
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
      <h2>User List</h2>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        loading={loading}
        bordered
      />
    </div>
  );
};

export default UserDisplay;
