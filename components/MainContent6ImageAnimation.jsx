import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GradientButton from "./GradientButton";
import ThirdPartyPartnerLogos from "./../public/images/third-party-partner-logos.png";

const MainContent6ImageAnimation = () => {
  const myRef = useRef();
  const [myRefScrolled, setMyRefScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("????");
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
      className={`w-full h-full relative bg-gradient-to-b from-[#ddd8fa] to-[#ddd8fa] pt-[350px] -translate-y-[140px] mb-[350px] z-0`}
    >
      <div
        className={`w-full h-full absolute bg-gradient-to-b from-[#ddd8fa] to-[#fff]`}
      >
        <div
          className={`w-full h-full flex flex-col items-center justify-center`}
        >
          <span
            className={`text-[2.625rem] text-[#361968] font-bold flex flex-col items-center justify-center`}
          >
            <h2>At ~3.5 Crore</h2>
            <h2>stores, apps, websites & more</h2>
          </span>

          <GradientButton text={"Partner with us"} />

          <div
            className={`w-full h-full px-32 py-4 -translate-x-[1500px] ${
              myRefScrolled && "translate-x-0"
            } transition-transform duration-[1000ms]`}
            ref={myRef}
          >
            <Image src={ThirdPartyPartnerLogos} unoptimized={true} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent6ImageAnimation;
