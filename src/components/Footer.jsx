import React from "react";

const Footer = () => {
  return (
    <div className="h-[280px] bg-[#18191C] flex flex-col items-center  justify-between pt-10 ">
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-5 gap-10  w-full max-w-[1000px] ">
          <div className="flex flex-col">
            <img className="w-24" src="/logofooter.png" alt="" />
            <div className="flex items-center mt-4">
              <p className="text-[#5E6670] text-[11px]">Call now:</p>
              <p className="text-white text-[12px] ml-1"> (319) 555-0115</p>
            </div>
            <p className="text-[#5E6670] text-[11px] mt-2">
              6391 Elgin St. Celina, Delaware 10299, New York, United States of
              America
            </p>
            <div></div>
          </div>

          <div className="flex flex-col gap-3 ml-7">
            <h1 className="text-white text-[13px]">Quick Link</h1>
            <p className="text-[#5E6670] text-[11px]">About</p>
            <p className="text-[#5E6670] text-[11px]">Contact</p>
            <p className="text-[#fff] text-[11px]">Pricing</p>
            <p className="text-[#5E6670] text-[11px]">Blog</p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white text-[13px]">Candidate</h1>
            <p className="text-[#5E6670] text-[11px]">Browse Jobs</p>
            <p className="text-[#5E6670] text-[11px]">Browse Employers</p>
            <p className="text-[#5E6670] text-[11px]">Candidate Dashboard</p>
            <p className="text-[#5E6670] text-[11px]">Saved Jobs</p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white text-[13px]">Employers</h1>
            <p className="text-[#5E6670] text-[11px]">Post a Job</p>
            <p className="text-[#5E6670] text-[11px]">Browse Candidates</p>
            <p className="text-[#5E6670] text-[11px]">Employers Dashboard</p>
            <p className="text-[#5E6670] text-[11px]">Applications</p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white text-[13px]">Support</h1>
            <p className="text-[#5E6670] text-[11px]">Faqs</p>
            <p className="text-[#5E6670] text-[11px]">Privacy Policy</p>
            <p className="text-[#5E6670] text-[11px]">Terms & Conditions</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-[1000px] py-4 border-t border-[#2F3338]">
        <p className="text-[#767F8C] text-[11px]">@ 2021 Jobpilot - Job Portal. All rights Rserved</p>
        <div className="flex items-center gap-3">
            <img className="w-2" src="./fb.png" alt="" />
            <img className="w-3" src="./yt.png" alt="" />
            <img className="w-3" src="./ig.png" alt="" />
            <img className="w-3" src="./tw.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
