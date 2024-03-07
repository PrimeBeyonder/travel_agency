import React from 'react'
import styled from 'styled-components';
import { BsLinkedin, BsFacebook } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2024 Traveller. All rights reserved</span>
      <ul className='links'>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  )
}
export default Footer;

const FooterContainer = styled.footer`
display: flex;
justify-content: space-evenly;
background-color: #3c4a7429;
border-radius: 0.5rem;
padding: 2.5rem;

ul {
  display: flex;
  list-style-type: none;
  gap: 2rem;
  li {
    a {
      text-decoration: none;
      color: black;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #302ce9;
      }
    }
    svg {
      font-size: 1.3rem;
      transition: 0.3s ease-in-out;
      &:hover {
        color: #302ce9;
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1024px) {
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  ul {
    flex-direction: column;
    text-align: center;
  }
  .social__links {
    flex-direction: row;
    margin-left: 360px
  }
}
`