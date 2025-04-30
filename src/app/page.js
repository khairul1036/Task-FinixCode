"use client";
import React, { useState } from "react";
import PaymentModal from "@/components/PaymentModal";
import Banner from "@/components/Banner";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DetailsTabs from "@/components/DetailsTabs";
import OthersEvents from "@/components/OthersEvents";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleContinue = (paymentMethod) => {
    console.log("Selected Payment Method:", paymentMethod);
    // Handle payment logic here
  };

  return (
    <>
      <div className="px-4 sm:px-6 md:px-10 lg:px-10">
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
                Road to the Football Finals
              </h1>
              <div className="flex gap-4">
                <button>
                  <MdOutlineFileUpload className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
                </button>
                <button>
                  <GiEternalLove className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
                </button>
                <button>
                  <HiOutlineDotsVertical className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" />
                </button>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600">
              Bashundhara Sports Complex
            </p>
            <p className="text-lg sm:text-xl text-gray-600">
              Mar 14 from 7:30 PM - 9:30 PM
            </p>
            <DetailsTabs />
          </div>

          {/* Join Event Card */}
          <div className="mb-10">
            <div className="bg-white p-5 sm:p-6 rounded-xl">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-5">
                <p className="text-md sm:text-lg text-orange-600">
                  6 spots left
                </p>
                <div className="text-right">
                  <span className="font-bold text-black text-md sm:text-lg">
                    320tk /player
                  </span>{" "}
                  <span className="text-sm text-gray-700">(both)</span>
                </div>
              </div>
              <button
                className="w-full text-lg sm:text-xl font-semibold text-center bg-[#63CFA0] py-3 sm:py-4 rounded-full mt-4 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                Join event
              </button>

              {/* Modal */}
              <PaymentModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onContinue={handleContinue}
              />
            </div>
          </div>
        </div>
      </div>
      <OthersEvents />
    </>
  );
}
