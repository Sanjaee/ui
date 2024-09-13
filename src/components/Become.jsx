import React from "react";

const Become = () => {
  return (
    <div className="w-full h-[400px] bg-white mt-16 flex justify-center items-center border-b border-[#E4E5E8]">
      <div className="w-full max-w-[1000px]">
        <div className="grid grid-cols-2 gap-8">
          <div className="w-[500px] h-[240px] px-8 py-7 flex-col flex bacground-1 rounded-lg">
            <h1 className="text-[#18191C] text-lg font-semibold mt-2">
              Become a Candidate
            </h1>
            <p className="text-[#767F8C] text-sm mt-2 pr-40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              cursus a dolor convallis efficitur.
            </p>

            <button className="flex items-center mt-10 px-5 py-2 w-40 bg-white">
              <p className="text-[#0A65CC] text-sm "> Register now</p>
              <img src="/arrowregis.png" className="ml-2" alt="" />
            </button>
          </div>

          <div className="w-[500px] h-[240px] px-8 py-7 flex-col flex bacground-2 rounded-lg">
            <h1 className="text-[#FFFFFF] text-lg font-semibold mt-2">
              Become a Employers
            </h1>
            <p className="text-[#767F8C] text-sm mt-2 pr-40">
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
              sed efficitur dolor. Pelque augue risus, aliqu.
            </p>

            <button className="flex items-center mt-10 px-5 py-2 w-40 bg-white">
              <p className="text-[#0A65CC] text-sm "> Register now</p>
              <img src="/arrowregis.png" className="ml-2" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
