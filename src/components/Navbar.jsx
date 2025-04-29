"use client";
import { CiSearch, CiCalendar } from "react-icons/ci";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaBars, FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white">
      {/* Logo */}
      <div>
        <img src="/image/logo.png" alt="logo" className="h-10 w-auto" />
      </div>

      {/* Date + Search */}
      <div className="flex items-center gap-4">
        {/* Date Picker with Calendar Icon */}
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

        {/* Search Input with Icon */}
        <div className="flex items-center shadow-md rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 focus:outline-none"
          />
          <CiSearch className="w-8 h-8 text-gray-600 bg-gray-100 p-1 rounded-full mr-2" />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex items-center gap-5">
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
    </div>
  );
};

export default Navbar;
