"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatsItem from "../StatsItem";

const AboutPageContainer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2,
        },
      }}
      className='min-h-screen flex items-center overflow-x-hidden'
    >
      <div className='container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0'>
        <div className='w-full h-full flex flex-col xl:flex-row items-center justify-between'>
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeInOut" }}
            className='relative w-[304px] h-[423px] xl:w-[384px] xl:h-[534px] mb-8 xl:mb-0'
          >
            <Image
              src={"/assets/about/img.jpg"}
              fill
              alt=''
              quality={100}
              priority
              className='object-contain'
            />
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.4, duration: 0.8, ease: "easeInOut" }}
            className='flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0'
          >
            <h2 className='h2 mb-6 mx-auto max-w-[540px] xl:max-w-none'>
              Committed to Your Skin&apos;s Health and Beauty
            </h2>
            <p className='lead max-w-[600px] mx-auto xl:mx-0'>
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p>
            <div className='grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0'>
              <div>
                <StatsItem countNum={13} text='Years On Market' />
              </div>
              <div>
                <StatsItem countNum={35} countText='k+' text='Happy Clients' />
              </div>
              <div>
                <StatsItem
                  countNum={97}
                  countText='%'
                  text='Natural Ingredients'
                />
              </div>
            </div>
            <button className='btn mx-auto xl:mx-0'>Contact Us</button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPageContainer;
