import React from "react";
import Heading from "./Heading"; // Assuming Heading component is in the same directory

const VideoSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Exelleads"
        />
        <Heading
        className="md:max-w-md lg:max-w-2xl"
        title="How we work"
      />
      </div>
      <div className="mx-auto flex justify-center">
        <div className="relative transition-shadow duration-300 hover:shadow-xl w-[90rem]">
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/3kmVahyGres?si=1ohg55E2ChAs_b__&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
