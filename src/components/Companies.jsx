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
    <div className="w-full h-[566px] bg-white flex justify-center border-[#E4E5E8]">
      <div className="w-full max-w-[1350px]">
        <h1 className="text-[#18191C] text-[40px] font-[500] ">
          Top companies
        </h1>
        <div className="grid grid-cols-3 mt-16 gap-5">
          {companies.map((company, index) => (
            <div key={index} className="w-[424px] h-[170px] shadow-sm border rounded-lg p-5">
              <div className="flex items-center">
                <div className="bg-[#EA4C89] p-4 rounded-md">
                  <img src={company.logoUrl} alt={company.name} />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="flex items-center">
                    <p className="text-[#18191C] text-[18px] font-semibold">{company.name}</p>
                    {company.isFeatured && (
                      <p className="ml-2 text-[#E05151] text-[12px] bg-[#FCEEEE] px-3 py-1 rounded-full font-bold">Featured</p>
                    )}
                  </div>
                  <div className="flex items-center mt-1">
                    <img className="w-[12px]" src='/location.png' alt="Location" />
                    <p className="ml-2 text-[#767F8C] text-[12px]">{company.location}</p>
                  </div>
                </div>
              </div>
              <button className="w-full h-[48px] bg-[#E7F0FA] text-[#0A65CC] text-[16px] font-bold mt-6 rounded-md">
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
