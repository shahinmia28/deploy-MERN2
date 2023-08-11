import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cart from "../screens/Cart";
import Modal from "../Model";
import { useCart } from "./ContextReducer";

const Header = () => {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const items = useCart();
  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            GoFood
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" to="/myorder">
                    My Order
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              {!localStorage.getItem("authToken") ? (
                <div>
                  <NavLink
                    className="btn bg-white text-success mx-1"
                    to="/login"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    className="btn bg-white text-success mx-1"
                    to="/signup"
                  >
                    SignUp
                  </NavLink>
                </div>
              ) : (
                <div>
                  <div
                    className="btn bg-white text-success mx-1"
                    onClick={() => setCartView(true)}
                  >
                    My Cart <span className="badge">{items.length}</span>
                  </div>
                  {cartView ? (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart></Cart>
                    </Modal>
                  ) : (
                    ""
                  )}

                  <div
                    className="btn bg-white text-danger mx-1"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .navbar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    .navbar-brand {
      font-size: 35px;
      font-style: italic;
    }
    .badge {
      background: #ff1717;
      color: #ffffff;
      border-radius: 50%;
    }
  }
`;
export default Header;
