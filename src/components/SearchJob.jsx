import React from "react";
import FeatureSearchJob from "./FeatureSearchJob";
import Footer from "./Footer";

const SearchJob = () => {
  return (
    <>
    <div className="mt-[100px] flex flex-col items-center justify-center">
      <div className="flex  h-[66px] itevs-center justify-center  w-full">
        <div className="items-center justify-between flex w-full max-w-[1020px]">
          <h1 className="text-[#18191C] font-semibold text-[14px] ">
            Find Job
          </h1>

          <p className="text-[#18191C] text-[12px]">
            <span className="text-[#767F8C]">Home /</span> Find Job
          </p>
        </div>
      </div>

      {/* Search job */}
      <div className="bg-[#FFFFFF]  flex flex-col items-center w-full justify-center ">
        <div className="w-full max-w-[1020px]">
          {/* input 1 */}
          <div className="flex items-center p-1 w-full h-[52px] shadow-md border rounded-md border-[#E4E5E8] mt-5">
            <div className="flex items-center w-full ml-3">
              <img className="w-5 mr-3" src="/search.png" alt="" />
              <input
                className="w-full outline-none py-2"
                placeholder="Search by: Job tittle, Position, Keyword..."
              />
            </div>

            {/* input 2 */}
            <div className="flex items-center w-full ml-3">
              <img className="w-5 mr-3" src="/location.png" alt="" />
              <input
                className="w-full outline-none py-2"
                placeholder="City, state or zip code"
              />
            </div>

            {/* button 1 */}
            <img className="w-5 mr-5" src="/Crosshair.png" alt="" />

            {/* button 2 */}
            <div className="flex items-center w-1/2 gap-2">
              <button className="flex items-center px-3 py-2 bg-[#F1F2F4] text-[12px]">
                <img className="w-5" src="/Sliders.png" alt="" />
                <p className="ml-2 text-[#18191C] text-[15px] font-semibold">
                  Filter
                </p>
              </button>
              <button className="bg-[#0A65CC] text-[14px] text-white px-3 py-2 rounded-sm">
                Find Job
              </button>
            </div>
          </div>
        </div>
        <FeatureSearchJob />
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default SearchJob;
