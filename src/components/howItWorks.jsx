import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: { trigger: "#chip", start: "20% bottom" },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex justify-center items-center my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GUI.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex justify-center items-center">
            <div className="relative w-full">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10 w-full"
              />
              <video
                className="absolute top-0 left-0 md:top-4 md:left-4  md:h-82 object-cover pointer-events-none rounded-3xl"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                width={680}
                height={100}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <p className="text-gray-700 font-bold text-center mt-3">
          Honkai: Star Rail
        </p>

        <div className="hiw -text-container">
          <div className=" flex flex-1 jsutify-centre flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhoen chip that delivers oue{" "}
              {""} <span className="text-white">lightest Pro models ever.</span>
              using the same alloy that spacecrafts use for mission to Mars.
            </p>
          </div>

          <p className="hiw-text g_fadeIn">
            Mobile{""}
            <span className="text-white">
              games will look and feel so immersive
            </span>
            with incredibly detailed enviroments and characters.
          </p>
        </div>
        {/* <div className=''></div> */}
      </div>
    </section>
  );
};

export default HowItWorks;
