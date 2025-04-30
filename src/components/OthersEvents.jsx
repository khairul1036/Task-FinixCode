import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import EventCard from "./EventCard";

const OthersEvents = () => {
  return (
    <div className="bg-white px-10 py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-semibold mb-10">
          Other events you may like
        </h2>
        <div className="flex justify-between gap-5">
          <button>
            <FaAngleLeft className="w-10 h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
          </button>
          <button>
            <FaAngleRight className="w-10 h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
          </button>
        </div>
      </div>
      {/* event cards */}
      <div className="grid grid-cols-3 gap-5">
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default OthersEvents;
