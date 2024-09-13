import React from "react";

const Testimoni = () => {
  return (
    <div className="w-full h-[652px] flex flex-col items-center justify-center">
      <h1 className="text-[#18191C] text-[40px] mb-10">Testimoni</h1>

      {/* slick carosel */}
      <div className="w-[424px] h-[294px] flex flex-col justify-between bg-white p-5 rounded-lg">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <img src="/rating.png" alt="" />
            <img src="/rating.png" alt="" />
            <img src="/rating.png" alt="" />
            <img src="/rating.png" alt="" />
            <img src="/rating.png" alt="" />
          </div>
          <div className="mt-5 ">
            <p className="text-[#464D61] text-[16px]">
              “Mauris eget lorem odio. Mauris convallis justo molestie metus
              aliquam lacinia. Suspendisse ut dui vulputate augue condimentum
              ornare. Morbi vitae tristique ante”
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
         <div className="flex items-center">
         <img
            className="rounded-full w-[48px] h-[48px]"
            src="/testi1.png"
            alt=""
          />
          <div className="flex flex-col ml-4">
            <p className="text-[#191F33] text-[16px]">Bessie Cooper</p>
            <p className="text-[#767E94] text-[14px]">Creative Director</p>
          </div>
         </div>
          <img src="/logotesti.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
