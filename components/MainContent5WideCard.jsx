import Image from "next/image";
import CardImage from "./../public/images/widecontent-bg.png";
import MobCardImage from "./../public/images/mob-widecontent-bg.png";
import LeftImageInCard from "./../public/images/100PercentSecure.png";
import BottomImage1InCard from "./../public/images/pcidss.png";
import BottomImage2InCard from "./../public/images/isocertified.png";

const MainContent5WideCard = ({ zIndex, isMobileNav }) => {
  return (
    <div
      className={`relative w-[90%] sm:w-full h-[420px] mx-auto my-auto sm:h-full rounded-[32px] overflow-hidden shadow-[0px_0px_25px_6px_rgb(0,0,0,0.25)] shadow-[#967edd] sm:shadow-none`}
      style={{ zIndex: `${zIndex}` }}
    >
      <div
        className={`sm:w-[1268px] sm:h-[333px] mx-auto my-auto bg-[#967edd] rounded-[32px] overflow-hidden`}
      >
        <div
          className={`sm:w-[1350px] h-full sm:-translate-x-[119px] pb-36 sm:pb-0 sm:pl-36 pt-4 sm:pt-0 relative`}
        >
          <Image
            src={isMobileNav ? MobCardImage : CardImage}
            alt=""
            fill
            className={`-translate-x-[5%] translate-y-[5%] sm:translate-x-0 sm:translate-y-0 object-fill sm:object-cover`}
            unoptimized={true}
          />

          <div
            className={`flex flex-col sm:flex-row items-center justify-between w-full h-full px-12`}
          >
            <div className={`relative w-[90px] sm:w-[280px] ml-1`}>
              <Image
                src={LeftImageInCard}
                alt=""
                unoptimized={true}
                // fill
                // className={`object-fill`}
              />
            </div>

            <div
              className={`w-full h-full flex flex-col items-center justify-center top-0 pb-6 pt-4 sm:pt-12 sm:pl-52 sm:pr-48`}
            >
              <p
                className={`w-full text-center sm:text-left text-[28px] sm:text-[40px] text-white font-bold leading-relaxed sm:pb-4`}
              >
                Your money stays safe.
              </p>
              <p
                className={`w-full leading-relaxed text-center sm:text-left text-[14px] sm:text-xl text-white font-[490] py-4`}
              >
                PhonePe protects your money with the best-in-class security
                systems that help minimize frauds.
              </p>

              <div
                className={`h-full w-full flex items-end justify-center sm:justify-start gap-16 sm:gap-8 sm:px-0 py-8 sm:py-0`}
              >
                <Image
                  src={BottomImage1InCard}
                  unoptimized={true}
                  width={100}
                  alt=""
                />
                <Image
                  src={BottomImage2InCard}
                  unoptimized={true}
                  width={100}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent5WideCard;
