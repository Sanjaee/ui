import { Link, useLocation } from "react-router-dom";


const NavbarLogin = () => {
  const location = useLocation();
  const isFindJobRoute = location.pathname.startsWith("/findjob");
  return (
    <div className="flex flex-col  z-50 top-0 fixed w-full border ">
      {/* Navbar 1 */}
      <div className="w-full px-32 h-[28px] text-[12px] bg-[#F1F2F4] flex justify-between items-center ">
        <div className="flex items-center gap-6">
        <Link
            to="/"
            className={location.pathname === "/" ? "text-[#0A65CC]" : ""}
          >
            Home
          </Link>
          <Link
            to="/findjob"
            className={isFindJobRoute ? "text-[#0A65CC]" : ""}
          >
            Find Job
          </Link>
          <Link to="/">Employers</Link>
          <Link to="/">Candidates</Link>
          <Link to="/">Pricing Plans</Link>
          <Link to="/">Customer Supports</Link>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-4 h-4" src="/PhoneCall.png" alt="" />
          <p className="text-[12px]">+1-202-555-0178</p>

          <div className="flex items-center ml-6 gap-2">
            <img className=" " src="/flag.png" alt="" />
            <p>English</p>
            <img src="/arrow.png" alt="" />
          </div>
        </div>
      </div>

      {/* Navbar 2 */}
      <div className="w-full bg-white px-32 h-[70px] flex items-center justify-between">
        <div className="flex items-center w-full">
          {/* Logo Nav */}
          <img className="mr-10 w-28" src="/LogoNav.png" alt="" />

          {/* Search DAN flag */}
          <div className="flex items-center border-[2px] rounded-md border-[#E4E5E8] px-6 py-1 w-full ">
            <div className="flex items-center  gap-3 w-full">
              <img src="/India.png" alt="" />
              <p className="text-[12px]">India</p>
              <img src="/arrow.png" alt="" />

              <div className="flex items-center ml-6 w-full">
                <img className="w-6 h-6 mr-4" src="/search.png" alt="" />
                <input
                  className="outline-none w-full"
                  placeholder="Job tittle, keyword, company"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AUTH */}
        <div className="flex items-center w-1/2 justify-end ">
        <div className="relative">
          <img className="absolute w-3 left-3" src="/notif.png" alt="" />
          <img className="mr-4 w-5" src="/BellRinging.png" alt="" />
        </div>
        <div>
          <img className="w-9 rounded-full" src="/avatar.png" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogin;
