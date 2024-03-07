import React, { useState } from "react";
import styled from "styled-components";
import logo from "../img/25637.png";
export default function ScrollToTop() {
    const [scrollState, setScrollState] = useState(false);
    const toTop = () => {
        window.scrollTo({ top: 0 });
    };
    window.addEventListener("scroll", () => {
        window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
    });
    return (
        <ToTop onClick={toTop} scrollState={scrollState}>
            <img src={logo} alt="" />
        </ToTop>
    );
}

const ToTop = styled.div`
  display: ${({ scrollState }) => (scrollState ? "block" : "none")};
  position: fixed;
  cursor: pointer;
  z-index: 10;
  bottom: 20px;
  right: 2rem;
  img {
    height: 20px;
  width: 20px;
  }
  border-radius: 60px;
  background-color: #3c4a7429;
  padding: 1rem;
`;