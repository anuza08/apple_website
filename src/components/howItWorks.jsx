import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";

const HowItWorks = () => {
  const vidoeRef = useRef();
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
        <div id="chip" className="flex-centre w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            {" "}
            It's here. The biggest redesign in the history of Apple GUI.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-centre ">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={vidoeRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <p classNmae="text-gray font-bold text-centre mt-3">
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
