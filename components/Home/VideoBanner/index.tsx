import { VIDEO_BANNER_SRC } from "components/constants";
import React from "react";

const VideoBanner = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
        <p className="italic font-bold text-xl font-libre">
          Spring - Summer 2022
        </p>
        <h2 className="font-bold uppercase text-6xl mt-4 mb-5">
          flash sale off 70%
        </h2>
        <button className="bg-transparent capitalize border-2 rounded-full border-white px-10 py-2 text-sm font-bold z-10 transition-all duration-200 hover:bg-hover hover:border-hover">
          shop now
        </button>
      </div>

      <video autoPlay={true} muted loop className="w-full h-full object-cover">
        <source src={VIDEO_BANNER_SRC} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
