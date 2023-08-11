import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../components/Api";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    location: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors"
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
        location: user.location,
      }),
    });
    const json = await response.json();
    if (!json.success) {
      alert("Enter valid data");
    } else {
      alert("Registration success. please login");
      navigate("/login");
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
            <h2 className="form-title">Sign Up</h2>

            <div className="mb-3">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={onChange}
                className="form-control"
                id="exampleInputName"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={onChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <input
                type="location"
                name="location"
                value={user.location}
                onChange={onChange}
                className="form-control"
                id="exampleInputLocation"
                placeholder="Location"
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
            <NavLink to="/login" className="m-3 btn btn-danger">
              Already Registered
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
      height: 60%;
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

export default Signup;
