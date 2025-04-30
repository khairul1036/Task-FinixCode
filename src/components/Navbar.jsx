"use client";
import { CiSearch, CiCalendar } from "react-icons/ci";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBars, FaCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <div>
          <img src="/image/logo.png" alt="logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Middle Section */}
        <div className="hidden md:flex items-center gap-4">
          {/* Date Picker */}
          <div className="relative shadow-md rounded-full w-44">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select date"
              className="w-full pl-4 pr-10 py-2 rounded-full focus:outline-none"
              dateFormat="MMMM d, yyyy"
            />
            <CiCalendar className="absolute top-1 right-3 w-8 h-8 text-white bg-casal p-1 rounded-full" />
          </div>

          {/* Search Input */}
          <div className="flex items-center shadow-md rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 focus:outline-none"
            />
            <CiSearch className="w-8 h-8 text-gray-600 bg-gray-100 p-1 rounded-full mr-2" />
          </div>
        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full">
            <img src="/image/logo.png" alt="logo" className="h-6 w-auto" />
            <span className="text-casal">Leaderboard</span>
          </div>
          <div className="border border-[#34735F] px-4 py-2 rounded-full">
            <h4 className="text-casal">Login / Sign up</h4>
          </div>
          <div className="flex justify-between items-center gap-2 border border-gray-200 text-gray-700 px-4 py-1 rounded-full">
            <FaBars className="w-auto h-6" />
            <FaCircleUser className="w-auto h-8" />
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <RxCross2 size={28} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-start gap-4 px-6 pb-4 md:hidden">
          <div className="w-full">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select date"
              className="w-full pl-4 pr-10 py-2 rounded-full border focus:outline-none"
              dateFormat="MMMM d, yyyy"
            />
          </div>

          <div className="w-full">
            <div className="flex items-center w-full shadow-md rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 focus:outline-none"
              />
              <CiSearch className="w-8 h-8 text-gray-600 bg-gray-100 p-1 rounded-full mr-2" />
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full w-full justify-center">
            <img src="/image/logo.png" alt="logo" className="h-6 w-auto" />
            <span className="text-casal">Leaderboard</span>
          </div>

          <div className="border border-[#34735F] px-4 py-2 rounded-full w-full text-center">
            <h4 className="text-casal">Login / Sign up</h4>
          </div>

          <div className="flex items-center gap-2 border border-gray-200 text-gray-700 px-4 py-2 rounded-full w-full justify-center">
            <FaBars className="h-6" />
            <FaCircleUser className="h-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
