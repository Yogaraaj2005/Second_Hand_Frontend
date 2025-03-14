import React from "react";
import { useAuth } from "../context/authContext";
import styled from "styled-components";
import { motion } from "framer-motion"; // 🔹 Import framer-motion

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <Container
      initial={{ opacity: 0, y: 20 }} // 🔹 Fade-in from bottom
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Profile</Title>
      {user ? (
        <ProfileInfo
          initial={{ opacity: 0, x: -50 }} // 🔹 Slide from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserEmail>Email: {user.email}</UserEmail>
          <AnimatedButton onClick={logout}>Logout</AnimatedButton>
        </ProfileInfo>
      ) : (
        <Message>Please login to view your profile.</Message>
      )}
    </Container>
  );
};

export default Profile;

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
  margin-bottom: 20px;
`;

const ProfileInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const UserEmail = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

const AnimatedButton = styled(motion.button).attrs(() => ({
  whileHover: { scale: 1.1 }, // 🔹 Slight grow on hover
  whileTap: { scale: 0.9 }, // 🔹 Shrink on click
}))`
  background: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background: darkred;
  }
`;

const Message = styled.p`
  font-size: 1.1rem;
  color: #666;
`;
