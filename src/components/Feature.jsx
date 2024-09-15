import React from "react";

const Feature = () => {
  const data = [
    {
      title: "Technical Support Specialist",
      type: "Part-time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: true,
    },
    {
      title: "Senior UX Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: true,
    },
    {
      title: "Marketing Officer",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Junior Graphic Designer",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },

    {
      title: "Interaction Designer",
      type: "Part-time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Project Manager",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },

    {
      title: "Software Engineer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Visual Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Project Manager",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: true,
    },
    {
      title: "Front End Developer",
      type: "Part-time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Senior UX Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
    {
      title: "Marketing Manager",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      companyLogo: "/fitur1.png",
      locationIcon: "/fiturmap.png",
      saveIcon: "/fitursave.png",
      linear: false,
    },
  ];

  return (
    <div className="w-full h-[950px] bg-white flex justify-center  border-[#E4E5E8]">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-[#18191C] text-[32px] font-[500] mt-20">
          Featured job
        </h1>
        <div className="grid grid-cols-3 mt-16 gap-4">
          {data.map((job, index) => (
            <div
              key={index}
              className={`w-[324px] h-[140px] ${
                job.linear ? "bg-custom-gradient" : "bg-white"
              } shadow-md border rounded-md p-5   hover:cursor-pointer hover:shadow-xl hover:transition-all hover:duration-75 hover:scale-105`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
