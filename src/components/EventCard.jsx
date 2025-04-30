import React from "react";
import { MdOutlineNetworkCell } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";

const EventCard = () => {
  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden">
      {/* Event Image */}
      <img
        src="https://t3.ftcdn.net/jpg/04/83/81/78/360_F_483817817_dVwUCdYSLnITSsOpsLr42bnUz9Xit92N.jpg"
        alt="event"
        className="w-full h-36 object-cover md:h-48 lg:h-56"
      />

      <div className="p-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs sm:text-sm text-gray-500 bg-cyan-100/70 px-2 py-1 rounded-full mr-2">
            Football
          </span>
          <span className="text-xs sm:text-sm text-gray-500 bg-orange-200/50 px-2 py-1 rounded-full">
            Below 25y
          </span>
        </div>

        {/* Level Info */}
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <MdOutlineNetworkCell className="w-5 h-5 text-green-400/50" />
            <span className="text-sm sm:text-lg text-gray-500">Advance</span>
          </div>
        </div>

        {/* Event Title and Time */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl text-casal font-semibold">
            Legends Rise on the Field
          </h2>
          <p className="text-sm sm:text-base text-gray-500">Thu, Dec 5 : 12.30AM - 12.30PM</p>
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-red-500" />
            <span className="text-sm sm:text-base text-gray-500">Bashundhara Sports Complex</span>
          </div>
        </div>

        {/* Spots Left */}
        <p className="text-orange-700 pt-2 text-right text-sm sm:text-base">2 spots left</p>

        {/* Attendees and Price */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm text-gray-800">6/8 attending</p>
          <div className="flex items-center">
            <TbCoinTakaFilled className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800" />
            <span className="text-lg sm:text-2xl font-semibold text-gray-800">320</span>
            <span className="text-sm sm:text-base text-gray-500">/person</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
