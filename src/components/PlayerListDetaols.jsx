import React from "react";

const PlayerListDetaols = ({ name, position, avatar, isHost }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-casal my-4 p-4 sm:p-5 rounded-xl gap-4">
      {/* Player Info */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-white"
        />
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#FDE8CD] font-semibold">
            {name} {isHost && <span className="text-sm font-normal">(Host)</span>}
          </h2>
          {/* {position && (
            <p className="text-sm sm:text-base text-[#FDE8CD]/80">{position}</p>
          )} */}
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full sm:w-auto">
        <button className="w-full sm:w-auto bg-gray-100 text-gray-800 px-4 py-2 rounded-xl text-sm sm:text-base hover:bg-gray-200 transition">
          Message
        </button>
      </div>
    </div>
  );
};

export default PlayerListDetaols;
