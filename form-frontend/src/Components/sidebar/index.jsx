/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "../../routes";
import analah_insurance_logo from "../../assets/Icon/insurance_white.png";

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col  pb-10 shadow-2xl shadow-white/5 transition-all   md:!z-50 lg:!z-50 xl:!z-0 border-r border-gray-500 bg-[#3970de]   ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden "
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className="flex items-center p-2 justify-center  mt-[50px] ">
  
        <img
            src={analah_insurance_logo}
            className={`cursor-pointer duration-500 w-[180px] h-[50px]  ${
              open && "rotate-[360deg]"
            }`}
          />
     
          
        
        </div>

      {/* <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
  
          <img src={analah_insurance_logo} alt="analah_insurance_logo" className="w-[180px] h-[50px]" />
        </div>
      </div> */}
      <div class="mt-[58px] h-px bg-gray-300 dark:bg-white/30 ">
        <ul className="mb-auto p-10 "> 
          <Links routes={routes} />
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;