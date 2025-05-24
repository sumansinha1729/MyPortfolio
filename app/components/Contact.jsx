import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb42b9c1-4052-4353-9c58-1c8917e5a4af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <motion.h4
      initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.3}}
      className='text-center mb-2 text-lg'>Contact me</motion.h4>
      <motion.h2
       initial={{opacity:0,y:-20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,delay:0.5}}
      className='text-center text-5xl '>Open to Work & Collaboration</motion.h2>
      <motion.p
      initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.7}}
      className='text-center max-w-2xl font-ovo mx-auto mt-5 mb-12'>I’m currently open to work and collaboration opportunities. If you have a project, idea, or role that fits my skills, I’d love to hear from you.</motion.p>

    <motion.form
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.5,delay:0.9}}
    onSubmit={onSubmit} className='mx-auto max-w-2xl'>
     <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
      <motion.input
      initial={{x:-50,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:1.1,duration:0.6}}
      name='name' type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
      <motion.input
       initial={{x:50,opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:1.2,duration:0.6}}
      name='email' type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'/>
     </div>
     <motion.textarea
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:1.3,duration:0.6}}
     name='message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' rows='6' placeholder='Enter your message' required></motion.textarea>

     <motion.button
     whileHover={{scale:1.05}}
     transition={{duration:0.3}}
     className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' type='submit'>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
     <p className='mt-4'>{result}</p>
    </motion.form>
    </motion.div>
  )
}

export default Contact
