import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Project1 from '../../public/images/projects/Academic.png'
import Project2 from '../../public/images/projects/AdoptEase.png'
import Project3 from '../../public/images/projects/application-screenshot.png'
import Project4 from '../../public/images/projects/Auction Platform.png'
import Project5 from '../../public/images/projects/social-application.png'
import Project6 from '../../public/images/projects/ProductionApplication.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github,tech, }) => {
  return (
    <article className='w-full flex items-center justify-between relative rounded-br-2xl
     rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12
      lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      ' />
      <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={img} alt={title} className='w-full h-auto '
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base '>{type}</span>
        <Link href={link} target='_blank' className='
        hover:underline underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        {tech && (
          <div className='my-2 flex flex-wrap gap-2'>
            {tech.map((item) => (
              <span
                key={item}
                className='rounded-full border border-dark dark:border-light px-3 py-1 text-sm font-medium
                text-dark dark:text-light sm:text-xs sm:px-2 sm:py-0.5'
              >
                {item}
              </span>
            ))}
          </div>
        )}
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'><GithubIcon /></Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
          sm:px-4 sm:text-base dark:bg-white dark:text-dark
          '>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github,tech }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light  p-6 relative xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      ' />
      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
   />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='
        hover:underline underline-offset-2' >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

           {tech && (
          <div className='mb-2 flex flex-wrap gap-2'>
            {tech.map((item) => (
              <span
                key={item}
                className='rounded-full border border-dark dark:border-light px-2.5 py-0.5 text-xs font-medium
                text-dark dark:text-light'
              >
                {item}
              </span>
            ))}
          </div>
        )}

        <div className=' w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className=' text-lg font-semibold underline md:text-base'>Visit</Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /></Link>

        </div>
      </div>
    </article>
  )
}



const projects = () => {
  return (
    <>
      <Head>
        <title>Ratnesh Singh | Project</title>
        <meta name='description' content='any description' />
      </Head>
       <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!"
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
             <FeaturedProject
                 title="Product Management System"
                img={Project6}
                summary="Authentication, Spring Data JPA, and MySQL. The application supports user authentication, product and category management, role-based access, RESTful APIs, and follows a layered architecture with Controllers, Services, Repositories, and DTOs for scalability and maintainability."
                link="https://github.com/RatneshSingh21/ProductApplication"
                github="https://github.com/RatneshSingh21/ProductApplication"
                type="Backend Project"
                tech={["Java", "Spring Boot", "Spring Security", "Maven","MySql","REST API"]}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="AdoptEase"
                img={Project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/RatneshSingh21/AdoptEase"
                github="https://github.com/RatneshSingh21/AdoptEase"
                type="Full Stack Project"
                tech={["Java", "Servlets", "JSP", "JDBC", "MySQL", "Tomcat"]}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Spring-Petclinic-Microservices"
                img={Project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://github.com/RatneshSingh21/spring-petclinic-microservices"
                github="https://github.com/RatneshSingh21/spring-petclinic-microservices"
                type="Full Stack Project"
              />
            </div>

            <div className='col-span-12'>
               <FeaturedProject
                title="Academic Performance Tracker"
                img={Project1}
                summary="A simple Academic Performance Tracker using Java, JSP, and HTML.
Admins can add students, enter results, and view academic records through a clean and functional web interface."
                link="https://github.com/RatneshSingh21/Academic-Tracker-/tree/main/Academic%20Tracker"
                github="https://github.com/RatneshSingh21/Academic-Tracker-/tree/main/Academic%20Tracker"
                type="Full Stack Project"
                tech={["Java", "JSP", "HTML", "MySQL"]}

              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Auction Platform"
                img={Project4}
                summary="A full-featured Auction Platform.It includes user authentication, auction item management, real-time bidding logic, and automated cron jobs to handle auction lifecycle events. The backend is modularly structured with Controllers, Models, and Middlewares for scalability and maintainability.."
                link="https://aesthetic-syrniki-1bd0a3.netlify.app/"
                github="https://github.com/RatneshSingh21/Auction-Platfrom"
                type="Full Stack Project"
                tech={["Node.js", "Express", "MongoDB", "React", "Cron Jobs"]}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title="Social Application"
                img={Project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="https://darling-madeleine-cf5b46.netlify.app/"
                github="https://github.com/RatneshSingh21/Social-Application/"
                type="Featured Project"
                 tech={["React", "Node.js", "MongoDB"]}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
