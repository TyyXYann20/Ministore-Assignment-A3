import {
  MenuUnfoldOutlined,
  UploadOutlined,
  LoginOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  PrinterOutlined,
  ShopOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Divider, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LayoutOne.css";

const { Header, Sider, Content } = Layout;
const LayoutOne = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("is_admin") == "1";

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleChangeMenu = (item) => {
    navigate(item.key);
  };

  const handleLogout = () => {
    localStorage.setItem("is_admin", false);
    window.location.href = "/";
  };

  const menu = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Dashboard",
    },
    {
      key: "/users",
      icon: <UsergroupAddOutlined />,
      label: "User",
    },
    {
      key: "/uploadMenu",
      icon: <UploadOutlined />,
      label: "UploadMenu",
    },
    {
      key: "/product",
      icon: <ShopOutlined />,
      label: "Product",
    },
  
    {
      key: "/cartboot",
      icon: <WalletOutlined />,
      label: "Order Details",
    },
    {
      key: "/report",
      icon: <UploadOutlined />,
      label: "Cart",
    },
    {
      key: "/order",
      icon: <UnorderedListOutlined />,
      label: "Report",
    },

    {
      key: "/prints",
      icon: <PrinterOutlined />,
      label: "Recipes",
    },
  ];

  const menuUser = [
    { key: "1", label: <a>Profile</a> },

    {
      key: "2",
      label: <a>Change password</a>,
    },
    {
      key: "3",
      label: <a>Logout</a>,
      icon: <LoginOutlined />,
      onClick: handleLogout,
    },
  ];

  // const profile = JSON.parse(localStorage.getItem("profile"))
console.log(isLogin)
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ color: "white" }}
      >
        {/* <div className="logoLayoutOne1">
          <div className={`${collapsed ? "profileContainAnimate1" : "profileContain1"}`}>
            ECM
          </div>
        </div> */}
        <div>
          <h1
            style={{
              textAlign: "center",
              color: "white",
              padding: 10,
              fontSize: "20px",
            }}
          >
            Admin
          </h1>
          <hr style={{ color: "#FFF" }} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menu}
          onClick={handleChangeMenu}
        />
      </Sider>

      <Layout>
        <div
          className="headerLayoutOne"
          style={{ backgroundColor: "whitesmoke", overflow: "hidden" }}
        >
          <MenuUnfoldOutlined
            style={{ fontSize: 26, paddingLeft: 20 }}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div>
            <Dropdown
              style={{ width: "150px" }}
              menu={{
                items: menuUser,
              }}
              placement="bottomLeft"
            >
              <Avatar
                size={50}
                src=""
              />
            </Dropdown>
          </div>
        </div>
        <div className="mainBody">{props.children}</div>
      </Layout>
    </Layout>
  );
};
export default LayoutOne;
