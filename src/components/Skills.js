import React from 'react'
import {motion} from 'framer-motion'

const Skill =({name,x,y})=>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y, transition:{duration:1.5}}}
   
    viewport={{once:true}}
    >
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:bg-light dark:text-dark
            lg:p-6 md:p-4 xs-text-xs xs:p-2' whileHover={{scale:1.05}} >
                Web
            </motion.div>

            {/* INNER ORBIT — a=14vw b=7vw, 4 items at 45/135/225/315deg */}
<Skill name="React.js" x="9.9vw" y="4.9vw"/>
<Skill name="Spring Boot" x="-9.9vw" y="4.9vw"/>
<Skill name="Java" x="-9.9vw" y="-4.9vw"/>
<Skill name="MySQL" x="9.9vw" y="-4.9vw"/>

{/* MIDDLE ORBIT — a=24vw b=12vw, 6 items at 0/60/120/180/240/300deg */}
<Skill name="Spring Security" x="24vw" y="0vw"/>
<Skill name="JDBC" x="12vw" y="10.4vw"/>
<Skill name="Hibernate" x="-12vw" y="10.4vw"/>
<Skill name="JavaScript" x="-24vw" y="0vw"/>
<Skill name="Servlets" x="-12vw" y="-10.4vw"/>
<Skill name="Microservices" x="12vw" y="-10.4vw"/>

{/* OUTER ORBIT — a=32vw b=16vw, 6 items at 30/90/150/210/270/330deg */}
<Skill name="Apache Kafka" x="27.7vw" y="8vw"/>
<Skill name="JSP" x="0vw" y="16vw"/>
<Skill name="Docker" x="-27.7vw" y="8vw"/>
<Skill name="Git" x="-27.7vw" y="-8vw"/>
<Skill name="Spring MVC" x="0vw" y="-16vw"/>
<Skill name="Tailwind CSS" x="27.7vw" y="-8vw"/>
      </div>
    </>
  )
}

export default Skills