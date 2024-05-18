import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { GithubIcon } from '@/components/Icons'
import Image from 'next/image'
import project1 from '../../public/images/projects/travel-destination-app.png'
import project2 from '../../public/images/projects/photography-web-app.png'
import project3 from '../../public/images/projects/machine-failure.png'
import project4 from '../../public/images/projects/dashboard.png'
import project5 from '../../public/images/projects/getaway-cabin.png'

const FeaturedProject = ({type, title, summary, img, link, github}) =>{
    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2cl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark'>{summary}</p>
            <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'> <GithubIcon/> </Link>
            <Link href={link} target='_blank' 
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' > Visit Project </Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-6 relative'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
            <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank' 
            className=' text-lg font-semibold underline' > Visit</Link>
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
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Design Drives Development!' 
                className='mb-16'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32'>
                    <div className='col-span-12'>
                       <FeaturedProject 
                       title='Photography Website'
                       img={project2}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6'>
                        <Project title='Travel Website'
                       img={project1}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='https://travel-website-azure-one.vercel.app/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6'>
                    <Project title='Machine Filure Prediction'
                       img={project3}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-12'>
                    <FeaturedProject 
                       title='User Dashboard'
                       img={project4}
                       summary='A user-friendly dashboard using NextJS Javascript and Tailwind CSS.'
                       link='https://next-js-user-dashboard.vercel.app/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6'>
                    <Project title='Gym Website'
                       img={project1}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>
                    <div className='col-span-6'>
                    <Project title='Getaway Cabin Website'
                       img={project5}
                       summary='A user-friendly photography website using React and Typescript.'
                       link='/' 
                       github='/'
                       type='Featured Projects'/>
                    </div>

                </div>
            </Layout>

        </main>
    </>
  )
}

export default projects