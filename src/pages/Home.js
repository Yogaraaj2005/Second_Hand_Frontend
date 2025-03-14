import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Welcome to the Marketplace</Title>
      <Subtitle>Buy and sell second-hand products with ease</Subtitle>
    </Container>
  );
};

export default Home;

/* 🔹 Styled Components */
const Container = styled(motion.div)`
  text-align: center;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;
`;
