import { useState } from "react";
import Image from "next/image";
import NTInsurance from "./../public/images/nt_insurance.png";
import PhonePeLogo from "./../public/images/logo.svg";
import CardImage1 from "./../public/images/thor.jpg";
import CardImage2 from "./../public/images/ironman.jpg";
import CardImage3 from "./../public/images/avengers.jpg";
import CardImage4 from "./../public/images/marvel-dc.jpg";
import CardImage5 from "./../public/images/justiceleague.jpg";
import CardImage6 from "./../public/images/superman.jpg";
import CardImage7 from "./../public/images/batman.jpg";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const MainContent4AnimatedCards = ({ isMobileNav }) => {
  /*

        100 110 120 130 120 110 100
        1   2   3   4   5   6   7

        maxVal = 130 = maximum height/width of card - constant
        offset = to increase/decrease size of cards using this offset - constant value
        hoveredCardIndex = index of card which is hovered - variable
        currentCardIndex = index of current card whose value (height/width) has to be calculated - variable

        value = maxVal - math.abs(hoverIndex - currentIndex)*offset;
*/

  const totalCards = 7; // should be odd
  const middleCardIndex = Math.ceil(totalCards / 2);
  const maxCardSize = isMobileNav ? 240 : 440;
  const cardSizeOffset = isMobileNav ? 15 : 35;
  const translateXOffset = isMobileNav ? 30 : 150;

  const cardsTransformArr = [];
  const dynamicCardStyleStates = [];
  const cardImageArr = [
    CardImage1,
    CardImage2,
    CardImage3,
    CardImage4,
    CardImage5,
    CardImage6,
    CardImage7,
  ];
  /*
// loop for useState does not work in deployment of vercel
  let tempZIndex = middleCardIndex - 1;
  for (let i = 0; i < totalCards; i++) {
    cardsTransformArr[i] = translateXOffset * (i - middleCardIndex + 1);

    dynamicCardStyleStates[i] = useState({
      index: i,
      width: getCardSize(i - middleCardIndex + 1),
      height: getCardSize(i - middleCardIndex + 1),
      zIndex: i < middleCardIndex ? i : tempZIndex-- - 1,
    });
  }
*/

  const getCardSize = (index) => {
    return maxCardSize - Math.abs(index) * cardSizeOffset;
  };

  cardsTransformArr[0] = translateXOffset * -3;
  dynamicCardStyleStates[0] = useState({
    index: 0,
    width: getCardSize(3),
    height: getCardSize(3),
    zIndex: 0,
  });

  cardsTransformArr[1] = translateXOffset * -2;
  dynamicCardStyleStates[1] = useState({
    index: 1,
    width: getCardSize(2),
    height: getCardSize(2),
    zIndex: 1,
  });

  cardsTransformArr[2] = translateXOffset * -1;
  dynamicCardStyleStates[2] = useState({
    index: 2,
    width: getCardSize(1),
    height: getCardSize(1),
    zIndex: 2,
  });

  cardsTransformArr[3] = translateXOffset * 0;
  dynamicCardStyleStates[3] = useState({
    index: 3,
    width: getCardSize(0),
    height: getCardSize(0),
    zIndex: 3,
  });

  cardsTransformArr[4] = translateXOffset * 1;
  dynamicCardStyleStates[4] = useState({
    index: 4,
    width: getCardSize(1),
    height: getCardSize(1),
    zIndex: 2,
  });

  cardsTransformArr[5] = translateXOffset * 2;
  dynamicCardStyleStates[5] = useState({
    index: 5,
    width: getCardSize(2),
    height: getCardSize(2),
    zIndex: 1,
  });

  cardsTransformArr[6] = translateXOffset * 3;
  dynamicCardStyleStates[6] = useState({
    index: 6,
    width: getCardSize(3),
    height: getCardSize(3),
    zIndex: 0,
  });

  const [hoveredCardIndexState, setHoveredCardIndexState] =
    useState(middleCardIndex);

  const handleCardSizes = (hoveredCardIndex) => {
    setHoveredCardIndexState(hoveredCardIndex);

    for (let i = 0; i < totalCards; i++) {
      dynamicCardStyleStates[i][1]((prevVal) => {
        return {
          ...prevVal,
          width: getCardSize(hoveredCardIndex - (i + 1)),
          height: getCardSize(hoveredCardIndex - (i + 1)),
          zIndex: totalCards - Math.abs(i + 1 - hoveredCardIndex),
        };
      });
    }
  };

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center`}>
      <div className={`w-[220px] sm:w-full h-[90px] sm:h-full`}>
        <Image
          src={NTInsurance}
          width={550}
          unoptimized={true}
          alt="No Tension Insurance"
        />
      </div>

      <Image src={PhonePeLogo} width={170} unoptimized={true} alt="PhonePe" />

      <div className={`relative w-[200px] sm:w-full h-[275px] sm:h-[500px]`}>
        {dynamicCardStyleStates.map((cardState, index) => {
          return (
            <div
              key={index}
              style={{
                transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
              }}
              className={`bg-rose-800`}
            >
              <div
                style={{
                  width: `${cardState[0].width}px`,
                  height: `${cardState[0].height}px`,
                  zIndex: `${cardState[0].zIndex}`,
                  transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
                  transform: `translate(${cardsTransformArr[index]}px, -50%)`,
                  borderRadius: "45px",
                }}
                className={`absolute left-0 right-0 mx-auto top-1/2 overflow-hidden hover:brightness-[1] ${
                  hoveredCardIndexState === index + 1
                    ? "brightness-[1]"
                    : "brightness-[0.6]"
                }`}
                onMouseEnter={() => handleCardSizes(index + 1)}
              >
                <Image
                  src={cardImageArr[index]}
                  unoptimized={true}
                  alt={"card-image"}
                  className={`object-cover hover:scale-110 transition-all duration-[400ms]`}
                  priority
                />

                {hoveredCardIndexState === index + 1 && (
                  <PlayCircleIcon
                    width={100}
                    className={`text-white opacity-80 absolute left-0 right-0 mx-auto bottom-[12%] -translate-y-1/3 cursor-pointer transition-all duration-150`}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`flex items-center justify-center mt-8 mb-6`}>
        <button
          className={`border border-[#533093] text-base text-[#371f7b] hover:text-white hover:bg-[#371f7b] font-semibold px-14 sm:px-20 py-1.5 rounded-3xl`}
        >
          Watch all Videos
        </button>
      </div>

      <div
        className={`flex items-center justify-center px-[40px] sm:px-[320px]`}
      >
        <p
          className={`px-6 text-black text-center text-base leading-8 font-[sans-serif] font-normal opacity-80`}
        >
          Live life worry-free! PhonePe fulfills all your insurance needs with a
          wide variety of insurance choices that can be bought instantly &
          easily with no annoying calls and disturbance! Protect your life, car,
          two-wheeler and much more in a few simple clicks. Make a smart choice
          today and live tension-free tomorrow!
        </p>
      </div>
    </div>
  );
};

export default MainContent4AnimatedCards;
