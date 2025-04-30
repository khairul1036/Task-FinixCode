import React from "react";
import { MdOutlineNetworkCell } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTakaFilled } from "react-icons/tb";

const EventCard = () => {
  return (
    <div className="border border-gray-300 rounded-4xl">
      <img
        src="https://t3.ftcdn.net/jpg/04/83/81/78/360_F_483817817_dVwUCdYSLnITSsOpsLr42bnUz9Xit92N.jpg"
        alt="image"
        className="w-full h-36 object-cover rounded-ss-4xl rounded-se-4xl"
      />
      <div className="flex justify-between items-center p-2">
        <div>
          <span className="text-sm text-gray-500 bg-cyan-100/70 px-2 py-1 rounded-full mr-2">
            Football
          </span>
          <span className="text-sm text-gray-500 bg-orange-200/50 px-2 py-1 rounded-full">
            Below 25y
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineNetworkCell className="w-5 h-5 text-green-400/50" />
          <span className="text-lg text-gray-500">Advance</span>
        </div>
      </div>
      <div className="p-2 space-y-2">
        <h2 className="text-2xl text-casal font-semibold">
          Legends Rise on the Field
        </h2>
        <p className="text-gray-500">Thu, Dec 5 : 12.30AM - 12.30PM </p>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-red-500" />
          <span className="text-gray-500">Bashundhara Sports Complex</span>
        </div>
      </div>
      <p className="text-orange-700 pt-5 p-2 text-right">2 spots left</p>
      <div className="flex justify-between items-center p-2">
        <p className="text-sm text-gray-800">6/8 attending</p>
        <div className="flex items-center">
          <TbCoinTakaFilled className="w-7 h-7 text-gray-800"/>
          <span className="text-2xl font-semibold text-gray-800">320</span>
          <span className="text-gray-500">/person</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
