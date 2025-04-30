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
    nuts and bolts of tomorrow’s high-rise buildings.Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.Learn about the capital’s first beavers in 400 years from the Ealing
    Beaver project, make your own mushroom growing starter kit with urban
    agriculture experts, before joining Roma the Engineer to get into the
    nuts and bolts of tomorrow’s high-rise buildings.`;

  const shortText = fullText.slice(0, 230) + "...";

  return (
    <div className="py-10">
      {/* category  */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-10">
        <div className="flex items-center gap-5">
          <span className="text-xl text-gray-500 bg-cyan-100/70 px-4 py-2 rounded-full">
            Football
          </span>
          <span className="text-xl text-gray-500 bg-cyan-100/70 px-4 py-2 rounded-full">
            Relay
          </span>
          <span className="text-xl text-gray-500 bg-orange-200/50 px-4 py-2 rounded-full">
            Female
          </span>
          <span className="text-xl text-gray-500 bg-fuchsia-300/30 px-4 py-2 rounded-full">
            Age: Below 25
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineNetworkCell className="w-8 h-8 text-green-400/50" />
          <span className="text-xl text-gray-500">Beginner</span>
        </div>
      </div>

      {/* about event  */}
      <div className="py-10 border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-10">About this event</h2>
        <p className="text-gray-700 mb-2">
          {isExpanded ? fullText : shortText}
        </p>
        <button
          onClick={toggleReadMore}
          className="text-blue-500 cursor-pointer underline focus:outline-none text-lg"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* location */}
      <div className="py-10 border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-10">Location</h2>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl text-gray-600">NDE Field</h2>
            <p className="text-gray-500 text-lg">
              Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois
            </p>
          </div>
          <button className="border border-gray-500 rounded-full px-4 py-3 text-gray-600">
            Open maps
          </button>
        </div>
      </div>

      {/* Good to know */}
      <div className="w-11/12 py-10 border-b border-gray-200">
        <h2 className="text-4xl font-semibold mb-10">Good to know</h2>
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1 p-6 rounded-3xl bg-[#DA6049] text-gray-200 space-y-2">
            <h4 className="text-2xl font-semibold mb-4">Highlights</h4>
            <p className="flex items-center gap-2">
              <span>
                <CiCalendar className="w-5 h-5" />
              </span>
              <span>Mon, 2 Dec</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <CiClock2 className="w-5 h-5" />
              </span>
              <span>7.30 AM - 8.30 AM</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <CiClock2 className="w-5 h-5" />
              </span>
              <span>Arrive 15 min before start</span>
            </p>
            <p className="flex items-center gap-2">
              <span>
                <GiSoccerField className="w-5 h-5" />
              </span>
              <span>Venue booked</span>
            </p>
          </div>
          <div className="col-span-2">
            <div className="col-span-1 p-6 rounded-3xl bg-casal text-gray-200 space-y-2">
              <h4 className="text-2xl font-semibold mb-4">
                Refund & cancellation policy
              </h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Full refund if host cancels the game</li>
                <li>Full refund if you cancel 24+ hours in advance</li>
                <li>Full refund if game is cancelled due to low attendance</li>
              </ul>
              <p className="text-right">Learn more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hosted by */}
      <div className="w-8/12 py-10">
        <h2 className="text-4xl font-semibold mb-10">Hosted by</h2>
        <div className="flex justify-between items-center p-6 rounded-3xl bg-[#4E566B] text-gray-200">
          <div className="flex items-center gap-5">
            <img
              src="https://wallpapers.com/images/hd/pretty-profile-pictures-526voksmtgllopn4.jpg"
              alt="photo"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h4 className="text-2xl font-semibold">Alex Mercer</h4>
              <p>
                <span className="font-semibold mr-2">23</span>activities hosted
              </p>
              <p>
                <span className="font-semibold mr-2">4.5</span>host rating
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-5">
            <button className="bg-amber-100 text-black rounded-full px-9 py-3">Message</button>
            <button className="border border-amber-100 text-amber-100 rounded-full px-9 py-3">View profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTabContent;
