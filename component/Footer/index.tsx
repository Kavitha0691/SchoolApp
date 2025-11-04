'use client';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-800  py-6 mt-4  border-t-gray-300 border-t">

      <p className="flex flex-col md:flex-row justify-center font-semibold  text-2xl text-gray-800">
        &copy; {new Date().getFullYear()} My Media
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="https://www.youtube.com/" aria-label="YouTube">
          <FaYoutube className="w-5 h-5" />
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-6 w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
        aria-label="Back to top"
      >
        &uarr;
      </button>
    </footer>
  );
}

export default Footer