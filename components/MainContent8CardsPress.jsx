import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import GradientButton from "./GradientButton";

const MainContent8CardsPress = () => {
  return (
    <div
      className={`w-full flex flex-col space-y-14 items-center justify-center px-6 sm:pl-[145px] sm:pr-[131px] pt-[62px] sm:pt-[122px] pb-[94px] bg-[#f6f2ff]`}
    >
      <div className={`flex flex-col gap-2 items-center justify-center pr-3`}>
        <p className={`text-[2.5rem] text-[#361968] font-semibold`}>
          In the Press
        </p>
        <p className={`text-sm font-[400] sm:font-[500]`}>
          Read what the press has to say about us.
        </p>
      </div>

      <div
        className={`w-full flex flex-col sm:flex-row gap-12 items-center justify-center`}
      >
        {[
          {
            date: "10 November",
            title:
              "PhonePe enables UPI activation with Aadhaar: What this means for users and how to use it",
            desc: "PhonePe has announced that it has enabled UPI activation using Aadhaar-based OTP authentication...",
            author: "The Times of India",
            bottomLineColor: "#23c4da",
          },
          {
            date: "03 November",
            title:
              "PhonePe deploys over 10 lakh SmartSpeakers within 3 months of launch",
            desc: "PhonePe announced on Thursday that it has deployed over 10 lakh SmartSpeakers to merchant partners...",
            author: "CNBC TV18",
            bottomLineColor: "#6739b7",
          },
          {
            date: "20 October",
            title:
              "PhonePe launches green data centre with Dell Technologies and NTT",
            desc: "Dell Technologies and NTT have built a green data centre for fintech major PhonePe using liquid...",
            author: "The Economic Times",
            bottomLineColor: "#fa6f96",
          },
        ].map((card, index) => {
          return (
            <div
              key={index}
              className={`w-full sm:w-1/3 h-[322px] sm:h-[400px] flex flex-col items-start justify-between text-gray-600 pl-6 pt-9 pr-5 bg-white border border-gray-300 rounded-xl hover:shadow-2xl transition-shadow cursor-pointer group`}
            >
              <p className={`text-base font-light`}>{card.date}</p>
              <p className={`text-[1.375rem] font-medium pb-8 pr-[19px]`}>
                {card.title}
              </p>
              <p className={`hidden sm:block text-[15px] leading-6 font-light`}>
                {card.desc}
              </p>
              <div className={`w-full flex items-center justify-between pt-8`}>
                <p className={`text-lg text-black font-normal`}>
                  {card.author}
                </p>
                <ArrowLongRightIcon
                  className={`text-[#6739B7] sm:invisible sm:group-hover:visible w-[30px] sm:w-[45px]`}
                />
              </div>
              <div className={`w-full px-4`}>
                <div
                  className={`w-full h-1`}
                  style={{ backgroundColor: `${card.bottomLineColor}` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <GradientButton text={"See All News"} />
    </div>
  );
};

export default MainContent8CardsPress;
