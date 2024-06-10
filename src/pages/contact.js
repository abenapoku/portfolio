import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Abena Poku | Contact Page</title>
        <meta name='description' content='Contact Me to Hire Me' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text='Contact Me' className='mb-16' />
          <div className='max-w-[1240px] m-auto p-4 h-screen flex flex-col items-center justify-center'>
            <h1 className='text-2xl mb-4'>Thank you for your interest, I am available for contact at these handles below</h1>
            <div className='flex flex-col items-center space-y-4'>
              <div className='flex space-x-4'>
                <motion.a href="https://twitter.com" target={"_blank"} whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 mx-3 sm:mx-1'
                > <TwitterIcon /> </motion.a>
                <motion.a href="https://github.com/abenapoku" target={"_blank"} whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                > <GithubIcon /> </motion.a>
                <motion.a href="https://www.linkedin.com/in/abena-poku-050608201/" target={"_blank"} whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-6 mx-3 sm:mx-1'> <LinkedInIcon /> </motion.a>
              </div>
              <div className='text-center'>
                <p className='mb-2'>Email: <a href="mailto:abenapoku02@gmail.com" className='underline'>abenapoku02@gmail.com</a></p>
                <p className='mb-2'>Phone: <a href="tel:+14696843160" className='underline'>(469) 684-3160</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/abena-poku-050608201/" target="_blank" className='underline'>abenapoku</a></p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Contact
