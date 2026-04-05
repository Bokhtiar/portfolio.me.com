
"use client";
import Image from "next/image";
import { Card } from "@/components/card";
import { Do } from "@/components/do/index";
import { Resume } from "@/components/resume";
import { Work } from "@/components/work/index";
import { Testimonial } from "@/components/testimonial";
import { PrimaryButton } from "@/components/button/index";
import { ContactForm } from "@/components/contact-form";
import { useState } from "react";
import { FaServer } from "react-icons/fa";
import {
  SiAmazons3,
  SiApollographql,
  SiDjango,
  SiDocker,
  SiGit,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiPm2,
  SiPostman,
  SiRabbitmq,
  SiRedis,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { SkillIconTile } from "@/components/skill-icon-tile";

export default function Home() {



  const [activeSection, setActiveSection] = useState("#home");

  const menuItems = [
    { href: "#home", label: "HOME" },
    { href: "#service", label: "SERVICES" },
    { href: "#skill", label: "SKILL" },
    { href: "#project", label: "PROJECT" },
    { href: "#resume", label: "RESUME" },
    { href: "#contact-us", label: "CONTACT" },
  ];


  return (
    <section className="bg-primary" id="home">
      {/* navbar */}
      <div className="navbar bg-primary container text-white py-5 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">

              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
            
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52"
            >
              {/* <li>
                <a href="#home" className="">
                  HOME
                </a>
              </li>
              <li>
                <a href="#service">SERVICES</a>
              </li>
              <li>
                <a href="#skill">SKILL</a>
              </li>
              <li>
                <a href="#project">PROJECT</a>
              </li>
              <li>
                <a href="#resume">RESUME</a>
              </li>
              <li>
                <a href="#contact-us">CONTACT</a>
              </li> */}
                {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={`${activeSection === item.href
                      ? "bg-secondary p-1 px-7 py-2 rounded-md"
                      : "bh-primary "
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            </ul>
          </div>
          <a href="#home" className="btn btn-ghost normal-case text-xl">

            <Image
              src="/images/me.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-full md:mt-[-8px]"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            {/* <li>
              <a href="#home" className="bg-secondary p-1 px-7 py-2 rounded-full text-sm">
                HOME
              </a>
            </li>
            <li>
              <a href="#service">SERVICES</a>
            </li>
            <li>
              <a href="#skill">SKILL</a>
            </li>
            <li>
              <a href="#project">PROJECT</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#contact-us">CONTACT</a>
            </li> */}
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setActiveSection(item.href)}
                  className={`${activeSection === item.href
                      ? "bg-secondary p-1 px-7 py-2 rounded-md"
                      : "bh-primary "
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <PrimaryButton name="DOWNLOAD CV"></PrimaryButton>
        </div>
      </div>
      {/* banner area */}
      <section className="my-32 container">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
          {/* left side content */}
          <div className="md:col-span-1 my-auto">
            <h2>
              <span className="text-xl md:text-3xl font-semibold">Hello, </span>{" "}
              <span className="text-secondary text-xl md:text-3xl font-semibold">
                I am
              </span>
            </h2>
            <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold my-2">
              Bokhtiar Toshar
            </h1>
            <h2 className="text-xl md:text-4xl font-semibold">
              Software engineer
            </h2>

            {/* about me */}
            <p className="my-12 text-xl text-justify md:mr-20 text-gray-400">
              Bokhtiar Toshar here, Im a passionate software engineer. I use
              Laravel, Node, React, Vue, and Nextjs, with a MongoDB and MySql
              database. I wish to continue learning about programming languages.
            </p>
            {/* find on me */}
            <div className="my-12">
              <h2 className="uppercase mb-2">Find ON Me</h2>
              <div className="flex items-center gap-3 ">
                {/* facebook */}
                <a
                  className="bg-white  rounded-full"
                  href="https://www.facebook.com/bokhtiar172/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/fb.webp"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className=" border border-secondary rounded-full p-[2px]"
                  />
                </a>

                {/* insta */}
                <a
                  className="bg-white rounded-full "
                  href="https://www.instagram.com/bokhtiar_tushar/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/insta.webp"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="border border-secondary rounded-full p-[2px]"
                  />
                </a>

                {/* facebook
                <a className="bg-white rounded" href="">
                  <Image
                    src="/images/icon/twitter.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                </a> */}

                {/* github */}
                <a
                  className="bg-white rounded-full"
                  href="https://github.com/Bokhtiar"
                  target="blank"
                >
                  <Image
                    src="/images/icon/github.webp"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="border border-secondary rounded-full p-[2px]"
                  />
                </a>

                {/* facebook */}
                <a
                  className=" bg-white rounded-full"
                  href="https://www.linkedin.com/in/bokhtiarswe/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/linkdin.webp"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="border border-secondary rounded-full p-[2px]"
                  />
                </a>
              </div>

              {/* about exp and client */}
              <div className="flex items-center gap-4 md:gap-8 my-12">
                {/* experiance */}
                <p>
                  <span className="font-semibold text-3xl">2.5+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[10px] md:text-[12px]">
                    year of experiance
                  </span>
                </p>
                {/* client */}
                <p>
                  <span className="font-semibold text-3xl">27+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[10px] md:text-[12px]">
                    Global Client work
                  </span>
                </p>
                {/* Award */}
                <p>
                  <span className="font-semibold text-3xl">9+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[10px] md:text-[12px]">
                    Awards win
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* right side content */}
          <div className="md:col-span-1">
            {/* <Image
              src="/images/bokhtiar2.4.png"
              width={0}
              height={0}
              alt="Picture of the author"
              className=" rounded-xl mx-auto h-72 w-72"
            /> */}
            <img
              src="/images/bokhtiar2.8.png"
              className="rounded-xl mx-auto object-cover"
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      {/* what i do */}
      <section className="my-32 container" id="service">
        <h4 className=" uppercase text-secondary text-[12px] text-center font-semibold">
          My services
        </h4>
        <h1 className=" font-bold text-3xl text-white md:text-6xl text-center">
          What I Do
        </h1>
        {/* services list */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-12 gap-8">
          <div className=" border border-gray-800  text-white bg-primary px-3 md:px-8 md:py-4  rounded-md my-[0px] hover:scale-90 ease-out duration-500 hover:opacity-90 ">
            <Do
              logo="/images/web.png"
              title="Web Desing"
              description="Create dependable online Desings that passionately fulfill both your companys and your consumers needs."
            ></Do>
          </div>

          <div className=" border border-gray-800  text-white bg-primary px-8 py-4 rounded-md my-[0px] hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Do
              logo="/images/icon/github.webp"
              title="Web Development"
              description="Make trustworthy web applications and APIs — from UI to production, including server deployment when you go live."
            ></Do>
          </div>

          <div className=" border border-gray-800  text-white bg-primary px-8 py-4 rounded-md my-[0px] hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Do
              logo="/images/api.png"
              title="API Development"
              description="Through application programming interfaces, two or more computer applications can communicate.  "
            ></Do>
          </div>

          <div className=" border border-gray-800  text-white bg-primary px-8 py-4 rounded-md my-[0px] hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Do
              icon={<FaServer className="h-5 w-5" aria-hidden />}
              title="Server Deployment"
              description="Deploy and run apps on VPS, cloud, or containers — SSL, reverse proxy, process managers, CI/CD, and uptime-focused setup."
            ></Do>
          </div>
        </div>
      </section>

      {/* skill */}
      <section className="my-32 container" id="skill">
        <h4 className="text-center uppercase text-secondary text-[12px] font-semibold">
          My skill
        </h4>
        <h1 className=" text-center font-bold text-3xl md:text-6xl text-white">
          Visit My Skill & Hire Me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 my-12">
          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/html.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/css.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/bootstrap.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/18.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/13.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/jquery.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/ts.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/17.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/nextjs.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/vuejs1.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/nodejs.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/express-js.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/12.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/3.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/4.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/9.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/10.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/11.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/15.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/16.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12  border rounded border-gray-800 hover:bg-secondary hover:scale-90 ease-out duration-500 hover:opacity-90">
            <Image
              src="/images/dt3.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <SkillIconTile icon={SiLinux} label="VPS / Linux server" />
          <SkillIconTile icon={SiVercel} label="Vercel" />
          <SkillIconTile icon={SiAmazons3} label="AWS S3" />
          <SkillIconTile icon={SiApollographql} label="Apollo GraphQL" />
          <SkillIconTile icon={SiDocker} label="Docker" />
          <SkillIconTile icon={SiPm2} label="PM2" />
          <SkillIconTile icon={SiGit} label="Git" />
          <SkillIconTile icon={SiRedis} label="Redis" />
          <SkillIconTile icon={SiRabbitmq} label="RabbitMQ" />
          <SkillIconTile icon={SiTailwindcss} label="Tailwind CSS" />
          <SkillIconTile icon={SiMongodb} label="MongoDB" />
          <SkillIconTile icon={SiLaravel} label="Laravel" />
          <SkillIconTile icon={SiNestjs} label="NestJS" />
          <SkillIconTile icon={SiDjango} label="Django" />
          <SkillIconTile icon={SiPostman} label="Postman" />
        </div>
      </section>
      {/* work */}
      <section className="my-32 container" id="project">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold text-center">
          My Work
        </h4>
        <h1 className=" font-bold  text-3xl md:text-6xl text-white text-center">
          Visit My Best Work
        </h1>
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-7 ">
          <Work
            name="Jobmedia"
            description="Job Media is a job portal website."
            website_link="#"
            image="/images/projects/jobmedia.png"
            category="Career"
          ></Work>
          <Work
            name="Billing system"
            description="Make a bill in PDF format and print."
            website_link="#"
            image="/images/projects/ijc_management.png"
            category="Business"
          ></Work>
          <Work
            name="Visaxpert"
            description="Indian visa apply application."
            website_link="#"
            image="/images/projects/visaexpert.png"
            category="Travel"
          ></Work>
          <Work
            name="CRM"
            description="Built a CRM system to organize customer information, track interactions, and streamline sales."
            website_link="#"
            image="/images/api.png"
            category="Business"
          ></Work>
          <Work
            name="Multi-vendor eCommerce"
            description="Built a multi-vendor eCommerce system for multiple sellers and unified storefront management."
            website_link="#"
            image="/images/projects/multi-vendor.png"
            category="Ecommerce"
          ></Work>
          <Work
            name="Restura"
            description="Make Healthy Life connect to us"
            website_link="https://restura-com.vercel.app/"
            image="/images/restura.png"
            category="Business"
          ></Work>
          <Work
            name="GrapTown"
            description="System for managing halls"
            website_link="https://graptown.com/"
            image="/images/graptwon.png"
            category="Business"
          ></Work>
          <Work
            name="Ecommerce"
            description="Buying and selling of services over the internet."
            website_link="https://bokhtiar.github.io/bt-ecommerce.com/"
            image="/images/projects/bt-original.png"
            category="Ecommerce"
          ></Work>
          <Work
            name="Artifly"
            description="The online purchase and sale of services."
            website_link="#"
            image="/images/web.png"
            category="Ecommerce"
          ></Work>
          <Work
            name="Grapschool"
            description="IT training facility an IT training facility"
            website_link="https://grapschool.com/"
            image="/images/grapschoo.png"
            category="Education"
          ></Work>
          <Work
            name="Asazaoa"
            description="One Platform for All Transport Services — one app, all services at your fingertips."
            website_link="https://asazaoa.com/"
            image="/images/projects/asajawa.png"
            category="Transport"
          ></Work>
          <Work
            name="vert-2-gris"
            description="Vert-2-Gris is a humane venture, where, as the founders, East meets West, Bangladesh meets Europe."
            website_link="https://vert-2-gris.net/"
            image="/images/ver2.png"
            category="Ecommerce"
          ></Work>
          <Work
            name="Office Management system"
            description="Developed an Office Management System for teams and daily operations."
            website_link="#"
            image="/images/projects/ijc_management.png"
            category="Business"
          ></Work>
          <Work
            name="Exam preparation any admission"
            description="Developed an admission exam preparation platform for students."
            website_link="#"
            image="/images/projects/schoolpara.png"
            category="Education"
          ></Work>
          <Work
            name="News portal"
            description="Developed a news portal for publishing and managing articles."
            website_link="#"
            image="/images/web.png"
            category="Media"
          ></Work>
          <Work
            name="Point of Sale"
            description="Developed a Point of Sale (POS) system to manage sales, inventory, and checkout."
            website_link="#"
            image="/images/pos.jpeg"
            category="Business"
          ></Work>
          <Work
            name="School Management system"
            description="Developed a School Management System for administration, classes, and records."
            website_link="#"
            image="/images/projects/school.png"
            category="Education"
          ></Work>
        </div>
      </section>
      {/* resume */}
      <section className="my-32 container" id="resume">
        <h4 className=" uppercase text-secondary text-center text-[12px] font-semibold">
          Years of experiance
        </h4>
        <h1 className=" font-bold text-3xl md:text-6xl text-white text-center">
          My Resume
        </h1>

        {/* resume information */}
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
          {/* educaton */}
          <div className="mx-4">
            <h3 className=" text-white  mt-12 mb-12 uppercase text-2xl font-bold">
              Education
            </h3>
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 pl-2">
              <Resume
                name_of_institute=" Bachelor of Software Engineering"
                title="B.Sc in Software Engineering Daffodil International
                    University (DIU)"
                year="Jan 2017 – Dec 2020"
                result="CGPA - 3.25 out of 4.00"
              ></Resume>
              <Resume
                name_of_institute=" Higher Secondary School Certificate"
                title="Higher Secondary at Darunnazt Siddikiea Kamil Madrasha (DSKM)"
                year="Jan 2015 – Dec 2016"
                result="GPA - 4.96 out of 5.00"
              ></Resume>
              <Resume
                name_of_institute="Secondary School Certificate"
                title="Secondary School at Darunnazt Siddikiea Kamil Madrasha (DSKM)"
                year="Jan 2015 – Dec 2016"
                result="GPA - 5.00 out of 5.00"
              ></Resume>
            </ol>
          </div>

          {/* job experiance */}
          <div className="mx-4">
            <h3 className=" text-white  mt-12 mb-12 uppercase text-2xl font-bold">
              Job Experiance
            </h3>
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 my-12 pl-2">
              <Resume
                name_of_institute="SSL Wireless"
                title="Software Specialist at SSL Wireless."
                year="Aug 2023 - Present"
                skill="MySQL · React.js · Node.js · Express.js · MongoDB · Redis · HTML · CSS · JavaScript · Next.js · Tailwind CSS · TypeScript · RabbitMQ · Bootstrap · Laravel · AJAX · Nest.js"
              ></Resume>
              <Resume
                name_of_institute="GrapView"
                title="Software Engineer at GrapView."
                year="Oct 2022 - Aug 2023"
                skill="MySQL · React.js · Node.js · Express.js · MongoDB · Redis · HTML · CSS · JavaScript · Next.js · Tailwind CSS · TypeScript · RabbitMQ · Bootstrap · Laravel · AJAX"
              ></Resume>
              <Resume
                name_of_institute="Freshosoft"
                title="Junior Software Engineer at Freshosoft."
                year="Dec 2021 - Oct 2022 "
                skill="Css · MySQL · HTML · JavaScript · Bootstrap · Laravel · AJAX · Reactjs · Nextjs ·  Vue.js"
              ></Resume>
              <Resume
                name_of_institute="Antooba Technologies Ltd"
                title="Junior Software Engineer at Antooba Technologies Ltd."
                year="Jan 2021 - Nov 2021 "
                skill="Css · MySQL · HTML · Bootstrap · Laravel · AJAX"
              ></Resume>

<Resume
                name_of_institute="Job Media Ltd, Zanvisionlabs, Baajar.net"
                title="Team Lead (Consultant) — Part-time"
                year="Jan 24 - Present"
                skill="Led development team and managed multiple projects &
Coordinated with clients and ensured timely delivery"
              ></Resume>
            </ol>
          </div>
        </section>
      </section>
      {/* testimonial */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold text-center">
          Testimonial
        </h4>
        <h1 className=" font-bold text-3xl md:text-6xl text-white text-center">
          What Clients Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 ">
          <Testimonial
            name="MD. Sabbir Hossain"
            designation="E-learning Consultant at Commonwealth of Learning"
            image="/images/c1.jpeg"
            description="A real asset to any company, A superb full-stack web developer with a keen interest in technology "
          ></Testimonial>

<Testimonial
            name="Eleas"
            designation="Ceo of Job Media Ltd"
            image="/images/eleas_bhai.png"
            description="Professional collaboration and clear communication throughout the project. Highly recommended for quality web development work."
          ></Testimonial>

<Testimonial
            name="Sajon"
            designation="Ceo of New tech & Baajar.net"
            image="/images/sajon_bhai.png"
            description="Reliable, skilled, and easy to work with. Delivered on time with excellent attention to detail."
          ></Testimonial>

          <Testimonial
            name="Hasan Talukder"
            designation="Ceo of grapGroup"
            image="/images/c2.jpg"
            description="With Bokhtiar Toshar, I had a pleasant experience, I think highly of his abilities as a software engineer "
          ></Testimonial>



          <Testimonial
            name="MD. Saidur Rahman"
            designation="Android Developer at Creatrix Soft Ltd"
            image="/images/saidur_bhai.png"
            description="He has completed numerous assignments for me and never failed to meet expectations. exceptionally serene and able to communicate "
          ></Testimonial>

          <Testimonial
            name="Nazmul Islam Koushik"
            designation="Ceo of Pencil Design studio"
            image="/images/c5.jpg"
            description="Excellent work, enjoyed their communication and behavior, excellent work, and a highly skilled laravel developer "
          ></Testimonial>

          <Testimonial
            name="Arjun Kumar"
            designation="professional designer"
            image="/images/c4.png"
            description="Working with Bokhtiar Toshar is really helpful and considerate. We look forward to working with him once more and strongly endorse his work "
          ></Testimonial>

          <Testimonial
            name="MD. Salauddin"
            designation="Ceo of Pencil Design studio"
            image="/images/c5.png"
            description="Excellent communication and help to work on our website development "
          ></Testimonial>

          
        
        </div>
      </section>
      {/* contact us */}
      <section className="my-32 container" id="contact-us">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold text-center">
          Contact
        </h4>
        <h1 className=" font-bold text-3xl md:text-6xl text-white text-center">
          Contact with me
        </h1>

        <div className="my-12 ">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8  md:my-auto">
            {/* information */}
            <div className=" md:col-span-1 mx-8 md:mx-0">
              <Card info="(DIU), Birulia, Savar, Dhaka-1216" index="1"></Card>
              <Card info="+880 1638-107361" index="2"></Card>
              <Card info="bokhtiar.swe@gmail.com" index="3"></Card>
              <Card info="Freelancers Available" index="4"></Card>
            </div>
            {/* contact form */}
            <div className="col-span-3 border rounded border-gray-800 md:min-h-[592px] ">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* footer us */}
      <section className=" ">
        <footer className="footer footer-center p-10 bg-primary  text-base-content rounded">
          <div>
            <Image
              src="/images/me.png"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-full"
            />
          </div>

          <div className="grid grid-flow-col gap-4 mt-[-20px]">
            {/* facebook */}
            <a
              className="bg-white rounded-full"
              href="https://www.facebook.com/bokhtiar172/"
              target="blank"
            >
              <Image
                src="/images/icon/fb.webp"
                width={30}
                height={30}
                alt="Picture of the author"
                className="border border-secondary rounded-full p-[2px] "
              />
            </a>

            {/* facebook */}
            <a
              className="bg-white rounded-full"
              href="https://www.instagram.com/bokhtiar_tushar/"
              target="blank"
            >
              <Image
                src="/images/icon/insta.webp"
                width={30}
                height={30}
                alt="Picture of the author"
                className=" border border-secondary rounded-full p-[2px]"
              />
            </a>

            {/* facebook */}
            <a className="bg-white rounded-full" href="">
              <Image
                src="/images/icon/twitter.webp"
                width={30}
                height={30}
                alt="Picture of the author"
                className=" border border-secondary rounded-full p-[2px]"
              />
            </a>

            {/* facebook */}
            <a
              className="bg-white rounded-full"
              href="https://github.com/Bokhtiar"
              target="blank"
            >
              <Image
                src="/images/icon/github.webp"
                width={30}
                height={30}
                alt="Picture of the author"
                className="border border-secondary rounded-full p-[2px]"
              />
            </a>

            {/* facebook */}
            <a
              className="bg-white rounded-full"
              href="https://www.linkedin.com/in/bokhtiarswe/"
              target="blank"
            >
              <Image
                src="/images/icon/linkdin.webp"
                width={30}
                height={30}
                alt="Picture of the author"
                className="border border-secondary rounded-full p-[2px]"
              />
            </a>
          </div>

          <div className="mt-[-30px] md:mt-[-50px]">
            <p className="text-gray-400">
              Copyright © 2023 - All right reserved by Me
            </p>
          </div>
        </footer>
      </section>
    </section>
  );
}
