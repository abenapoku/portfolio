import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Subject1.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNum = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once:true});

    useEffect(() =>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change',(latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title> Abena Poku | About Page</title>
            <meta name='description' content='Learn more about me as a developer'/>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text='Crafting Digital Excellence'className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'> 
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>About Me</h2>
                    <p className='font-medium '>
                    Hello, my name is Abena, a passionate developer with a degree in Computer Science and
                     a minor in Mathematics. Over the years, I&apos;ve honed my skills in HTML, CSS, JavaScript, and various frontend frameworks to
                     build dynamic and responsive websites and applications.
                    </p>
                    <p className='font-medium my-4'>
                    I believe that great design is more than just aesthetics; it&apos;s about understanding users&apos;
                    needs and crafting solutions that make their lives easier.
                    </p>
                    <p className='font-medium'> 
                    Driven by curiosity and a relentless pursuit of innovation, 
                    I&apos;m always eager to explore new technologies and methodologies to enhance user experiences 
                    and streamline development processes.
                    </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light'/>
                    <Image src={profilePic} alt='AbenaPoku' className='w-full h-auto'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>                </div>

                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNum value={20}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/70 dark:text-light/75 xl:text-center md:text-lg sm:text-base 
                        xs:text-sm'>
                        Websites Built
                        </h2>
                    </div >
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNum value={30}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/70 dark:text-light/75 l:text-center md:text-lg sm:text-base 
                        xs:text-sm'>
                        Completed Projects
                        </h2>
                    </div>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNum value={4}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/70 dark:text-light/75 l:text-center md:text-lg sm:text-base 
                        xs:text-sm'>
                        Years of Experience
                        </h2>
                    </div>
                </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about