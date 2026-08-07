import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/pic.PNG";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="./logo.png" />
        <title>Ratnesh Singh | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className=" mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&apos;m Ratnesh Singh, a Software Engineer specializing in
                Spring Boot Microservices, Core Java, and React.js. I currently
                work as a Full Stack Web Developer at Campaigning Source Pvt.
                Ltd., where I build backend services for MyCRM, a full-featured
                CRM platform, and contribute to a Payroll Management System
                handling salary processing and HR operations.
              </p>

              <p className="my-4 font-medium">
                I specialize in designing RESTful APIs with Spring Security JWT
                authentication and role-based access control, working with
                layered architecture (Controller, Service, Repository) for
                maintainable, service-oriented systems. On the frontend, I build
                production React.js interfaces with reusable components, React
                Hooks, and Tailwind CSS, and I&apos;m comfortable with
                event-driven architecture using Apache Kafka.
              </p>

              {/* <p className="font-medium">
                I write unit and integration tests with JUnit and Mockito to
                keep deployments regression-free, and I follow Agile/Scrum,
                SDLC, and STLC processes to deliver production-grade software.
                With a B.Tech in Computer Science from ABES Institute of
                Technology, I&apos;m always looking to deepen my backend
                architecture skills and take on new challenges.
              </p> */}
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-6 ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt=""
                className='w-full h-auto rounded-2xl priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
