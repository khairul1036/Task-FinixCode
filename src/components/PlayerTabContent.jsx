import React from "react";
import { FaUsers } from "react-icons/fa";
import PlayerListDetaols from "./PlayerListDetaols";

const players = [
  {
    id: 1,
    name: "Alex Mercer",
    position: "Goalkeeper",
    isHost: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Jamie Fox",
    position: "Defender",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Taylor Swift",
    position: "Midfielder",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Chris Evans",
    position: "Striker",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Rihanna Stone",
    position: "Winger",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const PlayerTabContent = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">Players</h2>
        <p className="flex items-center gap-2 text-xl sm:text-2xl text-gray-700">
          <FaUsers className="w-6 h-6 sm:w-7 sm:h-7" />
          <span>{players.length}/11</span>
        </p>
      </div>

      {/* Player List */}
      <div className="space-y-6">
        {players.map((player) => (
          <PlayerListDetaols
            key={player.id}
            name={player.name}
            isHost={player.isHost}
            position={player.position}
            avatar={player.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerTabContent;
