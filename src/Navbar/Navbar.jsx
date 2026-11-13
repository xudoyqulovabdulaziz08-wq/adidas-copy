import React, { useEffect, useState, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Link } from 'react-router-dom';

const texter = [
  "FREE STANDARD SHIPPING WITH ADICLUB",
  "FREE HOLIDAY EXTENDED RETURNS"
];

const Navbar = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texter.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full font-sans">
   
      <div className="bg-black relative" ref={menuRef}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-white cursor-pointer text-[11px] tracking-widest font-bold py-2.5 flex items-center justify-center gap-1 select-none"
        >
          <span>{texter[index]}</span>
          <ExpandMoreIcon
            fontSize="small"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>

      
        {isOpen && (
          <div className="bg-white border-b border-gray-300 top-0 left-0 absolute w-full text-black z-50 px-6 md:px-14 pt-6 pb-12 shadow-md">
            <div className="flex justify-end mb-9">
              <button
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 border border-black flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
                aria-label="Close"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
              <div>
                <h2 className="font-bold text-base tracking-wide uppercase mb-3">
                  FREE STANDARD SHIPPING WITH ADICLUB
                </h2>
                <p className="text-lg text-gray-800 mb-5">
                  Sign up for adiClub to enjoy free standard shipping and earn points on every order.
                </p>
                <a
                  href="https://www.adidas.com/us/account-login"
                  className="inline-block text-sm font-bold uppercase tracking-wider text-black underline underline-offset-4 mt-2 hover:bg-black hover:text-white transition px-0.5"
                >
                  JOIN ADICLUB FOR FREE
                </a>
              </div>

              <div>
                <h2 className="font-bold text-base tracking-wide uppercase mb-3">
                  FREE HOLIDAY EXTENDED RETURNS
                </h2>
                <p className="text-lg text-gray-800 mb-5">
                  Take your time this holiday season and enjoy free and easy extended returns.
                </p>
                <a
                  href="https://www.adidas.com/us/help/returns"
                  className="inline-block text-sm font-bold uppercase tracking-wider text-black underline underline-offset-4 mt-2 hover:bg-black hover:text-white transition px-0.5"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

    
      <div className="bg-white border-b border-gray-200 px-6 md:px-12">
    
        <div className="hidden lg:flex justify-end items-center gap-5 text-[11px] text-gray-700 pt-2 ">
          <a href="https://www.adidas.com/us/stores" className="hover:underline">store finder</a>
          <a href="https://www.adidas.com/us/help" className="hover:underline">help</a>
          <a href="https://www.adidas.com/us/order-tracker" className="hover:underline">orders and returns</a>
          <a href="https://www.adidas.com/us/giftcards" className="hover:underline">gift cards</a>
          <a href="#" className="hover:underline">join adiClub</a>
        </div>

       
        <div className="flex items-center justify-between ">
   
          <a href="#" className="shrink-0">
            <svg viewBox="0 0 100 60" className="w-28 h-[62px] fill-black">
              <polygon points="35,45 48,45 32,17 20,24" />
              <polygon points="56,45 69,45 46,5 34,12" />
              <polygon points="14,45 27,45 18,29 6,36" />
            </svg>
          </a>

        
          <nav className="hidden xl:flex items-center gap-7 text-sm tracking-wider text-black">
            <a href="#" className="font-bold hover:underline underline-offset-8 decoration-2">MEN</a>
            <a href="#" className="font-bold hover:underline underline-offset-8 decoration-2">WOMEN</a>
            <a href="#" className="font-bold hover:underline underline-offset-8 decoration-2">KIDS</a>
            <a href="#" className="font-normal hover:underline underline-offset-8 decoration-2">SALE</a>
            <a href="#" className="font-normal hover:underline underline-offset-8 decoration-2 flex items-center gap-1">
              GIFTS <span>🎁</span>
            </a>
            <a href="#" className="font-normal hover:underline underline-offset-8 decoration-2">SPORTS</a>
            <a href="#" className="font-normal hover:underline underline-offset-8 decoration-2">NEW & TRENDING</a>
          </nav>

          
          <div className="flex items-center gap-4">
       
            <div className="hidden sm:flex items-center bg-[#eceff1] px-3 py-1.5 w-48 md:w-56 border border-transparent focus-within:border-black">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-black placeholder-gray-600 focus:outline-none w-full  "
              />
              <SearchIcon className="text-black cursor-pointer" fontSize="small" />
            </div>

            
            <button className="relative p-1 cursor-pointer" aria-label="Account">
              <Person2OutlinedIcon />
              <span className="absolute -top-1 -right-1 bg-[#197a56] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </button>

           
            <button className="p-1 cursor-pointer" aria-label="Wishlist">
              <a href="https://www.adidas.com/us/wishlists"><FavoriteBorderOutlinedIcon /></a>
              
            </button>

           
            <button className="p-1 cursor-pointer" aria-label="Cart">
              <a href="https://www.adidas.com/us/cart">
                <ShoppingBagOutlinedIcon />
              </a>
              
            </button>
          </div>
        </div>
      </div>

     
      <div className="bg-[#eceff1] py-2.5 px-6 md:px-14 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition">
        <div className="w-6 hidden sm:block"></div>
        <p className="text-xs font-bold text-black text-center">
          Up to 60% off for members during Black Friday First Access. Log in now
        </p>
        <a href="https://www.adidas.com/us?sp=true&section=MEMBERSHIP_PANEL">
          <ArrowRightAltIcon fontSize="small" className="text-black" />
        </a>
        
      </div>
    </header>
  );
};

export default Navbar;