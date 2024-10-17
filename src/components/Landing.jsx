import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <section className="relative w-full section-background py-14">
        <div className="flex flex-col justify-center items-center gap-8 w-5/6 mx-auto">
          <div className="flex px-[10px] py-[7px] gap-[7px] border border-gray-700 rounded-lg">
            <span className="text-white opacity-50 text-[13px]">
              Version 2.0 is here
            </span>
            <div className="flex gap-1 items-center cursor-pointer">
              <span className="text-white text-[13px] font-bold">Readmore</span>
              <img src="./src/assets/arrow.png" alt="" />
            </div>
          </div>
          <div className="relative flex items-center w-[223px] md:w-[635px]">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="w-56 md:w-[635px] h-24 md:h-60 leading-[50px] md:leading-[120px] tracking-tighter text-[54px] md:text-[154px] font-bold text-white text-center"
            >
              One Task at a Time
            </motion.h1>
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: "-100%" },
                visible: { opacity: 1, x: 0 },
              }}
              src="./src/assets/cursor.png"
              alt="cursor-logo"
              className="hidden md:block absolute top-14 xl:top-32 -left-16 xl:left-[-120px] w-32 xl:w-48"
            />
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              // transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: "100%" },
                visible: { opacity: 1, x: 0 },
              }}
              src="./src/assets/message.png"
              alt="message-logo"
              className="hidden md:block absolute top-20 -right-16 xl:-right-36 lg:top-20 w-32 xl:w-48"
            />
          </div>
          <div className="w-[300px] md:w-[400px]">
            <p className="text-white text-[22px] leading-8 tracking-tighter text-center">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
          </div>
          <div className="bg-white px-[15px] py-[10px] rounded-xl z-10 hover:bg-white/90 cursor-pointer">
            <div className="text-black font-bold">Get for free</div>
          </div>
          <div className="absolute bottom-0 sm:-bottom-3 md:-bottom-10 lg:-bottom-16 xl:-bottom-28 left-0 w-full">
            <img className="w-full" src="./src/assets/Ellipse-lg.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
