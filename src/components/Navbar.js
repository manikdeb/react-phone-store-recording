import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
  render() {
    
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
        {
          /* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */
        }
        <Link to="/">
          <img src={logo} alt="logo brand" className="navbar-brand"></img>
        </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="" className="nav-link">
                products
              </Link>
            </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus"/>
              my cart
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: purple !important;
  .nav-link {
    color: red !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`






