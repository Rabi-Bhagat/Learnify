import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MessagesPage from "./components/Messages_page";
import ReviewsPage from "./pages/Reviews";
import CoursesPage from "./pages/Course";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CoursesPage />
  </BrowserRouter>
);
