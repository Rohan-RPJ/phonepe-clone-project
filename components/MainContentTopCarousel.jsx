import CarouselImage1 from "./../public/images/main-carousel-1.jpg";
import CarouselImage2 from "./../public/images/main-carousel-2.jpg";
import CarouselImage3 from "./../public/images/main-carousel-3.jpg";
import CarouselImage4 from "./../public/images/main-carousel-4.jpg";
import CustomCarousel from "./CustomCarousel";

const MainContentTopCarousel = () => {
  const carouselItems = [
    {
      imageSrc: CarouselImage1,
    },
    {
      imageSrc: CarouselImage2,
    },
    {
      imageSrc: CarouselImage3,
    },
    {
      imageSrc: CarouselImage4,
    },
  ];

  return (
    <div className={`relative w-full h-[575px]`}>
      <CustomCarousel
        items={carouselItems}
        autoPlaySpeed={7000}
        renderDotsOutside={true}
        className={`h-[550px]`}
      />
    </div>
  );
};

export default MainContentTopCarousel;
