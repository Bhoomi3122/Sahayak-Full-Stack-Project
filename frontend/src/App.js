import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Create from "./components/Create";
import Posts from "./components/Posts"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Routes Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts" element={<Posts/>} />
        </Routes>

        {/* Toast Notifications */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
