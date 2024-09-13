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
      linear: true
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
        linear: true
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
        linear: false
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
        linear: false
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
        linear: false
      }, {
        title: "Project Manager",
        type: "Full-Time",
        salary: "$20,000 - $25,000",
        company: "Google Inc.",
        location: "Dhaka, Bangladesh",
        companyLogo: "/fitur1.png",
        locationIcon: "/fiturmap.png",
        saveIcon: "/fitursave.png",
        linear: false
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
        linear: false
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
        linear: false
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
        linear: true
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
        linear: false
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
        linear: false
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
        linear: false
      },
  ];

  return (
    <div className="w-full h-[1050px] bg-white flex justify-center  border-[#E4E5E8]">
      <div className="w-full max-w-[1350px]">
        <h1 className="text-[#18191C] text-[40px] font-[500] mt-20">
          Featured job
        </h1>
        <div className="grid grid-cols-3 mt-16 gap-8">
          {data.map((job, index) => (
            <div
              key={index}
              className={`w-[424px] h-[170px] ${job.linear ? "bg-custom-gradient" : "bg-white"} shadow-sm border rounded-lg p-5`}
            >
              <h1 className="text-[#18191C] text-[18px] font-semibold">
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
                  <div className="bg-[#EDEFF5] p-4 rounded-md">
                    <img src={job.companyLogo} alt="Company logo" />
                  </div>
                  <div className="flex flex-col ml-4">
                    <p className="">{job.company}</p>
                    <div className="flex items-center">
                      <img src={job.locationIcon} alt="Location icon" />
                      <p>{job.location}</p>
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
