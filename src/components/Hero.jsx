import { data } from "autoprefixer";
import React from "react";

const Hero = () => {
 const data ={
   name:"ThinkPad",
   price:"$10.000"
   
 }
  return (
    <div className="mt-28 flex flex-col w-full">
      <div className="flex  items-center justify-center w-full gap-52 ">
        {/* content 1 */}
        <div className="flex flex-col w-full max-w-[479px]">
          <div>
            <div className="flex flex-col w-full max-w-[579px]">
              <h1 className="text-[45px] font-[500] leading-tight">
                Find a job that suits your interest & skills.
              </h1>
              <p className="mt-4 text-[14px] text-[#5E6670] leading-tight pr-20">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
            </div>

            {/* search JOB */}
            <div className="flex items-center mt-6">
              <div className="flex items-center border-[2px] rounded-md border-[#E4E5E8] px-2 py-2 bg-white shadow-sm">
                <div className="flex items-center ml-3">
                  <img className="w-4" src="/search.png" alt="" />
                  <input
                    className="outline-none  ml-1 text-[12px]"
                    placeholder="Job tittle, Keyword..."
                  />
                </div>
                <div className="flex items-center">
                  <img className="w-4" src="/location.png" alt="" />
                  <input
                    className="outline-none p-2 ml-1 text-[12px]"
                    placeholder="Your Location"
                  />
                </div>
                <button className="bg-[#0A65CC] text-[14px] text-white px-3 py-2 rounded-sm">
                  Find Job
                </button>
              </div>
            </div>

            <p className="mt-4 text-[12px] ">
              <span className="text-[#9199A3]">Suggestion:</span> Designer, Programing,{" "}
              <span className="text-[#0A65CC]">Digital Marketing,</span> Video,
              Animation.
            </p>
          </div>
        </div>

        {/* content 2 */}
        <div>
          <img className="w-80" src="/logohero.png" alt="" />
        </div>
      </div>

      {/* content 3 */}
      <div className="flex items-center justify-center w-full mt-10 gap-7">
        {/* card 1 */}
      <div className="w-full flex items-center px-5 max-w-[230px] h-[70px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-2">
            <img className="w-6" src="/icon1.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[12px] font-bold">1,75,324</p>
            <p className="text-[#767F8C] text-[10px]">Live Job</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full flex items-center px-5 max-w-[230px] h-[70px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#0A65CC] p-2">
            <img className="w-6" src="/icon2.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[12px] font-bold">1,75,324</p>
            <p className="text-[#767F8C] text-[10px]">Live Job</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-full flex items-center px-5 max-w-[230px] h-[70px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-2">
            <img className="w-6" src="/icon3.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[12px] font-bold">1,75,324</p>
            <p className="text-[#767F8C] text-[10px]">Live Job</p>
          </div>
        </div>

        {/* card 4 */}
        <div className="w-full flex items-center px-5 max-w-[230px] h-[70px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-2">
            <img className="w-6" src="/icon1.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[12px] font-bold">1,75,324</p>
            <p className="text-[#767F8C] text-[10px]">Live Job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
