import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import PhonePeLogo from "./../public/images/logo.svg";
import SisaCertifiedImage from "./../public/images/sisa.png";
import LinkedInLogo from "./../public/images/linkedin-logo.svg";
import TwitterLogo from "./../public/images/twitter-logo.svg";
import FacebookLogo from "./../public/images/facebook-logo.svg";
import BGImage from "./../public/images/stats-desktop.png";

const Footer = () => {
  return (
    <>
      <div className={`relative w-full h-[442px] bg-[#7962bd] pt-10`}>
        <div className={`absolute bottom-0 bg-[#7962bd] w-full h-full`}>
          <Image
            src={BGImage}
            unoptimized={true}
            className={`px-32 absolute bottom-0 bg-[#7962bd]`}
            alt=""
          />
        </div>
        <div
          className={`w-full h-full flex flex-col items-center gap-4 pl-[254px] pr-[130px] pt-[28px]`}
        >
          <div className={`w-full grid grid-cols-3 text-white`}>
            {[
              {
                p1: "Trusted by",
                p2: "43 Crore",
                p3: "Registered Users",
              },
              {
                p1: "Accepted all over",
                p2: "India",
                p3: "",
              },
              {
                p1: "Accepted at",
                p2: "~3.5 Crore",
                p3: "Stores",
              },
            ].map(({ p1, p2, p3 }, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col items-start whitespace-nowrap`}
                >
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p1}
                  </p>
                  <p className={`opacity-90 text-5xl font-semibold`}>{p2}</p>
                  <p className={`text-xl opacity-80 font-light tracking-wider`}>
                    {p3}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className={`w-full flex items-center justify-between pr-48 opacity-90 text-white pt-6 pl-2`}
          >
            <p className={`opacity-80 text-[1.625rem] font-medium`}>
              Get the latest data trends and insights on PhonePe Pulse!
            </p>
            <button
              className={`border-2 border-[#4cdeff] px-8 py-1.5 rounded-full text-lg`}
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className={`w-full h-full pt-20 pb-2 pl-40 pr-32`}>
        <div className={`w-full h-full flex items-start justify-start pl-2`}>
          <div className={`h-full flex flex-col items-start justify-start`}>
            <Image src={PhonePeLogo} unoptimized={true} width={160} alt="" />
          </div>

          <div className={`w-full flex items-start justify-evenly px-20 pt-3`}>
            {[
              {
                p1: "General",
                p2: "About Us",
                p3: "Business Solutions",
                p4: "Report Vulnerability",
                p5: "Merchant Partners",
                p6: "",
                p7: "© 2022, All rights reserved",
              },
              {
                p1: "Connect",
                p2: "Careers",
                p3: "Contact us",
                p4: "Ethics",
                p5: "Blog",
                p6: "",
                p7: "",
              },
              {
                p1: "Legal",
                p2: "Terms & Conditions",
                p3: "Privacy Policy",
                p4: "Grievance Policy",
                p5: "How to Pay",
                p6: "E-Waste Policy",
                p7: "",
              },
            ].map((data, index) => {
              return (
                <div
                  key={index}
                  className={`w-full flex flex-col items-start gap-3.5 text-sm text-black font-light pl-2 ${
                    (index === 1 && "pl-16") || (index == 2 && "pl-0")
                  }`}
                >
                  <p className={`font-bold pb-4`}>{data.p1}</p>
                  <p className={``}>{data.p2}</p>
                  <p className={``}>{data.p3}</p>
                  <p className={`flex items-center gap-1`}>
                    {data.p4}{" "}
                    {index === 1 && (
                      <ArrowTopRightOnSquareIcon
                        width={14}
                        className={`opacity-80`}
                      />
                    )}
                  </p>
                  <p className={``}>{data.p5}</p>
                  <p className={``}>{data.p6}</p>
                  <p className={``}>{data.p7}</p>
                </div>
              );
            })}

            <div className={`w-full flex flex-col items-start gap-4 pr-14`}>
              <p className={`pb-2 font-bold text-sm`}>Certification</p>
              <div className={`w-full flex items-end justify-start gap-1`}>
                <Image
                  src={SisaCertifiedImage}
                  unoptimized={true}
                  width={112}
                  alt=""
                />

                <ArrowTopRightOnSquareIcon
                  width={14}
                  className={`pb-2 text-black opacity-80`}
                />
              </div>
            </div>

            <div className={`flex flex-col items-start gap-6`}>
              <p className={`text-lg font-bold`}>See All Apps</p>

              <button
                className={`uppercase whitespace-nowrap text-base font-semibold py-2 px-3 border-[3px] border-black rounded-2xl`}
              >
                Download Now
              </button>

              <div className={`py-8 w-full flex items-center justify-between`}>
                {[LinkedInLogo, TwitterLogo, FacebookLogo].map(
                  (Logo, index) => {
                    return (
                      <Image key={index} src={Logo} unoptimized={true} alt="" />
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
