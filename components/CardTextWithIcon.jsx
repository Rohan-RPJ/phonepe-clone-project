import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const CardTextWithIcon = ({ title, desc, Icon, IconStyle, IconBg }) => {
  return (
    <div
      className={`flex items-center justify-between w-full sm:w-[565px] h-full rounded-xl overflow-hidden border border-gray-400 cursor-pointer transition delay-75 hover:border-none hover:shadow-2xl`}
    >
      <div
        className={`w-[60%] h-full flex flex-col items-start justify-center pl-5 sm:pl-8 pr-28 sm:pr-0 pt-6 space-y-5 sm:space-y-6`}
      >
        <span
          className={`font-medium sm:font-bold text-lg sm:text-3xl leading-snug text-[#361968]`}
        >
          {title}
        </span>
        <span
          className={`font-normal sm:font-medium text-xs sm:text-base sm:pr-16 leading-loose`}
        >
          {desc}
        </span>

        <ArrowLongRightIcon width={45} className={`text-[#6739B7] -ml-2 sm:ml-0 pb-2 sm:pb-0`} />
      </div>

      <div
        className={` h-full w-[35%] sm:w-[50%] flex items-center justify-end rounded-l-full ${IconBg}`}
      >
        <Icon className={`${IconStyle} w-[130px] sm:w-[200px]`} />
        {/* <Image src={imgSrc} width={200} alt="" /> */}
      </div>
    </div>
  );
};

export default CardTextWithIcon;
