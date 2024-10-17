import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childContainer = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Access = () => {
  return (
    <section className="relative w-5/6 mx-auto py-16 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={container}
        className="flex flex-col gap-10"
      >
        <motion.div variants={childContainer} className="flex flex-col gap-5">
          <motion.h1
            variants={childContainer}
            className="text-white text-[32px] md:text-[54px] leading-9 md:leading-[60px] tracking-tight text-center font-bold"
          >
            Get instant access
          </motion.h1>
          <motion.p
            variants={childContainer}
            className="text-[#BBBBBB] md:max-w-md mx-auto tracking-tight text-[16px] leading-6 text-center"
          >
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </motion.p>
        </motion.div>
        <motion.div
          variants={childContainer}
          className="flex flex-col md:flex-row gap-2 mx-auto"
        >
          <motion.input
            variants={childContainer}
            className="bg-white/20 py-3 px-4 font-semibold placeholder-white/50 w-72 rounded-lg outline-none text-white"
            type="text"
            placeholder="name@gamil.com"
          />
          <motion.div
            variants={childContainer}
            className="bg-white text-black font-semibold w-72 md:w-28 px-4 py-3 text-center rounded-lg hover:bg-white/95 cursor-pointer"
          >
            Get access
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="absolute -left-44 lg:-left-16 top-3 hidden md:block"
        src="./src/assets/emojistar1.png"
        alt="graph"
      />
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="hidden md:block absolute -right-40 lg:-right-20 top-40"
        src="./src/assets/setting2.png"
        alt="setting-logo"
      />
    </section>
  );
};

export default Access;
