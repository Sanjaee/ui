import React from "react";

const Main = () => {
  return (
    <div className="w-full h-[450px] bg-white mt-16 flex justify-center ">
      <div className="w-full max-w-[1000px] ">
        <h1 className="text-[#18191C] text-[32px] font-[500] mt-20">
          Most Popular Vacancies
        </h1>
        <div className="grid grid-cols-4 mt-8 gap-10">
          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Anesthesiologists</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 45,904 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Surgeons</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 50,364 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Obstetricians-Gynecologists</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 4,339 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Orthodontists</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 20,079 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Maxillofacial Surgeons</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 74,875 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Software Developer</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 43359 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Psychiatrists</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 18,599 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#0A65CC] font-semibold border-b-2 border-[#0A65CC] w-[130px]">Data Scientist</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 28,200 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Financial Manager</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 61,391 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Management Analysis</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 93,046 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">IT Manager</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 50,963 Open Positions</p>
          </div>

          <div className="flex flex-col">
            <p className="text-[14px] text-[#18191C] font-semibold">Operations Research Analysis</p>
            <p className="mt-2 text-[#767F8C] text-[12px]"> 16,627 Open Positions</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
