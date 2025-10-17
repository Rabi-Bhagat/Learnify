import React from "react";
// NOTICE: BrowserRouter as Router is removed from this import
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Course";
import LiveClass from "./pages/LiveClass";
import Messages from "./components/Messages_page";
import Reviews from "./pages/Reviews";
import PersonalDetails from "./pages/PersonalDetails";
import Signup from "./pages/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Legal from "./components/Legal";
import Footer from "./components/Footer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/live-class" element={<LiveClass />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/personalDetails" element={<PersonalDetails />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/Legal" element={<Legal />} />
    </Routes>
  );
}

export default App;
