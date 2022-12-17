import React from "react";
import CarouselImage3 from "./../public/images/main-carousel-3.jpg";
import CarouselImage4 from "./../public/images/main-carousel-4.jpg";
import TwoCards from "./TwoCards";

const MainContentTwoCards = () => {
  return (
    <div
      className={`flex items-center justify-center w-full h-[300px] space-x-4 my-[76px]`}
    >
      {[
        {
          title: "Insurance made easy",
          desc: "Secure your life, health, vehicles & more!",
          imgStyle: "bg-sky-50",
          imgSrc: CarouselImage3,
        },
        {
          title: "The best in Mutual Fund Investments",
          desc: "Invest your wealth and achieve your financial goals!",
          imgStyle: "bg-red-50",
          imgSrc: CarouselImage4,
        },
      ].map(({ title, desc, imgStyle, imgSrc }, index) => {
        return (
          <TwoCards
            key={index}
            title={title}
            desc={desc}
            imgSrc={imgSrc}
            imgStyle={imgStyle}
          />
        );
      })}
    </div>
  );
};

export default MainContentTwoCards;
