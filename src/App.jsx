import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">

      <Navbar />

      <Hero />

      <Services />

      <Testimonials />

      <Booking />

      <Footer />

    </div>
  );
}

export default App;