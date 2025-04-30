import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuReply } from "react-icons/lu";

const CommentsTabContent = () => {
  return (
    <div className="m-10 p-5 bg-white rounded-2xl">
      {/* comments  */}
      <div className="bg-casal my-4 p-3 rounded-xl">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <p className="bg-[#FDE8CD] rounded-full p-2">AM</p>
            <h2 className="text-2xl text-[#FDE8CD]">Alex Mercer</h2>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#FDE8CD]">14 min</p>
            <button>
              <HiOutlineDotsVertical className="w-8 h-8 text-gray-200" />
            </button>
          </div>
        </div>
        {/* show comment  */}
        <p className="text-lg text-gray-300">
          Looking forward to the game! What’s the final player count?
        </p>
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <LuReply />
        <span>Reply</span>
      </p>

      {/* reply comments  */}
      <div className="p-5 border-l border-dashed border-gray-300">
        {/* here reply comment  */}
        <div className="bg-[#FDE8CD] my-4 p-3 rounded-xl">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <p className="bg-casal rounded-full p-2 text-[#FDE8CD]">AM</p>
              <h2 className="text-2xl text-casal">Alex Mercer</h2>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-casal">14 min</p>
              <button>
                <HiOutlineDotsVertical className="w-8 h-8 text-casal" />
              </button>
            </div>
          </div>
          {/* show comment  */}
          <p className="text-lg text-gray-800">
            Looking forward to the game! What’s the final player count?
          </p>
        </div>
        <div className="bg-[#FDE8CD] my-4 p-3 rounded-xl">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <p className="bg-casal rounded-full p-2 text-[#FDE8CD]">AM</p>
              <h2 className="text-2xl text-casal">Alex Mercer</h2>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-casal">14 min</p>
              <button>
                <HiOutlineDotsVertical className="w-8 h-8 text-casal" />
              </button>
            </div>
          </div>
          {/* show comment  */}
          <p className="text-lg text-gray-800">
            Looking forward to the game! What’s the final player count?
          </p>
        </div>
      </div>

      {/* comments  */}
      <div className="bg-casal my-4 p-3 rounded-xl">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <p className="bg-[#FDE8CD] rounded-full p-2">AM</p>
            <h2 className="text-2xl text-[#FDE8CD]">Alex Mercer</h2>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#FDE8CD]">14 min</p>
            <button>
              <HiOutlineDotsVertical className="w-8 h-8 text-gray-200" />
            </button>
          </div>
        </div>
        {/* show comment  */}
        <p className="text-lg text-gray-300">
          Looking forward to the game! What’s the final player count?
        </p>
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <LuReply />
        <span>Reply</span>
      </p>

      {/* comments  */}
      <div className="bg-casal my-4 p-3 rounded-xl">
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <p className="bg-[#FDE8CD] rounded-full p-2">AM</p>
            <h2 className="text-2xl text-[#FDE8CD]">Alex Mercer</h2>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-[#FDE8CD]">14 min</p>
            <button>
              <HiOutlineDotsVertical className="w-8 h-8 text-gray-200" />
            </button>
          </div>
        </div>
        {/* show comment  */}
        <p className="text-lg text-gray-300">
          Looking forward to the game! What’s the final player count?
        </p>
      </div>
      <p className="flex items-center gap-1 text-gray-500">
        <LuReply />
        <span>Reply</span>
      </p>

      {/* comment input field  */}
      <div className="py-5 flex gap-5">
        <input
          type="text"
          name="comment"
          placeholder="Write a comment"
          className="px-5 py-3 border border-gray-400 w-full rounded-full "
        />
        <button className="bg-casal text-gray-200 px-5  rounded-xl">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CommentsTabContent;
