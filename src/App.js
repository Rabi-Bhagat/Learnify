import React from "react";
// NOTICE: BrowserRouter as Router is removed from this import
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import CoursesPage from "./pages/Course";
import Enroll from "./pages/Enroll";
import CourseDetails from "./pages/CourseDetails";
import LiveClass from "./pages/LiveClass";
import MessagesPage from "./pages/Messages_page";
import Reviews from "./pages/Reviews";
import PersonalDetails from "./pages/PersonalDetails";
import Signup from "./pages/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Resources from "./components/Resources";
import Legal from "./components/Legal";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Selectthisplan from "./components/Selectthisplan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/enroll/:id" element={<Enroll />} />
      <Route path="/courses/details/:id" element={<CourseDetails />} />
      <Route path="/live-class" element={<LiveClass />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/personalDetails" element={<PersonalDetails />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Resources" element={<Resources />} />
      <Route path="/Legal" element={<Legal />} />
      <Route path="/plan/:id" element={<Selectthisplan />} />
    </Routes>
  );
}

export default App;
