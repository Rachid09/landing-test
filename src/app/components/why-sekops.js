/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const WhySekops = () => {
  return (
    // max-[1142px]:mt-[140px]
    <section
      id="why-sekops"
      className=" pb-10 relative z-50 base:px-10 px-6  md:px-[70px] xl:flex justify-between   pt-[52px] xl:pt-0 grid md:grid-cols-why-sekops grid-cols-why-sekops-sm"
    >
      <div
        id="why-sekops-bg"
        className="hidden lg:block lg:relative xl:top-[-80px] flex-1"
      >
        <div className="absolute z-10 top-0 left-0">
          <Image
            src="/assets/why-sekops-circle.svg"
            alt="why-sekops"
            width={862}
            height={600}
          ></Image>
        </div>
        <Image
          className="relative z-50"
          src="/assets/why-sekops-bg.svg"
          alt="why-sekops-bg"
          width={600}
          height={601}
        ></Image>
      </div>
      <div
        id="why-sekops-bg"
        className="lg:hidden relative lg:top-[-100px] top-0 flex-1 justify-center flex"
      >
        <div className="absolute z-10 top-0 left-[50%] translate-x-[-50%]">
          <Image
            src="/assets/why-sekops-circle-1x.svg"
            alt="why-sekops"
            width={400}
            height={400}
            className="hidden"
          ></Image>
        </div>
        <Image
          className="relative z-50"
          src="/assets/convoyer.svg"
          alt="convoyer"
          width={401}
          height={400}
        ></Image>
      </div>

      <div className="flex flex-col justify-center xl:justify-start flex-1 lg:max-w-none sm:w-full sm:max-w-none max-w-[500px]">
        <h2 className="base:text-[50px] text-[33px] font-medium leading-[48px] capitalize mb-8 text-black-primary">
          Why Choose SekOps?
        </h2>
        <ul className="flex flex-col max-w-[600px]">
          <li className="mb-5">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center sm:text-[18px] text-base">
              <Image
                src="/assets/icons/star.svg"
                alt="star"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Instant Value
            </h4>
            <p className="text-gray-primary leading-7">
              With minimal setup time, immediately witness the high return of
              investment.
            </p>
          </li>
          <li className="mb-5">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center sm:text-[18px] text-base">
              <Image
                src="/assets/icons/settings.svg"
                alt="star"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Ease of integration
            </h4>
            <p className="text-gray-primary leading-7">
              SekOps seamlessly integrates with your projects, without code
              changes or workflow disruptions.
            </p>
          </li>
          <li className="mb-5 ">
            <h4 className="text-black-primary  font-semibold capitalize leading-7 flex items-center sm:text-[18px] text-base">
              <Image
                src="/assets/icons/union.svg"
                alt="union"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Pull based security scanning
            </h4>
            <p className="text-gray-primary leading-7">
              Detect and address vulnerabilities by proactively scanning
              projects, ensuring you're always a step ahead in security.
            </p>
          </li>
          <li className="mb-5">
            <h4 className="text-black-primary sm:text-[18px] text-base font-semibold capitalize leading-7 flex items-center">
              <Image
                src="/assets/icons/heart.svg"
                alt="heart"
                className="mr-2"
                width={16}
                height={16}
              ></Image>
              Built for Everyone & Cost-Effective
            </h4>
            <p className="text-gray-primary leading-7">
              From startups to enterprises, our platform is designed to be
              affordable and accessible for businesses of every size. Enjoy the
              high ROI with SekOps!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
