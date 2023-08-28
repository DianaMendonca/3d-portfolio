import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const PressStartButton = () => {
  return (
    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
      <a href="#about">
        <button
          className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] press-start-btn`}
          style={{
            color: "#fff33a",
            textShadow: "0px 5px 10px #f30773", // Add a shadow effect to the text
            fontSize: "3rem", // Or any other value you want
          }}
        >
          Start
        </button>
      </a>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full bg-[#f3ba99]"
            style={{ boxShadow: "0px 0px 10px 3px #ea5193" }}
          />
          <div className="w-1 sm:h-80 h-40 yellow-to-disappearing-pink" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="eighties-gradient neon-text">Gonçalo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my personal portfolio. <br className="sm:block hidden" />
            Explore my latest projects and articles<br className="sm:block hidden" />
            showcasing my skills.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <PressStartButton />
    </section>
  );
};

export default Hero;
