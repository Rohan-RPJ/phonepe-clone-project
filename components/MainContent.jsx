import MainContent1TopCarousel from "./MainContent1Carousel";
import MainContent2TwoCards from "./MainContent2TwoCards";
import MainContent3TextAndVideo from "./MainContent3TextAndVideo";
import MainContent4AnimatedCards from "./MainContent4AnimatedCards";
import MainContent5WideCard from "./MainContent5WideCard";
import MainContent6ImageAnimation from "./MainContent6ImageAnimation";
import MainContent7ImageTextGrid from "./MainContent7ImageTextGrid";
import MainContent8CardsPress from "./MainContent8CardsPress";
import CustomSpacing from "./CustomSpacing";

const MainContent = ({ isMobileNav }) => {
  return (
    <div className={`w-full h-full max-w-[1920px] min-w-[1268px]`}>
      <MainContent1TopCarousel isMobileNav={isMobileNav} />
      <MainContent2TwoCards />
      <MainContent3TextAndVideo />
      <MainContent4AnimatedCards />

      <CustomSpacing />

      <div className={`w-full h-full`}>
        <MainContent5WideCard zIndex={1} />
        <MainContent6ImageAnimation />
      </div>

      <CustomSpacing />

      <MainContent7ImageTextGrid />

      <CustomSpacing paddingY={28} />

      <MainContent8CardsPress />
    </div>
  );
};

export default MainContent;
