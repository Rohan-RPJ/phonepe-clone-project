import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const CardTextWithImage = ({ title, desc, imgSrc, imgStyle }) => {
  return (
    <div
      className={`flex items-center justify-between w-[565px] h-full rounded-xl overflow-hidden border border-gray-400 cursor-pointer transition delay-75 hover:border-none hover:shadow-2xl`}
    >
      <div
        className={`w-[60%] h-full flex flex-col items-start justify-center pl-8 pt-6 space-y-6`}
      >
        <span className={`font-bold text-3xl leading-snug text-[#361968]`}>
          {title}
        </span>
        <span className={`font-medium pr-16 leading-loose`}>{desc}</span>

        <ArrowLongRightIcon width={45} className={`text-[#6739B7]`} />
      </div>

      <div
        className={` h-full w-[50%] flex items-center justify-center rounded-l-full ${imgStyle}`}
      >
        <Image src={imgSrc} width={200} alt="" />
      </div>
    </div>
  );
};

export default CardTextWithImage;
