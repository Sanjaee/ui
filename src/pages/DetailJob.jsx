import { Link, useParams } from "react-router-dom";
import NavbarLogin from "../components/NavbarLogin";
import RelateJob from "../components/RelateJob";
import Footer from "../components/Footer";
import data from '../utils/data.json'
import { useEffect } from "react";

const DetailJob = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas (posisi (0,0))
  }, []); 

  const jobDetail = data.find((job) => job.id === parseInt(id));

  if (!jobDetail) {
    return <p>Job not found</p>;
  }


  return (
    <>
      <NavbarLogin />
      <div className="mt-[100px] flex flex-col items-center justify-center">
        <div className="flex  h-[66px] itevs-center justify-center  w-full">
          <div className="items-center justify-between flex w-full max-w-[1020px]">
            <h1 className="text-[#18191C] font-semibold text-[14px] ">
              Find Job
            </h1>

            <p className="text-[#18191C] text-[12px]">
              <span className="text-[#767F8C]">Home /</span> Find Job
            </p>
          </div>
        </div>

        {/* Detail job */}
        <div className="bg-[#FFFFFF]  flex flex-col items-center w-full justify-center">
          <div className="w-full max-w-[1020px]">
            {/* title */}
            <div className="flex items-center justify-between w-full h-[82px] ">
              <div className=" flex items-center">
                <img className="w-16" src="/avatarjob.png" alt="" />
                <div className="flex flex-col ml-3">
                  <p className="text-[#18191C] font-semibold text-[18px]">
                    {jobDetail.title}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-[#474C54] text-[12px]">at Facebook</p>
                    <p className="text-white text-[10px] bg-[#0BA02C] font-semibold px-2 py-[2px] rounded-sm">
                      {jobDetail.type}
                    </p>
                    <p className="text-[#E05151] text-[10px] bg-[#FFEDED]  px-2 py-[2px] rounded-full">
                      Featured
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-[#E7F0FA]  px-3 py-2 rounded-sm">
                  <img className="w-5" src="/savejob.png" alt="" />
                </button>
                <button className="bg-[#0A65CC] flex items-center text-[14px] text-white px-10 py-2 rounded-sm">
                  <p>Apply now</p>
                  <img className="w-5" src="/arrowjob.png" alt="" />
                </button>
              </div>
            </div>

            {/* description */}

            <div className=" flex items-start mt-7 gap-5 pb-10">
              {/* conten kiri */}
              <div className=" w-full max-w-[600px]  ">
                <div className="flex flex-col">
                  <h1 className="text-[#18191C] font-semibold text-[16px]">
                    Job Description
                  </h1>
                  <div className="flex flex-col text-[#5E6670] text-[14px] gap-5 mt-3">
                    <p>
                      Velstar is a Shopify Plus agency, and we partner with
                      brands to help them grow, we also do the same with our
                      people!
                    </p>
                    <p>
                      Here at Velstar, we don't just make websites, we create
                      exceptional digital experiences that consumers love. Our
                      team of designers, developers, strategists, and creators
                      work together to push brands to the next level. From
                      Platform Migration, User Experience & User Interface
                      Design, to Digital Marketing, we have a proven track
                      record in delivering outstanding eCommerce solutions and
                      driving sales for our clients.
                    </p>
                    <p>
                      The role will involve translating project specifications
                      into clean, test-driven, easily maintainable code. You
                      will work with the Project and Development teams as well
                      as with the Technical Director, adhering closely to
                      project plans and delivering work that meets functional &
                      non-functional requirements. You will have the opportunity
                      to create new, innovative, secure and scalable features
                      for our clients on the Shopify platform
                    </p>

                    <p>Want to work with us? You're in good company!</p>
                  </div>

                  <h1 className="text-[#18191C] font-semibold text-[16px] mt-5">
                    Requirements
                  </h1>
                  <ul className="list-disc ml-5 mt-3 text-[#5E6670] text-[14px]">
                    <li>
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                    </li>
                    <li>
                      3+ years of experience in back-end development working
                      either with multiple smaller projects simultaneously or
                      large-scale applications
                    </li>
                    <li>
                      Experience with HTML, JavaScript, CSS, PHP, Symphony
                      and/or Laravel
                    </li>
                    <li>
                      Working regularly with APIs and Web Services (REST,
                      GrapthQL, SOAP, etc)
                    </li>
                    <li>
                      Have experience/awareness in Agile application
                      development, commercial off-the-shelf software,
                      middleware, servers and storage, and database management.
                    </li>
                    <li>
                      Familiarity with version control and project management
                      systems (e.g., Github, Jira)
                    </li>
                    <li>
                      Great troubleshooting and analytical skills combined with
                      the desire to tackle challenges head-on
                    </li>
                    <li>
                      Ambitious and hungry to grow your career in a fast-growing
                      agency
                    </li>
                  </ul>

                  <h1 className="text-[#18191C] font-semibold text-[16px] mt-5">
                    Desirable:
                  </h1>
                  <ul className="list-disc ml-5 mt-3 text-[#5E6670] text-[14px]">
                    <li>
                      Working knowledge of eCommerce platforms, ideally Shopify
                      but also others e.g. Magento, WooCommerce, Visualsoft to
                      enable seamless migrations.
                    </li>
                    <li>Working knowledge of payment gateways</li>
                    <li>API platform experience / Building restful APIs</li>
                  </ul>

                  <h1 className="text-[#18191C] font-semibold text-[16px] mt-5">
                    Benefits
                  </h1>
                  <ul className="list-disc ml-5 mt-3 text-[#5E6670] text-[14px]">
                    <li>
                      Early finish on Fridays for our end of week catch up (4:30
                      finish, and drink of your choice from the bar)
                    </li>
                    <li>
                      28 days holiday (including bank holidays) rising by 1 day
                      per year PLUS an additional day off on your birthday
                    </li>
                    <li>Generous annual bonus.</li>
                    <li>Healthcare package</li>
                    <li>
                      Paid community days to volunteer for a charity of your
                      choice
                    </li>
                    <li>
                      £100 contribution for your own personal learning and
                      development
                    </li>
                    <li>
                      Free Breakfast on Mondays and free snacks in the office
                    </li>
                    <li>
                      Access to Perkbox with numerous discounts plus free points
                      from the company to spend as you wish.
                    </li>

                    <li>Cycle 2 Work Scheme</li>

                    <li>Brand new MacBook Pro</li>

                    <li>
                      Joining an agency on the cusp of exponential growth and
                      being part of this exciting story.
                    </li>
                  </ul>
                </div>
              </div>

              {/* content kanan */}
              <div className="w-full max-w-[400px]">
                {/* salary and location */}
                <div className="w-full flex items-center justify-between border-[2px] border-[#E7F0FA] h-32 rounded-md">
                  <div className="flex flex-col items-center justify-center gap-1 flex-grow">
                    <h1 className="text-[#18191C] font-semibold text-[14px]">
                      Salary (USD)
                    </h1>
                    <p className="text-[#0BA02C] text-[18px]">
                      $100,000 - $120,000
                    </p>
                    <p className="text-[#767F8C] text-[10px]">Yearly salary</p>
                  </div>

                  <div className="border-l-[2px] border-[#E7F0FA] h-[70%] my-auto"></div>

                  <div className="flex flex-col items-center gap-1 justify-center flex-grow">
                    <img className="w-5" src="/jobloc.png" alt="" />
                    <p className="text-[#18191C] font-semibold text-[12px]">
                      Job Location
                    </p>
                    <p className="text-[#767F8C] text-[10px]">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Job Overview */}
                <div className="w-full  justify-between border-[2px] border-[#E7F0FA]  rounded-md mt-9">
                  <div className="flex flex-col  px-8">
                    <h1 className="mt-5 text-[#18191C] font-semibold text-[14px]">
                      Job Overview
                    </h1>
                    <div className="grid grid-cols-3 mt-3 pb-4 gap-10">
                      <div className="flex flex-col">
                        <img className="w-5" src="/datailjob1.png" alt="" />
                        <p className="text-[#767F8C] font-semibold text-[10px] mt-2">
                          JOB POSTED:
                        </p>
                        <p className="text-[#18191C] font-semibold text-[10px] mt-1">
                          14 Jun, 2021
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <img className="w-5" src="/detailjob2.png" alt="" />
                        <p className="text-[#767F8C] font-semibold text-[10px] mt-2">
                          JOB EXPIRE IN:
                        </p>
                        <p className="text-[#18191C] font-semibold text-[10px] mt-1">
                          14 Jun, 2021
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <img className="w-5" src="/detailjob3.png" alt="" />
                        <p className="text-[#767F8C] font-semibold text-[10px] mt-2">
                          JOB LEVEL:
                        </p>
                        <p className="text-[#18191C] font-semibold text-[10px] mt-1">
                          Entry Level
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <img className="w-5" src="/detailjob4.png" alt="" />
                        <p className="text-[#767F8C] font-semibold text-[10px] mt-2">
                          EXPERIENCE:
                        </p>
                        <p className="text-[#18191C] font-semibold text-[10px] mt-1">
                          $50k-80k/month
                        </p>
                      </div>

                      <div className="flex flex-col">
                        <img className="w-5" src="/detailjob5.png" alt="" />
                        <p className="text-[#767F8C] font-semibold text-[10px] mt-2">
                          EDUCATION:
                        </p>
                        <p className="text-[#18191C] font-semibold text-[10px] mt-1">
                          Graduation
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-[2px] border-[#E7F0FA] pb-4">
                    <h1 className="text-[#18191C] font-semibold text-[14px] px-8 mt-4">
                      Share this job:
                    </h1>
                    <div className="flex items-center gap-2  px-8 mt-1 ">
                      <button className="flex items-center gap-2 bg-[#E7F0FA] w-[110px] justify-center h-[30px]  rounded-sm">
                        <img className="w-4" src="/link.png" alt="" />
                        <p className="text-[#0A65CC] text-[12px]">Copy Links</p>
                      </button>

                      <a
                        className="w-[30px] bg-[#E7F0FA] h-[30px] flex items-center justify-center rounded-sm"
                        href="https://linkedin.com"
                      >
                        <img className="w-4" src="/linkedin.png" alt="" />
                      </a>

                      <a
                        className="w-[30px] bg-[#0A65CC] h-[30px] flex items-center justify-center rounded-sm"
                        href="https://linkedin.com"
                      >
                        <img className="w-4" src="/fbjob.png" alt="" />
                      </a>

                      <a
                        className="w-[30px] bg-[#E7F0FA] h-[30px] flex items-center justify-center rounded-sm"
                        href="https://linkedin.com"
                      >
                        <img className="w-4" src="/twjob.png" alt="" />
                      </a>

                      <a
                        className="w-[30px] bg-[#E7F0FA] h-[30px] flex items-center justify-center rounded-sm"
                        href="https://linkedin.com"
                      >
                        <img className="w-4" src="/email.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white w-full border-t border-[#E7F0FA]">
          <div className="w-full max-w-[1020px]">
            <h1 className="text-[#18191C]  text-3xl mt-20">Related Jobs</h1>
            <RelateJob />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailJob;
