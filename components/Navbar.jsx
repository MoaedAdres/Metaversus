'use client';

import { motion } from "framer-motion";

import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute inset-0 w-[50%] gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        src='./search.svg'
        alt="Search"
        className={styles.imageStyle} />
      <h2 className="font-extrabold text-[24px] leading-normal  text-white">METAVERSUS</h2>
      <img src="/menu.svg" alt="menu" className={styles.imageStylesa} />
    </div>
  </motion.nav>
)

export default Navbar;


