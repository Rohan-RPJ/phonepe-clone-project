import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import SalesImage from "./../public/images/sales-anim.png";
import BasketDesktopImage from "./../public/images/basket-desktop.png";

const MainContent7ImageTextGrid = () => {
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
    <div className={`w-full h-full`}>
      <div
        className={`w-full h-full flex flex-col sm:grid sm:grid-cols-2 py-4 pl-6 sm:px-32`}
      >
        <div
          className={`w-[94%] sm:w-full px-3 sm:px-0 row-span-1 order-last sm:order-first sm:col-span-1 relative`}
        >
          <Image src={BasketDesktopImage} unoptimized={true} alt="" priority />
          <div
            className={`invisible top-1/2 right-1/2 absolute`}
            ref={myRef}
          ></div>
          <Image
            src={SalesImage}
            unoptimized={true}
            className={`absolute top-2 sm:top-16 -right-5 sm:right-16 ${
              myRefScrolled
                ? "visible -translate-x-0"
                : "invisible -translate-x-[800px] absolute"
            } transition-transform delay-400 duration-[1000ms] p-3`}
            alt=""
            priority
          />
        </div>
        <div
          className={`w-[97%] sm:w-full h-full row-span-1 sm:col-span-1 sm:pl-32 py-6`}
        >
          <div className={`w-full flex flex-col justify-center`}>
            <p
              className={`text-[2rem] sm:text-[2.5rem] text-[#6739b7] font-medium`}
            >
              For Business
            </p>
            <p className={`text-base font-light text-[#333] py-7`}>
              Find the digital payment solution that fits your business needs
            </p>
            <div
              className={`w-full flex flex-col items-start justify-center gap-2 py-4`}
            >
              <p className={`text-[22px] font-normal font-[#323232] pt-3 pb-2`}>
                I want to:
              </p>
              {[
                {
                  p1: "Be on PhonePe Switch",
                  p2: "Get new users for your app",
                },
                {
                  p1: "Accept payments at stores",
                  p2: "Help your business go cashless",
                },
                {
                  p1: "Accept online payments",
                  p2: "Set up easy payment solutions",
                },
                {
                  p1: "Advertise on PhonePe",
                  p2: "Advertise & let customers know about you",
                },
              ].map(({ p1, p2 }, index) => {
                return (
                  <div
                    key={index}
                    className={`w-full flex flex-col items-start gap-2 cursor-pointer group`}
                  >
                    <div
                      className={`w-full flex items-center justify-between text-[#6739b7]`}
                    >
                      <p className={`text-lg font-medium`}>{p1}</p>
                      <ChevronRightIcon
                        className={`group-hover:translate-x-3 transition-transform w-[24px] sm:w-[28px]`}
                      />
                    </div>
                    <p className={`text-base text-[#333] font-light`}>{p2}</p>
                    <hr
                      className={`${
                        index === 3 && "hidden"
                      } text-black w-full my-3 border-1 border-gray-400`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent7ImageTextGrid;
