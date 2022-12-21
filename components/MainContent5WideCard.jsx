import Image from "next/image";
import CardImage from "./../public/images/widecontent-bg.png";
import LeftImageInCard from "./../public/images/100PercentSecure.png";
import BottomImage1InCard from "./../public/images/pcidss.png";
import BottomImage2InCard from "./../public/images/isocertified.png";

const MainContent5WideCard = ({ zIndex }) => {
  return (
    <div
      className={`relative w-full h-full rounded-[32px] overflow-hidden`}
      style={{ zIndex: `${zIndex}` }}
    >
      <div
        className={`w-[1268px] h-[333px] mx-auto my-auto bg-[#967edd] rounded-[32px] overflow-hidden`}
      >
        <div className={`w-[1350px] h-full -translate-x-[119px] pl-36`}>
          <Image
            src={CardImage}
            alt=""
            fill
            className={`object-cover`}
            unoptimized={true}
          />

          <div
            className={`flex items-center justify-between w-full h-full px-12`}
          >
            <div className={`relative w-[280px] ml-1`}>
              <Image
                src={LeftImageInCard}
                alt=""
                unoptimized={true}
                // fill
                // className={`object-fill`}
              />
            </div>

            <div
              className={`w-full h-full flex flex-col items-stretch justify-start top-0 pb-6 pt-12 pl-52 pr-48`}
            >
              <p
                className={`text-[40px] text-white font-bold leading-relaxed pb-4`}
              >
                Your money stays safe.
              </p>
              <p className={`text-xl text-white font-[490] py-4`}>
                PhonePe protects your money with the best-in-class security
                systems that help minimize frauds.
              </p>

              <div className={`h-full flex items-end justify-start gap-8`}>
                <Image
                  src={BottomImage1InCard}
                  unoptimized={true}
                  width={100}
                />
                <Image
                  src={BottomImage2InCard}
                  unoptimized={true}
                  width={100}
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
