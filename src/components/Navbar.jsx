import React from 'react'
import styled from 'styled-components';
import logo from "../img/logo.png"
import { useState } from 'react';

function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className='brand'>
          <div className='container'>
            <img src={logo} alt="" />
          </div>
          <div className='toggle'></div>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#recommend">Place</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <button>Connect</button>
      </Nav>

    </>
  )
}
export default Navbar;


const Nav = styled.nav`
display: flex;
margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .toggle{
        display: none;
    }
}
ul{
    display: flex;
    list-style-type: none;
   gap: 1.5rem;
   li {
    a {
      text-decoration: none;
      color: rgb(71, 73, 76);
      font-size: 1.3rem;
      transition: all 0.6s ease-out;
      font-weight: 500;
  
      &:hover {
        color: black;
        font-weight:500;
      }
    }
  
    &:first-of-type {
      a {
        color: black;
        font-weight: 600;
      }
    }
  }  
}
button {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: rgb(54, 55, 57);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.1rem;
    transition: all 0.3s ease-out;
  
    &:hover {
      background-color: black;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 700px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`
