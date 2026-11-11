import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full min-h-[593px] bg-black px-[5%] pt-[75px] pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-base font-bold">PRODUCTS</h3>
            <p>Shoes</p>
            <p>Clothing</p>
            <p>Accessories</p>
            <p>Gift Cards</p>
            <p>New Arrivals</p>
            <p>Best Sellers</p>
            <p>Release Dates</p>
            <p>SALE</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-base font-bold">SPORTS</h3>
            <p>Soccer</p>
            <p className="underline">Running</p>
            <p>Basketball</p>
            <p>Football</p>
            <p>Outdoor</p>
            <p>Golf</p>
            <p>Baseball</p>
            <p>Tennis</p>
            <p>Skateboarding</p>
            <p>Workout</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-base font-bold">Collections</h3>
            <p>adicolor</p>
            <p>Ultraboost</p>
            <p>Forum</p>
            <p>Superstar</p>
            <p>Running Shoes</p>
            <p>adilette</p>
            <p>Stan Smith</p>
            <p>adizero</p>
            <p>Tiro</p>
            <p>Cloudfoam Pure</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-base font-bold">SUPPORT</h3>
            <p>Help</p>
            <p>Returns & Exchanges</p>
            <p>Shipping</p>
            <p>Order Tracker</p>
            <p>Store Locator</p>
            <p>Size Charts</p>
            <p>Gift Card Balance</p>
            <p>How to Clean Shoes</p>
            <p>Bra Fit Guide</p>
            <p>Breathing for Running</p>
            <p>Promotions</p>
            <p>Sitemap</p>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h3 className="text-base font-bold">COMPANY INFO</h3>
            <p>About Us</p>
            <p>Student Discount</p>
            <p>Military & Healthcare Discount</p>
            <p>adidas Stories</p>
            <p>adidas App</p>
            <p>Impact</p>
            <p>People</p>
            <p>Planet</p>
            <p>adiClub</p>
            <p>Affiliates</p>
            <p>Press</p>
            <p>Careers</p>
            <p>California Transparency in Supply Chains Act</p>
            <p>Responsible Disclosure</p>
          </div>
          <div className="flex flex-col gap-7 text-white">
            <h3 className="text-base font-bold">FOLLOW US</h3>
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaXTwitter className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaPinterestP className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaTiktok className="text-2xl cursor-pointer hover:text-gray-400" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </footer>
      <div className="w-full bg-black border-y border-[#333] text-white py-8 text-center">
        <div className="flex items-center justify-center flex-wrap gap-1 text-sm">
          <span>Your Privacy Choices</span>
          <span className="bg-blue-600 rounded-full px-2 py-[2px] font-bold mx-1">
            ✓ ×
          </span>
          <a href="#" className="border-l border-gray-500 pl-2 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="border-l border-gray-500 pl-2 hover:underline">
            Terms and Conditions
          </a>
        </div>
        <p className="mt-8 text-sm">
          © 2026 adidas America, Inc.
        </p>
      </div>
    </>
  );
};

export default Footer;