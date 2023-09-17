'use client';

import { useState } from "react";
import { staggerContainer } from '../utils/motion'
import styles from '../styles'
import { motion } from 'framer-motion'
import { exploreWorlds } from '../constants'
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
    const [active, setActive] = useState('world-2')
    return (
        <section className={`${styles.paddings}`} id="explore">
            <motion.div
                className={`${styles.innerWidth} mx-auto flex-col gap-2`}
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}>
                <TypingText
                    title="| The World"
                    textStyles="text-center" />
                <TitleText
                    title={<>Choose the world you want <br className="md:block hidden" />  to explore </>}
                    textStyles="text-center" />

                <div className="flex lg:flex-row flex-col min-h-[70vh] gap-5 mt-[50px] ">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Explore