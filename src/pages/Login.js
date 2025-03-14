import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 🔹 Import framer-motion

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      login(data.user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container
      initial={{ opacity: 0, y: 20 }} // 🔹 Fade-in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <AnimatedInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <AnimatedInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <AnimatedButton type="submit">Login</AnimatedButton>
      </Form>
    </Container>
  );
};

export default Login;

/* 🔹 Styled Components */
const Container = styled(motion.div)`
  text-align: center;
  padding: 50px;
  background: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 300px;
`;

const AnimatedInput = styled(motion.input).attrs(() => ({
  whileFocus: { scale: 1.05 }, // 🔹 Zoom effect on focus
}))`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const AnimatedButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.1 }, // 🔹 Slight grow on hover
  whileTap: { scale: 0.9 }, // 🔹 Shrink on click
}))`
  background: yellow;
  color: black;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: black;
    color: yellow;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;
