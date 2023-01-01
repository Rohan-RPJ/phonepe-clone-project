import CarouselImage1 from "./../public/images/main-carousel-1.jpg";
import CarouselImage2 from "./../public/images/main-carousel-2.jpg";
import CarouselImage3 from "./../public/images/main-carousel-3.jpg";
import CarouselImage4 from "./../public/images/main-carousel-4.jpg";
import MobCarouselImage1 from "./../public/images/mob-main-carousel-1.png";
import MobCarouselImage2 from "./../public/images/mob-main-carousel-2.png";
import MobCarouselImage3 from "./../public/images/mob-main-carousel-1.png";
import MobCarouselImage4 from "./../public/images/mob-main-carousel-2.png";
import CustomCarousel from "./CustomCarousel";

const MainContent1TopCarousel = ({ isMobileNav }) => {
  const carouselItems = [
    {
      imageSrc: isMobileNav ? MobCarouselImage1 : CarouselImage1,
    },
    {
      imageSrc: isMobileNav ? MobCarouselImage2 : CarouselImage2,
    },
    {
      imageSrc: isMobileNav ? MobCarouselImage2 : CarouselImage3,
    },
    {
      imageSrc: isMobileNav ? MobCarouselImage2 : CarouselImage4,
    },
  ];

  return (
    <div className={`relative w-full h-[600px] sm:h-[575px]`}>
      <CustomCarousel
        items={carouselItems}
        autoPlaySpeed={7000}
        renderDotsOutside={true}
        className={`h-[600px] sm:h-[550px]`}
      />
    </div>
  );
};

export default MainContent1TopCarousel;
