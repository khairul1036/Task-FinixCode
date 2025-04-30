import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-10">
      {/* Main Image - Left side (2 columns on md+) */}
      <div className="md:col-span-2 rounded overflow-hidden h-64 sm:h-80 md:h-full">
        <img
          src="/image/Football_Image_silder.png"
          alt="football"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      {/* Right Column with stacked images */}
      <div className="flex flex-col gap-4">
        {/* First Image */}
        <div className="relative h-32 sm:h-40 md:h-1/2 overflow-hidden rounded-3xl">
          <img
            src="/image/Football_Image_silder.png"
            alt="football"
            className="w-full h-full object-cover rounded"
          />
        </div>

        {/* Second Image with "+2 Photos" overlay */}
        <div className="relative h-32 sm:h-40 md:h-1/2 overflow-hidden rounded-3xl">
          <img
            src="/image/Football_Image_silder.png"
            alt="football"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl sm:text-2xl font-semibold rounded-3xl">
            +2 Photos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
