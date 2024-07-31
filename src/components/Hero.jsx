import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          {/* Search Column */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Position"
                className="border rounded-l-full py-2 px-4 w-64"
              />
              <input
                type="text"
                placeholder="Enter the City"
                className="border-t border-b border-r rounded-r-full py-2 px-4 w-64"
              />
              <button className="bg--500 text-white py-2 px-6 rounded-full ml-4 border border-white">
                Search
              </button>
            </div>
            <button className="bg--500 text-white py-2 px-6 rounded-full mt-4 border border-white">
              Sign Up and Get amazing quality leads!!!!
            </button>
          </div>

          <h1 className="h1 mb-6">
            Empowering Businesses&nbsp; with {` `}
            <span className="inline-block relative">
              Unlimited Leads!!{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            At Exel Leads, we are passionate about empowering businesses to
            thrive by providing unparalleled lead generation solutions. With a
            steadfast commitment to excellence and innovation, we specialize in
            finding unlimited business leads that drive growth and success.
          </p>
          <Button href="/pricing" white>
            Get Quality leads
          </Button>

          {/* Create Account Div */}
          <div className="create-account-container bg-black shadow-lg rounded-lg p-8 mt-8">
            <p className="text-lg font-semibold">Create an account</p>
            <button className="bg-purple text-white border border-gray-300 py-2 px-6 rounded-full">
              Sign Up Now
            </button>
            <p className="text-gray-600 mt-4">Empowering Businesses with Quality Leads!!!</p>
            <div className="my-4 text-gray-600">or</div>
            <button className="bg-purple text-white border border-gray-300 py-2 px-6 rounded-full">
              See Our Pricing
            </button>
          </div>
          <div className="stats-container text-center mt-8">
  <div className="flex justify-center space-x-12">
    <div className="text-center">
      <p className="text-3xl font-bold">144K</p>
      <p className="text-gray-600">DOWNLOADS</p>
    </div>
    <div className="text-center">
      <p className="text-3xl font-bold">48.3K</p>
      <p className="text-gray-600">USERS</p>
    </div>
    <div className="text-center">
      <p className="text-3xl font-bold">12.9K</p>
      <p className="text-gray-600">SUBSCRIBERS</p>
    </div>
    <div className="text-center">
      <p className="text-3xl font-bold">24.5K</p>
      <p className="text-gray-600">COOKIES</p>
    </div>
  </div>
</div>

        </div>
        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
