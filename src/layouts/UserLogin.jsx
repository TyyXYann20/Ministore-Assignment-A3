import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import "./style.css";

const UserLogin = () => {
  const nav = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/login", userLogin)
      .then((res) => {
        const data = res.data;

        if (data && data.user) {
          const role = data.user.role;

          message.success("Login success");
          localStorage.setItem(role === "admin" ? "is_admin" : "is_client", "1");
          localStorage.setItem("profile", JSON.stringify(data.user));

          setTimeout(() => {
            window.location.reload();
          }, 500);

          nav("/");
        } else {
          message.warning(data.message || "Invalid login");
        }
      })
      .catch((err) => {
        console.error(err);
        message.error("Login failed");
      });
  };

  return (
    <div className="login_container">
      <div className="login_form_container">
        <div className="left">
          <form className="form_container" onSubmit={handleLogin}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              required
              className="input"
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="input"
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
        <div className="right">
          <h1>New Here?</h1>
          <Link to="/regi">
            <button className="white_btn">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
