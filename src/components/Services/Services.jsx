import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { GiMechanicGarage } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { GiHandSaw } from "react-icons/gi";
import { GiElectricalResistance } from "react-icons/gi";
import { MdGirl } from "react-icons/md";
import { IoSparklesSharp } from "react-icons/io5";

const ServicesData = [
  {
    id: 1,
    title: "Electricians",
    link: "#",
    icon: <GiElectricalResistance />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Plumber",
    link: "#",
    icon: <FaTools />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Carpenter",
    link: "#",
    icon: <GiHandSaw />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Mechanics",
    link: "#",
    icon: <GiMechanicGarage />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Beauty Articians",
    link: "#",
    icon: <IoSparklesSharp />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 support",
    link: "#",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left pb-10">
          Services we provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4"> {service.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
