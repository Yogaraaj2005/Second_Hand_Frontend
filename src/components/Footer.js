import React from "react";
import styled from "styled-components";

const Footer = () => (
  <FooterContainer>© 2025 SecondHand Marketplace</FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  padding: 10px;
  background: #222;
  color: white;
  margin-top: 20px;
  font-size: 14px;
`;
