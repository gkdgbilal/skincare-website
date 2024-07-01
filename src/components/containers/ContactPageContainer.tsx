"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Form from "../forms/Form";

const ContactPageContainer = () => {
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
      <div className='container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0'>
        <div className='flex flex-col gap-12 xl:flex-row h-full'>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2, duration: 0.8, ease: "easeInOut" },
            }}
            className='flex-1 flex flex-col justify-center'
          >
            <h3 className='h3 mb-8 text-center xl:text-left'>Contact Info</h3>
            <div className='flex flex-col items-center xl:items-start gap-12'>
              <div className='flex items-start gap-4'>
                <div className='relative w-9 h-9'>
                  <Image src={"/assets/contact/pin.svg"} fill alt='' />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Address</h4>
                  <p className='leading-relaxed'>
                    123/45 Elm St, Suite 800
                    <br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='relative w-9 h-9'>
                  <Image src={"/assets/contact/phone.svg"} fill alt='' />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Phone Number</h4>
                  <div className='pt-1 flex-1'>
                    <p>Phone: +90 (987) 654 32 10</p>
                    <p>Fax: +90 (212) 654 32 10</p>
                  </div>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='relative w-9 h-9'>
                  <Image src={"/assets/contact/email.svg"} fill alt='' />
                </div>
                <div className='pt-1 flex-1'>
                  <h4 className='h4 mb-2'>Email Address</h4>
                  <div className='flex flex-col gap-1'>
                    <p>info@domain.com.tr</p>
                    <p>support@domain.com.tr</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
            }}
            className='flex-1'
          >
            <div className='bg-[#f0cfbc] w-full max-w-[500px] gap-4 p-10 mx-auto'>
              <h3 className='h3 mb-8 text-center'>Get in touch</h3>
              <Form />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPageContainer;
