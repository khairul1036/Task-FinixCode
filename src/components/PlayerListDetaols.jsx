import React from "react";

const PlayerListDetaols = () => {
  return (
    <div className="flex justify-between items-center bg-casal my-4 p-3 rounded-xl">
      <div className="flex items-center gap-2">
        <p className="bg-[#FDE8CD] rounded-full p-2">AM</p>
        <h2 className="text-2xl text-[#FDE8CD]">Alex Mercer <span className="text-sm">(Host)</span></h2>
      </div>
      <div>
        <button className="bg-gray-100 px-5 py-3 rounded-xl">Message</button>
      </div>
    </div>
  );
};

export default PlayerListDetaols;
