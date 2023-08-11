import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid data");
    } else {
      localStorage.setItem("userEmail", json.userEmail);
      localStorage.setItem("authToken", json.userAuth);

      alert("Login success");
      navigate("/");
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h2 className="form-title">Login</h2>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={onChange}
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className=" btn btn-success">
              Submit
            </button>
            <NavLink to="/signup" className="m-3 btn btn-danger">
              Create Account
            </NavLink>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  .container {
    .form-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      background: #848484;
      transform: translate(-50%, -50%);
      height: 40%;
      width: 50%;
      border-radius: 10px;
      form {
        padding: 20px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .form-title {
          color: #fff;
          text-align: center;
          padding: 15px;
        }
      }
    }
  }
`;

export default Login;
