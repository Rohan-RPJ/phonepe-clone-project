import Image from "next/image";
import MainContent1TopCarousel from "./MainContent1Carousel";
import MainContent2TwoCards from "./MainContent2TwoCards";
import MainContent3TextAndVideo from "./MainContent3TextAndVideo";
import MainContent4AnimatedCards from "./MainContent4AnimatedCards";
import MainContent5WideCard from "./MainContent5WideCard";
import MainContent6ImageAnimation from "./MainContent6ImageAnimation";
import MainContent7ImageTextGrid from "./MainContent7ImageTextGrid";
import MainContent8CardsPress from "./MainContent8CardsPress";
import BGImage from "./../public/images/stats-desktop.png";

const MainContent = () => {
  return (
    <div className={`w-full h-full`}>
      <MainContent1TopCarousel />
      <MainContent2TwoCards />
      <MainContent3TextAndVideo />
      <MainContent4AnimatedCards />

      <div className={`my-1 py-16 invisible`} />

      <div className={`w-full h-full`}>
        <MainContent5WideCard zIndex={1} />
        <MainContent6ImageAnimation />
      </div>

      <div className={`my-1 py-16 invisible`} />

      <MainContent7ImageTextGrid />

      <div className={`my-1 py-7 invisible`} />

      <MainContent8CardsPress />

      <div className={`relative w-full h-[442px] bg-[#7962bd] mb-80 pt-10`}>
        <div className={`absolute bottom-0 bg-[#7962bd] w-full h-full`}>
          <Image
            src={BGImage}
            unoptimized={true}
            className={`px-32 absolute bottom-0 bg-[#7962bd]`}
            alt=""
          />
        </div>

        <div
          className={`w-full h-full flex flex-col items-center gap-4 pl-[254px] pr-[130px] pt-[28px]`}
        >
          <div className={`w-full grid grid-cols-3 text-white`}>
            {[
              {
                p1: "Trusted by",
                p2: "43 Crore",
                p3: "Registered Users",
              },
              {
                p1: "Accepted all over",
                p2: "India",
                p3: "",
              },
              {
                p1: "Accepted at",
                p2: "~3.5 Crore",
                p3: "Stores",
              },
            ].map(({ p1, p2, p3 }, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col items-start whitespace-nowrap`}
                >
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p1}
                  </p>
                  <p className={`opacity-90 text-5xl font-semibold`}>{p2}</p>
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p3}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className={`w-full flex items-center justify-between pr-48 opacity-90 text-white pt-6 pl-2`}
          >
            <p className={`opacity-80 text-[1.625rem] font-medium`}>
              Get the latest data trends and insights on PhonePe Pulse!
            </p>
            <button
              className={`border-2 border-[#4cdeff] px-8 py-1.5 rounded-full text-lg`}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
