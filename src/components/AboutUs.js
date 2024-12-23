import React from "react";

export const AboutUs= ()=> {
  return (
    <div
      className="xl:py-20 sm:py-10 py-5 bg-gray-800"
      id="about"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="xl:flex xl:flex-row xl:mx-40 md:mx-20 mx-10 flex flex-col items-center">
        <div className="text-5xl sm:text-6xl font-bold xl:w-2/5 flex flex-col items-center xl:pb-20 pb-10 text-white">
          <div className="bg-gray-400 h-20 w-1 xl:mb-4 mb-8"></div>ABOUT US
        </div>
        <div className="bg-gray-300 xl:mx-10 xl:w-3/5 rounded-3xl">
          <p className="xl:m-20 mx-5 my-5 text-center text-lg xl:text-base">
          E-Cell Shree L.R. Tiwari College of Engineering is a dynamic platform that empowers students with an entrepreneurial mindset. We provide the resources, mentorship, and opportunities needed to turn innovative ideas into successful ventures. Through workshops, bootcamps, and networking events, we nurture creativity, resilience, and business skills. Join us and be part of a thriving community of future entrepreneurs ready to make an impact!
          </p>
        </div>
      </div>
    </div>
  );
}
