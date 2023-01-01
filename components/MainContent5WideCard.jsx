import Image from "next/image";
import CardImage from "./../public/images/widecontent-bg.png";
import MobCardImage from "./../public/images/mob-widecontent-bg.png";
import LeftImageInCard from "./../public/images/100PercentSecure.png";
import BottomImage1InCard from "./../public/images/pcidss.png";
import BottomImage2InCard from "./../public/images/isocertified.png";

const MainContent5WideCard = ({ zIndex, isMobileNav }) => {
  return (
    <div
      className={`relative w-[90%] sm:w-full h-[420px] sm:h-full rounded-[32px] overflow-hidden`}
      style={{ zIndex: `${zIndex}` }}
    >
      <div
        className={`sm:w-[1268px] h-[333px] mx-auto my-auto bg-[#967edd] rounded-[32px] overflow-hidden`}
      >
        <div className={`sm:w-[1350px] h-full -translate-x-[119px] pl-36`}>
          <Image
            src={isMobileNav ? MobCardImage : CardImage}
            alt=""
            fill
            className={`object-cover`}
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
              className={`w-full h-full flex flex-col items-center justify-center top-0 pb-6 pt-12 sm:pl-52 sm:pr-48`}
            >
              <p
                className={`text-[28px] sm:text-[40px] text-white font-bold leading-relaxed pb-4`}
              >
                Your money stays safe.
              </p>
              <p
                className={`text-[14px] sm:text-xl text-white font-[490] py-4`}
              >
                PhonePe protects your money with the best-in-class security
                systems that help minimize frauds.
              </p>

              <div className={`h-full flex items-end justify-start gap-8`}>
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
