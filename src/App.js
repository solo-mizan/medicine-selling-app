import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import OrderPage from "./components/OrderPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
