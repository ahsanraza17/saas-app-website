import { motion } from "framer-motion";
import Question from "./Question";

const AppDesign = () => {
  return (
    <section className="w-full linear-background pb-16 pt-10">
      <div className="w-5/6 mx-auto py-10 flex flex-col gap-[60px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="max-w-[347px] md:max-w-[540px] mx-auto flex flex-col gap-5"
        >
          <div className="flex justify-center">
            <h1 className="text-white text-[32px] md:text-[54px] leading-[60px] font-bold">
              Intuitive interface
            </h1>
          </div>
          <div className="flex justify-center w-full">
            <p className="w-full text-white text-center text-[22px] leading-8 tracking-tighter">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes, one task at a time.
            </p>
          </div>
        </motion.div>
        <div className="w-full">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="w-full"
            src="./src/assets/App-Night.png"
            alt="App-Night"
          />
        </div>
      </div>
      <Question />
    </section>
  );
};

export default AppDesign;
