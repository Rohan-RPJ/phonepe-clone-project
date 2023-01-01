import dynamic from "next/dynamic";

const DynamicReactPlayerForVideo = dynamic(() => import("react-player"), {
  ssr: false,
});

const MainContent3TextAndVideo = () => {
  return (
    <div
      className={`w-full h-[600px] flex items-center justify-between mt-24 mb-16 px-44`}
    >
      <div className={`w-full h-full basis-1/2 flex flex-col items-center `}>
        <div className={`basis-1/6 flex items-center w-full h-full pt-16`}>
          <span
            className={`text-[2.5rem] text-[#361374] font-semibold font-['Arial']`}
          >
            Simple, Fast & Secure
          </span>
        </div>

        <div
          className={`w-full h-full basis-5/6 flex flex-col items-start justify-between gap-4 py-8 pr-20`}
        >
          {[
            {
              title: "One app for all things money.",
              desc: "Pay bills, recharge, send money, buy gold, invest and shop at your favourite stores.",
            },
            {
              title: "Pay whenever you like, wherever you like.",
              desc: "Choose from options like UPI, the PhonePe wallet or your Debit and Credit Card.",
            },
            {
              title: "Find all your favourite apps on PhonePe Switch.",
              desc: "Book flights, order food or buy groceries. Use all your favourite apps without downloading them.",
            },
          ].map(({ title, desc }, index) => {
            return (
              <div
                key={index}
                className={`basis-1/3 h-full flex flex-col gap-5`}
              >
                <span className={`text-[1.375rem] text-[#323232] font-normal`}>
                  {title}
                </span>
                <span className={`text-sm text-[#232028] opacity-70 pr-10`}>
                  {desc}
                </span>
                <hr
                  className={`${
                    index === 2 && "hidden"
                  } text-black w-full my-2 border-1 border-gray-400`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`basis-1/2 flex items-center justify-start w-full h-full -m-4`}
      >
        <DynamicReactPlayerForVideo
          // fallback={"Loading..."}
          id={"phonepe-video"}
          url={"./videos/phonepe-video.mp4"}
          // url={`https://phonepe-clone-project.vercel.app/videos/phonepe-video.mp4`}
          // width={"600px"}
          height={"600px"}
          controls={false}
          playing={true}
          loop={true}
          config={{
            file: {
              attributes: { preload: "auto" },
            },
          }}
          muted={true}
          // className={`h-full`}
        />
      </div>
    </div>
  );
};

export default MainContent3TextAndVideo;
