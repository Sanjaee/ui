import React from "react";
import { Link } from "react-router-dom";
import data from "../utils/data.json";

const FeatureSearchJob = () => {
  
  return (
    <div className="w-full pb-20  bg-white flex justify-center  border-[#E4E5E8]">
      <div className="w-full max-w-[1020px]">
        <div className="grid grid-cols-3 mt-10 gap-4">
          {data.map((job) => (
            <Link to={`/findjob/${job.id}`}
              key={job.id}
              className={`w-[324px] h-[140px] ${
                job.linear ? "bg-custom-gradient" : "bg-white"
              } shadow-md border rounded-md p-5 hover:cursor-pointer hover:shadow-xl hover:transition-all hover:duration-75 hover:scale-105`}
            >
              <h1 className="text-[#18191C] text-[14px] font-semibold">
                {job.title}
              </h1>
              <div className="flex items-center mt-2">
                <p className="px-2 bg-[#E7F6EA] text-[#0BA02C] text-[12px] font-bold">
                  {job.type}
                </p>
                <p className="ml-2 text-[#767F8C] text-[12px]">
                  Salary: {job.salary}
                </p>
              </div>

              <div className="flex items-center justify-between w-full mt-5">
                <div className="flex items-center">
                  <div className="bg-[#EDEFF5] p-2 rounded-md">
                    <img
                      className="w-5"
                      src={job.companyLogo}
                      alt="Company logo"
                    />
                  </div>
                  <div className="flex flex-col ml-4">
                    <p className="text-[14px] text-[#18191C] font-semibold">
                      {job.company}
                    </p>
                    <div className="flex items-center">
                      <img
                        className="w-3"
                        src={job.locationIcon}
                        alt="Location icon"
                      />
                      <p className=" text-[#767F8C] text-[12px] ml-1">
                        {job.location}
                      </p>
                    </div>
                  </div>
                </div>
                <img src={job.saveIcon} alt="Save icon" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center items-center ">
        <button>
          <img className="w-5 mr-3" src="/panahkiri.png" alt="" />
        </button>
        <div className="flex items-center gap-2">
          <p className="w-8 h-8 text-white text-[12px] bg-[#0A65CC] rounded-full text-center items-center flex justify-center ">01</p>

          <p className="w-8 h-8 text-[#5E6670] hover:bg-[#F1F2F4] text-[12px]  rounded-full text-center items-center flex justify-center ">02</p>

          <p className="w-8 h-8 text-[#5E6670] hover:bg-[#F1F2F4] text-[12px]  rounded-full text-center items-center flex justify-center ">03</p>

          <p className="w-8 h-8 text-[#5E6670] hover:bg-[#F1F2F4] text-[12px]  rounded-full text-center items-center flex justify-center ">04</p>

          <p className="w-8 h-8 text-[#5E6670] hover:bg-[#F1F2F4] text-[12px]  rounded-full text-center items-center flex justify-center ">05</p>
        </div>
        <button >
          <img className="w-9 h-9 ml-3 p-2 text-white bg-[#E7F0FA] rounded-full text-center items-center flex justify-center" src="/panahkanan.png" alt="" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSearchJob;
