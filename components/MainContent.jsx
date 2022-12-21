import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import GradientButton from "./GradientButton";
import MainContent1TopCarousel from "./MainContent1Carousel";
import MainContent2TwoCards from "./MainContent2TwoCards";
import MainContent3TextAndVideo from "./MainContent3TextAndVideo";
import MainContent4AnimatedCards from "./MainContent4AnimatedCards";
import MainContent5WideCard from "./MainContent5WideCard";
import ThirdPartyPartnerLogos from "./../public/images/third-party-partner-logos.png";

const MainContent = () => {
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
    <div className={`w-full h-full`}>
      <MainContent1TopCarousel />
      <MainContent2TwoCards />
      <MainContent3TextAndVideo />
      <MainContent4AnimatedCards />

      <div className={`my-1 py-16 invisible`} />

      <div className={`w-full h-full relative`}>
        <MainContent5WideCard zIndex={1} />

        <div
          className={`absolute z-0 -translate-y-[140px] w-full h-[800px] bg-gradient-to-b from-[#ddd8fa] to-[#fff] pt-[260px]`}
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
              <Image src={ThirdPartyPartnerLogos} unoptimized={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
