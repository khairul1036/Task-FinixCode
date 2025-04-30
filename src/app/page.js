import Banner from "@/components/Banner";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiEternalLove } from "react-icons/gi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DetailsTabs from "@/components/DetailsTabs";
import OthersEvents from "@/components/OthersEvents";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3 gap-10 px-10">
        {/* content */}
        <div className="col-span-2 space-y-2">
          <div className="flex justify-between">
            <h1 className="text-5xl text-gray-900 font-extrabold">
              Road to the Football Finals
            </h1>
            <div className="flex justify-between gap-5">
              <button>
                <MdOutlineFileUpload className="w-10 h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
              </button>
              <button>
                <GiEternalLove className="w-10 h-10 border border-gray-300 text-gray-600 bg-gray-100 p-1 rounded-full" />
              </button>
              <button>
                <HiOutlineDotsVertical className="w-10 h-10 text-gray-600" />
              </button>
            </div>
          </div>
          <p className="text-2xl text-gray-600">Bashundhara Sports Complex</p>
          <p className="text-2xl text-gray-600">
            Mar 14 from 7:30 PM - 9:30 PM
          </p>
          <DetailsTabs />
        </div>

        {/* join event card  */}
        <div>
          <div className="col-span-1 bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center border border-gray-200 rounded-xl px-4 py-5">
              <p className="text-lg text-orange-600">6 spots left</p>
              <div>
                <span className="font-bold text-black">320tk /player</span>{" "}
                <span className="text-sm text-gray-700">(both)</span>
              </div>
            </div>
            <button className="w-full text-xl font-semibold text-center bg-[#63CFA0] py-4 rounded-full mt-4">
              Join event
            </button>
          </div>
        </div>
      </div>
      <OthersEvents/>
    </div>
  );
}
