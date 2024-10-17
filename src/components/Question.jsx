import { motion } from "framer-motion";
import { questions } from "../constants/info";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
};

const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? "-100%" : "100%", // Animate from left if "left", right if "right"
  }),
  visible: {
    opacity: 1,
    x: 0,
    // transition: { duration: 0.5 },
  },
};

const Question = () => {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-2xl mx-auto py-10 flex flex-col gap-7 md:gap-12">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1 },
        }}
        className="text-white text-[32px] md:text-[50px] leading-9 md:leading-[60px] tracking-tight text-center font-bold"
      >
        Frequently asked questions
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col"
      >
        {questions.map((question, index) => (
          <motion.div
            key={index}
            custom={index % 2 === 0 ? "left" : "right"} // Alternates between left and right
            variants={itemVariants}
            className="flex py-7 items-center justify-between border-b-[1px] border-white-opacity-20"
          >
            <p className="text-white font-bold text-[18px] md:text-[24px] tracking-tighter">
              {question.ques}
            </p>
            <img className="cursor-pointer" src={question.icon} alt="frame" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Question;
