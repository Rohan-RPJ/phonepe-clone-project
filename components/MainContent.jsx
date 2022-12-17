import MainContentTopCarousel from "./MainContentTopCarousel";
import MainContentTwoCards from "./MainContentTwoCards";
import dynamic from "next/dynamic";
import PhonePeVideo from "./../public/videos/phonepe-video.mp4";

const DynamicReactPlayerForVideo = dynamic(() => import("react-player"), {
  ssr: false,
});

const MainContent = () => {
  return (
    <div className={`w-full h-full`}>
      <MainContentTopCarousel />
      <MainContentTwoCards />

      <div className={`flex items-center justify-between`}>
        <div
          className={`basis-1/2 flex items-center justify-center bg-red-500`}
        >
          HI
        </div>

        <div
          className={`basis-1/2 flex items-center justify-center bg-blue-500 w-full h-full`}
        >
          <DynamicReactPlayerForVideo
            url={"http://localhost:3001/videos/phonepe-video.mp4"}
            width={"100%"}
            height={"600px"}
            controls={true}
            playing={true}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
