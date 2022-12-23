import { CurrencyDollarIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import CardTextWithIcon from "./CardTextWithIcon";

const MainContent2TwoCards = () => {
  return (
    <div
      className={`flex items-center justify-center w-full h-[300px] space-x-4 my-[76px]`}
    >
      {[
        {
          title: "Insurance made easy",
          desc: "Secure your life, health, vehicles & more!",
          Icon: ShieldCheckIcon,
          IconStyle: "text-[#361968]",
          IconBg: `bg-sky-50`,
        },
        {
          title: "The best in Mutual Fund Investments",
          desc: "Invest your wealth and achieve your financial goals!",
          Icon: CurrencyDollarIcon,
          IconStyle: "text-rose-500",
          IconBg: `bg-red-50`,
        },
      ].map(({ title, desc, Icon, IconStyle, IconBg }, index) => {
        return (
          <CardTextWithIcon
            key={index}
            title={title}
            desc={desc}
            Icon={Icon}
            IconStyle={IconStyle}
            IconBg={IconBg}
          />
        );
      })}
    </div>
  );
};

export default MainContent2TwoCards;
