'use client';
import { motion } from "framer-motion";

import styles from '../styles'
import { staggerContainer, textVariant, slideIn } from '../utils/motion'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} m-auto flex flex-col rounded-xl `}>
      <div className={`${styles.flexCenter} flex-col relative z-10`}
      >
        <motion.h1
          variants={textVariant(1.1)}
          className={`${styles.heroHeading}`}>METAVERSE</motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className={`${styles.flexCenter} flex-row`}>
          <h1 className={`${styles.heroHeading}`}>MA</h1>
          <div className={`${styles.heroDText}`} />
          <h1 className={`${styles.heroHeading}`}>Ness</h1
          >
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=" relative w-full md:-mt-[20px] -mt-[12px]"
        >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/cover.png"
          className="w-full sm:h-[500px] h-[350px]
         object-cover rounded-tl-[140px]
          relative z-10 " />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px]
           -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px]
              sm:h-[155px] h-[100px] object-contain" />
          </div>

        </a>
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;