import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const GradientButton = ({ text }) => {
  return (
    <button
      className={`group flex items-center justify-between gap-4 px-14 py-3 m-8 rounded-full text-white bg-[#07c3de] hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-200`}
    >
      <span className={`text-base font-medium`}>{text}</span>
      <ArrowLongRightIcon
        width={40}
        className={`group-hover:translate-x-3 transition-transform`}
      />
    </button>
  );
};

export default GradientButton;
