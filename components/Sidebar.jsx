import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Sidebar = ({ scrolled, mobileNav }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const showSideBarHandler = () => {
    setShowSideBar((prevVal) => !prevVal);
  };

  const removeSideBarOnClickHandler = () => {
    if (showSideBar) setShowSideBar(false);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 bg-white w-full min-w-max h-full`}>
        <Header
          scrolled={scrolled}
          mobileNav={mobileNav}
          showSideBarHandler={showSideBarHandler}
        />
      </div>

      {/* Dark Overlay Start */}
      <div
        className={`opacity-0 ${
          !showSideBar ? "-z-[100000]" : "!opacity-60"
        } fixed top-0 left-0 w-full h-[100vh] z-[100000] transition-all duration-[500ms]`}
        onClick={() => removeSideBarOnClickHandler()}
      >
        <div
          className={`w-full h-screen min-h-max overflow-auto scrollbar-hide absolute top-0 left-0 right-0 bottom-0 z-[999] bg-black`}
        ></div>
      </div>
      {/* Dark Overlay End */}

      <div
        className={`w-[54%] h-[100vh] ${
          showSideBar ? "translate-x-0" : "translate-x-[500px]"
        } fixed top-0 right-0 bg-white transition-all duration-[500ms] z-[100001] py-12`}
      >
        <div
          className={`w-full flex items-center justify-end pr-1.5 pt-0.5`}
          onClick={() => removeSideBarOnClickHandler()}
        >
          <XMarkIcon width={30} className={`text-black`} />
        </div>

        <div className={`w-full flex flex-col space-y-5 py-5`}>
          {[
            "Home",
            "Business Solutions",
            "Press",
            "Careers",
            "About Us",
            "Blog",
            "Contact Us",
            "Trust & Safety",
          ].map((text, index) => {
            return (
              <div
                key={index}
                className={`w-full flex items-center justify-start space-x-8 group`}
              >
                <span
                  className={`${index === 0 && "bg-[#6739B7]"} w-4 h-6`}
                ></span>
                <span
                  className={`text-base font-[500] text-black group-hover:text-[#6739b7]`}
                >
                  {text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Sidebar.propTypes = {
  scrolled: PropTypes.bool,
  mobileNav: PropTypes.bool,
};

export default Sidebar;
