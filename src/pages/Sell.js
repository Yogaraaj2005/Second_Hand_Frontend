import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Sell = () => {
  const [products] = useState([
    { id: 1, title: "iPhone 12", image: "/images/iphone12.jpg" },
    { id: 2, title: "Gaming Laptop", image: "/images/laptop.jpg" },
    { id: 3, title: "Wireless Headphones", image: "/images/headphones.jpg" },
    { id: 4, title: "Smartwatch", image: "/images/smartwatch.jpg" },
    { id: 5, title: "Mountain Bike", image: "/images/bike.jpg" },
  ]);

  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductName>{product.title}</ProductName>
          </ProductCard>
        ))}
      </ProductGrid>

      <SellButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Sell Product
      </SellButton>
    </Container>
  );
};

export default Sell;

/* 🔹 Styled Components */
const Container = styled(motion.div)`
  text-align: center;
  padding: 50px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 10px 0;
`;

const SellButton = styled(motion.button)`
  background: yellow;
  color: black;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: bold;
  margin-top: 30px;
`;
