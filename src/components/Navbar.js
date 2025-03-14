import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Nav>
      <Logo to="/">SecondHand</Logo>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/sell">Sell</StyledLink>
        <Link to="/buy">Buy</Link> {/* Add Buy Page Link */}
        {user ? (
          <>
            <StyledLink to="/profile">Profile</StyledLink>
            <LogoutButton onClick={logout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/register">Register</StyledLink>
          </>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

/* Styled Components */
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #333;
  color: white;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: yellow;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: yellow;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: yellow;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;
