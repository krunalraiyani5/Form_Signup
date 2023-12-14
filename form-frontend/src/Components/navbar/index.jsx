import React from "react";
import Logout from "../../assets/Icon/logout_icon.png";

import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);
  const removeKeyFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };

  // Example: Remove a key named "yourKey" from local storage
  const handleRemoveKey = () => {
    removeKeyFromLocalStorage("email");
  };

  let name = localStorage.getItem("name");

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[105px] flex-grow items-center justify-around gap-1 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[165px] md:flex-grow-0 md:gap-1 xl:w-[165px] xl:gap-2">
        <span>{name}</span>

        <Link to="/login">
          <img
            src={Logout}
            alt="logout"
            className="w-[30px] h-[30px] cursor-pointer grayscale hover:grayscale-0 overflow-hidden transform transition-transform hover:scale-110"
            onClick={handleRemoveKey}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
