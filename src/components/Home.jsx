import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function Home() {
  return (
    <div
      id="home"
      className="w-screen h-full z-20 flex justify-center bg-homeLinearGradient text-white"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 2,
        }}
        className="flex flex-col max-w-[1000px] tracking-wider gap-[15vh] w-full h-full items-center justify-center"
      >
        {/* above section */}
        <div className="w-full flex items-center gap-12">
          <div className="max-w-[250px] relative w-full mr-4">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 8, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/assets/avatar.jpg"
                  alt="avatar image"
                  className="rounded-[50%] z-30 w-full aspect-square absolute shadow-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <img
                  src="/assets/lgGrad.png"
                  className="min-w-[450px] min-h-[480px] opacity-80 rounded-[50%] z-12 w-full aspect-square absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute mix-blend-screen z-11 w-full min-w-[350px] min-h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] h-full bg-avatarSmallGradient"></div>

            <AnimatePresence mode="wait">
              <motion.div
                initial={{ y: 8, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 1 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <h1 className="w-full font-Preahvihear absolute left-[320px] text-xl top-[-180px]">
                  <div className="relative">
                    <img
                      src="/assets/arrow.png"
                      className="absolute scale-[1.2] top-[-16px] left-0 -translate-x-[95%]"
                    />
                  </div>
                  Hello! I Am <span className="text-[#7127BA] font-bold">Phoenics</span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
          <div>
            <p className="[word-spacing:1px] mb-1">A Developer who</p>
            <h1 className="font-Preahvihear [word-spacing:1px] text-left text-[2.5em]">
              crafts seemless and
            </h1>
            <h1 className="font-Preahvihear [word-spacing:1px] text-left text-[2.5em]">
              innovative <span className="text-[#7127BA] font-medium">experiences</span>
            </h1>
          </div>
        </div>
        <div className="w-full text-left ml-6">
          <p className="[word-spacing:1px] font-medium text-[1.1em]">
            A self-taught <i>Full Stack Developer</i> passionate about creating visually appealing
            and user-friendly websites and applications. With expertise in both front-end and
            back-end technologies, I deliver high-quality, dynamic, and responsive products that
            exceed client expectations.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
