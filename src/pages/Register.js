import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // 🔹 Import framer-motion

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://second-hand-backend-xoxm.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Registration failed");

      login(data.user);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    }
  };

  return (
    <Container
      initial={{ opacity: 0, y: 20 }} // 🔹 Fade-in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Register</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form onSubmit={handleRegister}>
        <AnimatedInput type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <AnimatedInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <AnimatedInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <AnimatedButton type="submit">Register</AnimatedButton>
      </Form>
    </Container>
  );
};

export default Register;

/* 🔹 Styled Components */
const Container = styled(motion.div)`
  text-align: center;
  padding: 50px;
  background: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 300px;
`;

const AnimatedInput = styled(motion.input).attrs(() => ({
  whileFocus: { scale: 1.05 }, // 🔹 Zoom effect on focus
}))`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: 0.3s;
`;

const AnimatedButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.1 }, // 🔹 Slight grow on hover
  whileTap: { scale: 0.9 }, // 🔹 Shrink on click
}))`
  background: yellow;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: bold;

  &:hover {
    background: black;
    color: yellow;
  }
`;
