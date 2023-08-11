import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="copyRight">
          <p> &copy; All Right Reserved By GoFood</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  background: #4b4b4b;
  color: #b9b9b9;
  text-align: center;
  p {
    padding: 0;
    margin: 0;
  }
`;
export default Footer;
