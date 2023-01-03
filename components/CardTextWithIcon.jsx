import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const CardTextWithIcon = ({ title, desc, Icon, IconStyle, IconBg }) => {
  return (
    <div
      className={`relative flex items-center justify-between w-full sm:w-[565px] h-full rounded-xl overflow-hidden border border-gray-400 cursor-pointer transition delay-75 hover:border-none hover:shadow-2xl`}
    >
      <div
        className={`absolute z-[10] w-[60%] h-full flex flex-col items-start justify-center pl-5 sm:pl-8 pr-28 sm:pr-0 pt-6 space-y-5 sm:space-y-6`}
      >
        <div
          className={`flex flex-col gap-1 font-medium sm:font-bold text-lg sm:text-3xl leading-snug text-[#361968] whitespace-nowrap`}
        >
          <span>{title[0]}</span>
          <span>{title[1]}</span>
        </div>

        <div
          className={`flex flex-col gap-1 font-normal sm:font-medium text-xs sm:text-base sm:pr-16 whitespace-nowrap`}
        >
          <span>{desc[0]}</span>
          <span>{desc[1]}</span>
        </div>

        <ArrowLongRightIcon
          width={45}
          className={`text-[#6739B7] -ml-2 sm:ml-0 pb-2 sm:pb-0`}
        />
      </div>

      <div
        className={`absolute right-0 h-full w-[170px] flex items-center justify-end rounded-l-full ${IconBg}`}
      >
        <Icon className={`${IconStyle} w-[130px] sm:w-[200px]`} />
        {/* <Image src={imgSrc} width={200} alt="" /> */}
      </div>
    </div>
  );
};

export default CardTextWithIcon;
