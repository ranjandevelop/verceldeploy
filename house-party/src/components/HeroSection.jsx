import React from "react";
import HeroVideo from "../assets/3188992-hd_1920_1080_25fps (1).mp4";
import HeroImage from "../assets/pexels-cottonbro-3171837.jpg";

function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url(${HeroImage})` }}
      id="hero-section"
      className="flex justify-center items-center bg-cover bg-center text-white bg-[#400061] md:py-[240px] px-5 max-md:py-24 max-md:px-4 overflow-hidden"
    >
      <div className="flex flex-col items-start w-full max-w-[1140px] z-40">
        {/* Text Container */}
        <div className="max-w-[760px] w-full">
          <h1 className="text-5xl uppercase leading-tight max-md:text-3xl max-md:leading-[40px]">
            Join Us at Fun <br /> House Parties with <br /> Real Strangers!
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
