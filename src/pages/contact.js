import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'

const contact = () => {
  return (
   <>
    <Head>
            <title> Abena Poku | Contact Page</title>
            <meta name='description' content='Contact Me to Hire Me'/>
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
               <AnimatedText text='Contact Me' className='mb-16' />
               <div className='max-w-[1240px] m-auto p-4 h-screen'>
               <form className='max-w-[600px] m-auto'>
                <div className='grid grid-cols-2 gap-2'>
                    <input  className='border shadow-lg p-3' type='text' placeholder='Name'/>
                    <input className='border shadow-lg p-3' type='text' placeholder='Email'/>
                </div>
                <input className='border shadow-lg p-3 w-full my-4' type='email' placeholder='Subject'/>
                <textarea className='border shadow-lg p-3 w-full' cols='30' rows='10' placeholder='Message'>
                </textarea>
                <button className='border shadow-lg p-3 mt-2'>Submit</button>
               </form>
               </div>
            </Layout>
        </main>
   </>
  )
}

export default contact