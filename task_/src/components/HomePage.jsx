import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const images = [
  "https://cwservices.co.in/assets/home/hero_1.jpg",
  "https://cwservices.co.in/assets/home/hero_2.jpg",
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen font-sans relative overflow-hidden">
     
      <header className="mt-4 w-full fixed top-0 left-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between bg-transparent">
        <div className="flex items-center ">
          <img
            src="https://cwservices.co.in/assets/cws_logo.png"
            alt="logo"
            className="w-24 h-auto"
          />
        </div>

       
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-black font-semibold text-lg">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Mobile App Development
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Website Development
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Logo Design
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Portfolio
          </a>
        </nav>

       
        <style>
          {`
            .animated-border {
              position: relative;
              padding: 5px;
              border-radius: 9999px;
              background: linear-gradient(270deg, rgb(41, 254, 254),rgb(212, 243, 40),rgb(250, 10, 250));
              background-size: 600% 600%;
              animation: borderShift 2s ease infinite;
              display: inline-block;
            }

            @keyframes borderShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }

            .animated-border a {
              display: inline-block;
              padding: 5px 10px;
              border-radius: 9999px;
              background-color: white;
              color: #3DADF2;
              font-weight: 800;
              font-size: .85rem;
              text-decoration: none;
              transition: all 0.2s ease;
              position: relative;
              z-index: 1;
            }

            .animated-border a:hover {
              color: white;
              background: linear-gradient(270deg, rgb(41, 254, 254), rgb(250, 10, 250));
              background-size: 600% 600%;
              animation: borderShift 2s linear infinite;
              text-shadow: 0 0 10px rgba(255,255,255,0.8);
              transform: scale(1);
            }
          `}
        </style>

        <div className="hidden md:block mr-6">
          <div className="animated-border">
            <a href="tel:+917080855524">Call Now +91-7080855524</a>
          </div>
        </div>

       
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

      
        {menuOpen && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-80 bg-black text-white flex flex-col items-center space-y-4 px-6 py-6 rounded-xl shadow-lg z-40">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Mobile App Development
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Website Development
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Logo Design
            </a>
            <a href="#" className="hover:text-cyan-400 transition">
              Portfolio
            </a>

           
            <div className="animated-border">
              <a href="tel:+917080855524">Call Now +91-7080855524</a>
            </div>
          </div>
        )}
      </header>

      
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="object-cover w-full h-full transition-all duration-700"
          />
          {current === 1 && <div className="absolute inset-0 bg-white/55" />}
        </div>

        <div className="absolute inset-0 bg-white/10 px-6 md:px-28 flex flex-col justify-center items-start text-white z-10">
          <h1 className="text-3xl text-black md:text-5xl font-bold mb-6 drop-shadow">
            Trust in Your Imagination
          </h1>
          <p className="text-lg text-black md:text-2xl mb-6 max-w-4xl font-medium">
            We Design & Develop Android and iOS Mobile Application for Your
            Business
          </p>
          <a
            href="tel:+917080855524"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-8 rounded-xl shadow-md font-medium hover:opacity-90 transition"
          >
            Call Now
          </a>
        </div>

       
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-20"
        >
          <FaArrowLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md z-20"
        >
          <FaArrowRight size={18} />
        </button>

       
        <div className="fixed bottom-4 left-4 z-50">
          <a
            href="tel:+917080855524"
            className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
          >
            <FaPhoneAlt size={24} />
          </a>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="https://wa.me/917080855524"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
