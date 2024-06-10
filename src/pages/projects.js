import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from '../../public/images/projects/travel-destination-app.png'
import project2 from '../../public/images/projects/crypto.png'
import project3 from '../../public/images/projects/photography-web-app.png'
import project4 from '../../public/images/projects/dashboard.png'
import project5 from '../../public/images/projects/getaway-cabin.png'
import project6 from '../../public/images/projects/notes-app.png'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
              xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' 
            priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10 md:w-6'> <GithubIcon/> </Link>
            <Link href={link} target='_blank' 
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base' > Visit Project </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
              md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank' 
            className=' text-lg font-semibold underline md:text-base' > Visit</Link>
            <Link href={github} target='_blank' className='w-8'> <GithubIcon/> </Link>
            
            </div>
            </div>
        </article>
    )
    
}

const projects = () => {
  return (
    <>
     <Head>
            <title> Abena Poku | Projects Page</title>
            <meta name='description' content='Here are some projects I have completed'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Design Drives Development!' 
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                       <FeaturedProject 
                       title='Crypto Tracking Web Application'
                       img={project2}
                       summary='A user-friendly crypto web application that allows users to login, save, and view live API data.'
                       link='https://kryptokat-8987d.web.app/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title='Travel Website'
                       img={project1}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='https://travel-website-azure-one.vercel.app/' 
                       github='https://github.com/abenapoku/Travel-Website'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project title='Photography Website'
                       img={project3}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='https://photography-app-henna.vercel.app/' 
                       github='https://github.com/abenapoku/Machine-Failure-Machine-Learning'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                       title='User Dashboard'
                       img={project4}
                       summary='A user-friendly dashboard using NextJS Javascript and Tailwind CSS.'
                       link='https://next-js-user-dashboard.vercel.app/' 
                       github='https://github.com/abenapoku/next-js-user-dashboard'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project title='Notes Web App'
                       img={project6}
                       summary='A personal journal for any user to jot a note down, complete with backend authentication.'
                       link='https://github.com/abenapoku/notes-web-app' 
                       github='https://github.com/abenapoku/notes-web-app'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project title='Podcast AI Web Application'
                       img={project5}
                       summary='A SaaS web application that uses OpenAI to help the user generate their own podcast as well as thumbnail, complete with backend authentication.'
                       link='https://github.com/abenapoku/ai-podcast-generation' 
                       github='/https://github.com/abenapoku/ai-podcast-generation'
                       type='Featured Projects'/>
                    </div>

                </div>
            </Layout>

        </main>
    </>
  )
}

export default projects