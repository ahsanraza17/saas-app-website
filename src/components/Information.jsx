import { motion } from "framer-motion";
import { about } from "../constants/info";
import { logos } from "../constants/info";

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

const AboutCard = ({ title, icon, desc }) => {
  return (
    <motion.div
      variants={childContainer}
      className="bg-[#0D0D0D] p-10 w-[360px] rounded-lg flex flex-col justify-center items-center gap-6 border border-white-opacity-20"
    >
      <div className="p-[18px] w-14 bg-white rounded-md">
        <img src={icon} alt={title} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-white font-bold text-[18px]">{title}</h3>
        <p className="text-white text-[16px] leading-6 text-center tracking-tighter">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const Information = () => {
  return (
    <section className="relative w-full py-10">
      <div className="w-5/6 mx-auto flex flex-col items-center justify-center gap-9">
        <div className="w-full flex justify-center z-10">
          <p className="text-[#7A7A7A] text-[14px]">
            Trusted by the worlds most inovative teams
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
          className="flex gap-9 flex-wrap justify-center"
        >
          {logos.map((logo, index) => (
            <motion.img
              variants={childContainer}
              key={index}
              src={logo.img}
              alt={logo.alt}
            />
          ))}
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto py-40 flex flex-col gap-16">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        // transition={{ duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, scale: 0.5},
          visible: { opacity: 1, scale: 1 }
        }}
        className="w-full md:w-[540px] mx-auto flex flex-col gap-5">
          <div className="flex justify-center">
            <h1 className="text-white text-[32px] md:text-[54px] leading-[60px] font-bold">
              Everything you need
            </h1>
          </div>
          <div className="flex justify-center">
            <p className="text-white text-center text-[22px] leading-8">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={container}
          className="w-full flex flex-wrap justify-center gap-4"
        >
          {about.map((aboutItem, index) => {
            return <AboutCard key={index} {...aboutItem} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Information;
