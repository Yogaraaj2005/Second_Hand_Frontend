import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile";
import { useAuth } from "./context/authContext";
import Buy from "./pages/Buy"; // Import Buy Page

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Conditional Routes */}
        <Route path="/buy" element={<Buy />} />  {/* Add Buy Page Route */}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/sell" element={user ? <Sell /> : <Login />} />
        <Route path="/profile" element={user ? <Profile /> : <Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
