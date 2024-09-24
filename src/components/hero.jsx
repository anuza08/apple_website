import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-black relative">
      <div className="flex flex-col items-center justify-center space-y-4">
        <p
          id="hero"
          className="hero-title text-white text-4xl md:text-5xl font-bold text-center"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 flex justify-center">
          <video
            autoPlay
            muted
            playsInline
            className="rounded-lg shadow-lg"
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mt-8"
      >
        <a
          href="#highlights"
          className="btn text-sm md:text-base py-2 px-4 md:py-3 md:px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Buy
        </a>
        <p className="font-normal text-xl text-white mt-2">From ₹ 1,16,900</p>
      </div>
    </section>
  );
};

export default Hero;
