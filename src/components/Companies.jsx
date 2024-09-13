import React from "react";

const Companies = () => {
  const companies = [
    {
      name: "Dribbble",
      location: "Dhaka, Bangladesh",
      isFeatured: true,
      openPositions: 3,
      logoUrl: "/companies.png",
    },
    {
        name: "Dribbble",
        location: "Dhaka, Bangladesh",
        isFeatured: true,
        openPositions: 3,
        logoUrl: "/companies.png",
      },
      {
        name: "Dribbble",
        location: "Dhaka, Bangladesh",
        isFeatured: true,
        openPositions: 3,
        logoUrl: "/companies.png",
      },
      {
        name: "Dribbble",
        location: "Dhaka, Bangladesh",
        isFeatured: true,
        openPositions: 3,
        logoUrl: "/companies.png",
      },
      {
        name: "Dribbble",
        location: "Dhaka, Bangladesh",
        isFeatured: true,
        openPositions: 3,
        logoUrl: "/companies.png",
      },
      {
        name: "Dribbble",
        location: "Dhaka, Bangladesh",
        isFeatured: true,
        openPositions: 3,
        logoUrl: "/companies.png",
      },

  ];

  return (
    <div className="w-full h-[476px] bg-white flex justify-center border-[#E4E5E8]">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-[#18191C] text-[32px] font-[500] ">
          Top companies
        </h1>
        <div className="grid grid-cols-3 mt-16 gap-5">
          {companies.map((company, index) => (
            <div key={index} className="w-[324px] h-[140px] shadow-sm border rounded-lg p-5">
              <div className="flex items-center">
                <div className="bg-[#EA4C89] p-3 rounded-md">
                  <img className="w-5" src={company.logoUrl} alt={company.name} />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="flex items-center">
                    <p className="text-[#18191C] text-[14px] font-semibold">{company.name}</p>
                    {company.isFeatured && (
                      <p className="ml-2 text-[#E05151] text-[10px] bg-[#FCEEEE] px-2 py-[2px] rounded-full font-bold">Featured</p>
                    )}
                  </div>
                  <div className="flex items-center ">
                    <img className="w-[12px]" src='/location.png' alt="Location" />
                    <p className="ml-2 text-[#767F8C] text-[12px]">{company.location}</p>
                  </div>
                </div>
              </div>
              <button className="w-full h-[35px] bg-[#E7F0FA] text-[#0A65CC] text-[12px] font-bold mt-5 rounded-sm">
                Open Position ({company.openPositions})
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
