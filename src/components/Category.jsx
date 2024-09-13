import React from "react";

const Category = () => {
  const categories = [
    {
      title: "Graphics & Design",
      openPositions: 357,
      imageUrl: "/categori1.png",
    },
    {
      title: "Code & Programing",
      openPositions: 120,
      imageUrl: "/categori2.png",
    },
    {
      title: "Digital Marketing",
      openPositions: 200,
      imageUrl: "/categori3.png",
    },
    {
      title: "Video & Animation",
      openPositions: 180,
      imageUrl: "/categori4.png",
    },
    {
      title: "Music & Audio",
      openPositions: 357,
      imageUrl: "/categori5.png",
    },
    {
      title: "Account & Finance",
      openPositions: 120,
      imageUrl: "/categori6.png",
    },
    {
      title: "Health & Care",
      openPositions: 200,
      imageUrl: "/categori7.png",
    },
    {
      title: "Data & Science",
      openPositions: 180,
      imageUrl: "/categori8.png",
    }
  ];

  return (
    <div className="w-full h-[430px] bg-white mt-16 flex justify-center border-b border-[#E4E5E8]">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-[#18191C] text-[32px] font-[500] mt-20">
          Popular category
        </h1>
        <div className="grid grid-cols-4 mt-16 gap-10">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-[#E7F0FA] p-3 rounded-md">
                <img className="w-5" src={category.imageUrl} alt={category.title} />
              </div>
              <div className="flex flex-col ml-4">
                <p className="text-[14px] text-[#18191C] font-semibold">
                  {category.title}
                </p>
                <p className="mt-2 text-[#767F8C] text-[12px]">
                  {category.openPositions} Open positions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
