import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ThirdPartyPartnerLogos from "./../public/images/third-party-partner-logos.png";
import MobThirdPartyPartnerLogos from "./../public/images/mob-third-party-partner-logos.png";

const MainContent6ImageAnimation = ({ isMobileNav }) => {
  const myRef = useRef();
  const [myRefScrolled, setMyRefScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMyRefScrolled(true);
        } else {
          // setMyRefScrolled(false)
        }
      });
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <div
      className={`w-full h-full relative bg-gradient-to-b from-[#ddd8fa] to-[#ddd8fa] pt-[350px] -translate-y-[140px] mb-[410px] sm:mb-[350px] z-0`}
    >
      <div
        className={`w-full h-full absolute bg-gradient-to-b from-[#ddd8fa] to-[#fff]`}
      >
        <div
          className={`w-full h-full flex flex-col items-center justify-center relative`}
        >
          <div
            className={`text-[2rem] sm:text-[2.625rem] text-[#361968] font-bold flex flex-col items-center`}
          >
            <h2>At ~3.5 Crore</h2>
            <h2 className="text-center">stores, apps, websites & more</h2>
          </div>

          <GradientButton text={"Partner with us"} />

          <div
            className={`w-full h-[600px] sm:h-full px-16 sm:px-32 py-8 sm:py-4 -translate-x-[1000px] sm:-translate-x-[1500px] ${
              myRefScrolled && "translate-x-0 sm:translate-x-0"
            } transition-transform duration-[1000ms]`}
          >
            <Image
              src={
                isMobileNav ? MobThirdPartyPartnerLogos : ThirdPartyPartnerLogos
              }
              unoptimized={true}
              alt=""
              priority
            />
          </div>
          <div
            className={`invisible absolute top-[75%] sm:top-[80%] right-1/2`}
            ref={myRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent6ImageAnimation;
