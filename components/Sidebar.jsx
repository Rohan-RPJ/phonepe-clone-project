import React from "react";
import MainContent from "./../components/MainContent";

const Sidebar = () => {
  return (
    // <div className={`relative`}>
      <div
        className={`w-full h-screen min-h-max overflow-auto scrollbar-hide absolute top-0 left-0 right-0 bottom-0 z-[999] bg-black opacity-90`}
      >
        <div className={"invisible"}>
        <MainContent />
        </div>
      </div>
    // </div>
  );
};

export default Sidebar;
