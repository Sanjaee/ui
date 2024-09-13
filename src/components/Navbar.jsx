import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col  z-50 top-0 fixed w-full border ">
      {/* Navbar 1 */}
      <div className="w-full px-72 h-[48px] text-[14px] bg-[#F1F2F4] flex justify-between items-center ">
        <div className="flex items-center gap-6">
          <Link className="text-[#0A65CC]" to="/">
            Home
          </Link>
          <Link to="/">Find Job</Link>
          <Link to="/">Employers</Link>
          <Link to="/">Candidates</Link>
          <Link to="/">Pricing Plans</Link>
          <Link to="/">Customer Supports</Link>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-7 h-7" src="/PhoneCall.png" alt="" />
          <p>+1-202-555-0178</p>

          <div className="flex items-center ml-6 gap-2">
            <img src="/flag.png" alt="" />
            <p>English</p>
            <img src="/arrow.png" alt="" />
          </div>
        </div>
      </div>

      {/* Navbar 2 */}
      <div className="w-full bg-white px-72 h-[90px] flex items-center justify-between">
        <div className="flex items-center w-full">
          {/* Logo Nav */}
          <img className="mr-10" src="/LogoNav.png" alt="" />

          {/* Search DAN flag */}
          <div className="flex items-center border-[2px] rounded-md border-[#E4E5E8] px-6 py-2 w-full ">
            <div className="flex items-center  gap-2 w-full">
              <img src="/India.png" alt="" />
              <p>India</p>
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
          <button className="text-[#0A65CC] border-[2px] border-[#CEE0F5] px-[24px] py-[12px] rounded-md">
            Sign in
          </button>
          <button className="bg-[#0A65CC] text-[#FFFFFF] border-[2px] border-[#CEE0F5] px-[24px] py-[12px] rounded-md ml-3">
            Post a Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
