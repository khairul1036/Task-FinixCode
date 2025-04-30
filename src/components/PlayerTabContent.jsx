import React from "react";
import { FaUsers } from "react-icons/fa";
import PlayerListDetaols from "./PlayerListDetaols";

const PlayerTabContent = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">Players</h2>
        <p className="flex items-center gap-2">
          <FaUsers className="w-7 h-7" />
          <span className="text-2xl">5/11</span>
        </p>
      </div>
      <div>
        <PlayerListDetaols />
        <PlayerListDetaols />
        <PlayerListDetaols />
        <PlayerListDetaols />
        <PlayerListDetaols />
      </div>
    </div>
  );
};

export default PlayerTabContent;
