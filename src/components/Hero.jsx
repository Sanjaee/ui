import { data } from "autoprefixer";
import React from "react";

const Hero = () => {
 const data ={
   name:"ThinkPad",
   price:"$10.000"
   
 }
  return (
    <div className="mt-52 flex flex-col w-full">
      <div className="flex  items-center justify-center w-full gap-48 ">
        {/* content 1 */}
        <div className="flex flex-col w-full max-w-[679px]">
          <div>
            <div className="flex flex-col w-full max-w-[579px]">
              <h1 className="text-[56px] font-[500] leading-tight">
                Find a job that suits your interest & skills.
              </h1>
              <p className="mt-4 leading-tight">
                Aliquam vitae turpis in diam convallis finibus in at risus.
                Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
              </p>
            </div>

            {/* search JOB */}
            <div className="flex items-center mt-6">
              <div className="flex items-center border-[2px] rounded-lg border-[#E4E5E8] px-6 py-2 bg-white shadow-sm">
                <div className="flex items-center">
                  <img src="/search.png" alt="" />
                  <input
                    className="outline-none p-2 ml-1"
                    placeholder="Job tittle, Keyword..."
                  />
                </div>
                <div className="flex items-center">
                  <img src="/location.png" alt="" />
                  <input
                    className="outline-none p-2 ml-1"
                    placeholder="Your Location"
                  />
                </div>
                <button className="bg-[#0A65CC] text-white px-8 py-4 rounded-md">
                  Find Job
                </button>
              </div>
            </div>

            <p className="mt-4">
              Suggestion: Designer, Programing,{" "}
              <span className="text-[#0A65CC]">Digital Marketing,</span> Video,
              Animation.
            </p>
          </div>
        </div>

        {/* content 2 */}
        <div>
          <img src="/logohero.png" alt="" />
        </div>
      </div>

      {/* content 3 */}
      <div className="flex items-center justify-center w-full mt-14 gap-10">
        {/* card 1 */}
      <div className="w-full flex items-center px-5 max-w-[312px] h-[112px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-3">
            <img src="/icon1.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[24px]">1,75,324</p>
            <p className="text-[#767F8C] text-[16px]">Live Job</p>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full flex items-center px-5 max-w-[312px] h-[112px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#0A65CC] p-3">
            <img src="/icon2.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[24px]">1,75,324</p>
            <p className="text-[#767F8C] text-[16px]">Live Job</p>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-full flex items-center px-5 max-w-[312px] h-[112px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-3">
            <img src="/icon3.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[24px]">1,75,324</p>
            <p className="text-[#767F8C] text-[16px]">Live Job</p>
          </div>
        </div>

        {/* card 4 */}
        <div className="w-full flex items-center px-5 max-w-[312px] h-[112px] bg-[#FFFFFF] rounded-md">
          <div className="bg-[#E7F0FA] p-3">
            <img src="/icon1.png" alt="" />
          </div>
          <div className="flex flex-col ml-4">
            <p className="text-black text-[24px]">1,75,324</p>
            <p className="text-[#767F8C] text-[16px]">Live Job</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
