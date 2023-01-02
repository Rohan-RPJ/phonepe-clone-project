import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

// https://www.npmjs.com/package/react-multi-carousel

const CustomCarousel = ({
  items,
  autoPlaySpeed,
  renderDotsOutside,
  className,
  deviceType,
  minimumTouchDrag,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      // partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
      // slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      // slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <button
        className={`${
          active ? "active bg-gigas" : "inactive bg-[#ddd]"
        } h-[16px] w-[16px] rounded-full mx-2 outline-none hover:bg-gigas`}
        onClick={() => onClick()}
      >
        {/* {React.Children.toArray(carouselItems)[index]} */}
      </button>
    );
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      minimumTouchDrag={minimumTouchDrag}
      showDots={true}
      customDot={<CustomDot />}
      renderDotsOutside={renderDotsOutside} // boolean value
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={deviceType !== "mobile" ? true : false}
      autoPlaySpeed={autoPlaySpeed}
      keyBoardControl={true}
      customTransition="all 500ms"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      // partialVisbile={true}
      // additionalTransfrom={-20 * items?.length}
      className={`${!items && "hidden"}`}
    >
      {items?.map(({ imageSrc }, index) => {
        return (
          <div className={`relative w-full ${className}`} key={index}>
            <Image
              src={imageSrc}
              alt="..."
              unoptimized={true}
              fill
              object-fit="contain"
              // sizes="(max-width: 768px) 100vw,
              // (max-width: 1200px) 50vw,
              // 33vw"
              draggable={false}
              // className={`h-full w-full`}
            />
          </div>
        );
      })}
      {/* <div className=""></div> */}
    </Carousel>
  );
};

export default CustomCarousel;
