import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EventCard from "./EventCard";

const OthersEvents = () => {
  return (
    <div className="bg-white px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Other events you may like
        </h2>
        <div className="flex gap-3">
          <button>
            <FaAngleLeft className="w-9 h-9 border border-gray-300 text-gray-600 bg-gray-100 p-1.5 rounded-full" />
          </button>
          <button>
            <FaAngleRight className="w-9 h-9 border border-gray-300 text-gray-600 bg-gray-100 p-1.5 rounded-full" />
          </button>
        </div>
      </div>

      {/* Responsive Grid for Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default OthersEvents;
