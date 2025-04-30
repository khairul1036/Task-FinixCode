import React, { useState } from "react";
import { MdOutlineNetworkCell } from "react-icons/md";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { GiSoccerField } from "react-icons/gi";

const InfoTabContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  const fullText = `Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.`.repeat(5);

  const shortText = fullText.slice(0, 230) + "...";

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      {/* Category */}
      <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-10 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base sm:text-xl text-gray-500 bg-cyan-100/70 px-4 py-2 rounded-full">Football</span>
          <span className="text-base sm:text-xl text-gray-500 bg-cyan-100/70 px-4 py-2 rounded-full">Relay</span>
          <span className="text-base sm:text-xl text-gray-500 bg-orange-200/50 px-4 py-2 rounded-full">Female</span>
          <span className="text-base sm:text-xl text-gray-500 bg-fuchsia-300/30 px-4 py-2 rounded-full">Age: Below 25</span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineNetworkCell className="w-6 h-6 text-green-400/50" />
          <span className="text-base sm:text-xl text-gray-500">Beginner</span>
        </div>
      </div>

      {/* About event */}
      <div className="py-10 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">About this event</h2>
        <p className="text-gray-700 mb-3">{isExpanded ? fullText : shortText}</p>
        <button
          onClick={toggleReadMore}
          className="text-blue-500 underline focus:outline-none text-base sm:text-lg"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Location */}
      <div className="py-10 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">Location</h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl text-gray-600">NDE Field</h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
            </p>
          </div>
          <button className="border border-gray-500 rounded-full px-4 py-2 text-gray-600 whitespace-nowrap">
            Open maps
          </button>
        </div>
      </div>

      {/* Good to know */}
      <div className="py-10 border-b border-gray-200">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">Good to know</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="p-6 rounded-3xl bg-[#DA6049] text-gray-200 space-y-3">
            <h4 className="text-xl sm:text-2xl font-semibold">Highlights</h4>
            <p className="flex items-center gap-2">
              <CiCalendar className="w-5 h-5" />
              Mon, 2 Dec
            </p>
            <p className="flex items-center gap-2">
              <CiClock2 className="w-5 h-5" />
              7.30 AM - 8.30 AM
            </p>
            <p className="flex items-center gap-2">
              <CiClock2 className="w-5 h-5" />
              Arrive 15 min before start
            </p>
            <p className="flex items-center gap-2">
              <GiSoccerField className="w-5 h-5" />
              Venue booked
            </p>
          </div>

          <div className="lg:col-span-2 p-6 rounded-3xl bg-casal text-gray-200 space-y-2">
            <h4 className="text-xl sm:text-2xl font-semibold mb-2">
              Refund & cancellation policy
            </h4>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
              <li>Full refund if host cancels the game</li>
              <li>Full refund if you cancel 24+ hours in advance</li>
              <li>Full refund if game is cancelled due to low attendance</li>
            </ul>
            <p className="text-right text-sm underline cursor-pointer">Learn more</p>
          </div>
        </div>
      </div>

      {/* Hosted by */}
      <div className="py-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">Hosted by</h2>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-6 rounded-3xl bg-[#4E566B] text-gray-200 gap-6">
          <div className="flex items-center gap-5">
            <img
              src="https://wallpapers.com/images/hd/pretty-profile-pictures-526voksmtgllopn4.jpg"
              alt="photo"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full"
            />
            <div>
              <h4 className="text-xl sm:text-2xl font-semibold">Alex Mercer</h4>
              <p>
                <span className="font-semibold mr-2">23</span>activities hosted
              </p>
              <p>
                <span className="font-semibold mr-2">4.5</span>host rating
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
            <button className="bg-amber-100 text-black rounded-full px-6 py-2 text-center w-full sm:w-auto">
              Message
            </button>
            <button className="border border-amber-100 text-amber-100 rounded-full px-6 py-2 text-center w-full sm:w-auto">
              View profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabContent;
