import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product details (replace with actual API call)
    setTimeout(() => {
      setProduct({
        id,
        title: "Sample Product",
        price: 100,
        image: "https://via.placeholder.com/300",
        description: "This is a sample product description.",
      });
    }, 500);
  }, [id]);

  if (!product) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} />
      <Details>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
        <Button>Add to Cart</Button>
      </Details>
    </Container>
  );
};

export default ProductDetails;

/* 🔹 Styled Components */
const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: 50px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  max-width: 400px;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin: 10px 0;
  color: #555;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: red;
`;

const Button = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: black;
    color: yellow;
  }
`;

const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;
