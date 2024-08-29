import { FaGithub } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa6";
import { PiSealCheckBold } from "react-icons/pi";
import { useState } from "react";

function Contact() {
    const [isMailClicked, setIsMailClicked] = useState(false);
    const [checkIconOpacity, setCheckIconOpacity] = useState(0);

  return (
    <div
      id="contact"
      className="w-screen h-[70%] flex flex-col items-center text-left pt-10 bg-[#11071F] text-white tracking-wider"
    >
      <motion.div
        className="w-full max-w-[1700px] flex flex-col pl-[10vw] pr-[10vw] gap-10"
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: -60 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
        }}
      >
        <h1 className="w-full font-bold text-3xl font-Preahvihear mb-4">Contact</h1>
        <div className="flex flex-col gap-8 justify-start w-full">
          <p className="font-Preahvihear">
            I'm currently looking to join a cross-functional team that values improving people's
            lives through accessible software or have a project in mind? Let's connect!
          </p>
          <span className="w-full flex gap-2 items-center">
            <p
              className="font-Preahvihear font-medium hover:cursor-pointer text-[#aa55ff] duration-[300ms] transition-all ease-in-out"
              onClick={() => {
                navigator.clipboard.writeText("thephoenics.dev@gmail.com");
                setIsMailClicked(true);
                setTimeout(() => setCheckIconOpacity(100), 50);
              }}
            >
              thephoenics.dev@gmail.com
            </p>
            {isMailClicked && (
              <span
                className={`text-white transition-opacity duration-500 ease-in-out`}
                style={{ opacity: checkIconOpacity / 100 }}
              >
                <PiSealCheckBold />
              </span>
            )}
          </span>
        </div>
        <div className="w-full flex gap-5">
          <Link
            target="_blank"
            to={"https://github.com/The-Phoenics"}
            className="scale-[1.1] duration-500 transition-all"
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            to={"https://x.com/phoenics_x"}
            className="scale-[1.1] duration-500 transition-all"
          >
            <IoLogoTwitter />
          </Link>
          {/*
          <Link
            target="_blank"
            to={"https://discordapp.com/users/856245732294000660"}
            className="hover:scale-[1.2] duration-500 transition-all"
          >
            <FaDiscord />
          </Link>
          */}
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
