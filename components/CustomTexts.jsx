'use client';
import {motion} from 'framer-motion'
import { textContainer,textVariant2 } from '../utils/motion';
export const TypingText = ({title, textStyles}) => (
  <motion.p 
  className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  variants={textContainer}
  >
    {Array.from(title).map((letter,index)=>(
      <motion.span
      key={index}
      variants={textVariant2}>
        {letter ===' '?'\u00A0':letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}>
    {title}

  </motion.h2>
);
