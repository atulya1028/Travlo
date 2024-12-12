import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from './About';
import Location from './Location';
import Booking from './pages/Booking';
import Footer from './pages/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="about" element={<About />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path='footer' element={<Footer />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App