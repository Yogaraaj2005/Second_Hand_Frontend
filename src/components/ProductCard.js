import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product }) => (
  <Card>
    <Image src={product.image} alt={product.title} />
    <Title>{product.title}</Title>
    <Price>${product.price}</Price>
    <StyledLink to={`/product/${product.id}`}>View Details</StyledLink>
  </Card>
);

export default ProductCard;

/* 🔹 Styled Components */
const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  background: yellow;
  color: black;
  margin-top: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: black;
    color: yellow;
  }
`;
