import Image from "next/image";
import { Do } from "@/components/do/index";
import { Resume } from "@/components/resume";
import { Work } from "@/components/work/index";
import { Testimonial } from "@/components/testimonial";
import { PrimaryButton } from "@/components/button/index";
import { Card } from "@/components/card";


export default function Home() {
  return ( 
    <section className="bg-primary"> 
      {/* navbar */}
      <div className="navbar bg-primary container text-white py-4">
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
              <li>
                <a>HOME</a>
              </li>
              <li>
                <a>Services</a>
              </li>
              <li>
                <a>PORTFOLIO</a>
              </li>
              <li>
                <a>RESUME</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src="/images/logo1.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="rounded-full md:mt-[-8px]"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li>
              <a className="">HOME</a>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>PORTFOLIO</a>
            </li>
            <li>
              <a>RESUME</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
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
          <div className="md:col-span-1">
            <h2>
              <span className="text-3xl font-semibold">Hello, </span>{" "}
              <span className="text-secondary text-3xl font-semibold">
                I am
              </span>
            </h2>
            <h1 className="text-6xl 2xl:text-8xl font-bold my-2">
              Bokhtiar Toshar
            </h1>
            <h2 className="text-3xl 2xl:text-6xl font-semibold">Software engineer</h2>

            {/* about me */}
            <p className="my-12 text-gray-300 ">
              Hi, I am Bokhtiar Toshar a passionate Software Engineer: Laravel,
              Nodejs, Reactjs, Vuejs, nextjs, Database : MongoDB, MySql. Always
              I want to learn something
            </p>
            {/* find on me */}
            <div className="my-12">
              <h2 className="uppercase mb-2">Find ON Me</h2>
              <div className="flex items-center gap-3">
                {/* facebook */}
                <a
                  className="bg-white rounded"
                  href="https://www.facebook.com/bokhtiar172/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/fb.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                </a>

                {/* insta */}
                <a
                  className="bg-white rounded"
                  href="https://www.instagram.com/bokhtiar_tushar/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/insta.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
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
                  className="bg-white rounded"
                  href="https://github.com/Bokhtiar"
                  target="blank"
                >
                  <Image
                    src="/images/icon/github.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                </a>

                {/* facebook */}
                <a
                  className="bg-white rounded"
                  href="https://www.linkedin.com/in/bokhtiarswe/"
                  target="blank"
                >
                  <Image
                    src="/images/icon/linkdin.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
                  />
                </a>
              </div>

              {/* about exp and client */}
              <div className="flex items-center gap-4 md:gap-8 my-12">
                {/* experiance */}
                <p>
                  <span className="font-semibold text-3xl">2+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[12px]">
                    year of experiance
                  </span>
                </p>
                {/* client */}
                <p>
                  <span className="font-semibold text-3xl">20+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[12px]">
                    Global Client work
                  </span>
                </p>
                {/* Award */}
                <p>
                  <span className="font-semibold text-3xl">20+</span>
                  <br />
                  <span className=" uppercase text-gray-400 text-[12px]">
                    Awards win
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* right side content */}
          <div className="md:col-span-1">
            <Image
              src="/images/me.png"
              width={450}
              height={250}
              alt="Picture of the author"
              className=" rounded-xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* what i do */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          My services
        </h4>
        <h1 className=" font-bold text-6xl text-white">What I Do</h1>
        {/* services list */}
        <div className=" grid grid-cols-1 md:grid-cols-3 my-12 gap-8">
          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/web.png"
              title="Web Desing"
              description="Create dependable online Desings that passionately fulfill both your companys and your consumers needs."
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web Development"
              description="Make trustworthy internet designs that zealously satisfy the requirements of both your business and your customers."
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/api.png"
              title="API Development"
              description="Through application programming interfaces, two or more computer applications can communicate.  "
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="SRS"
              description="We use the most recent tools & practical approaches to make sure your digital solution is ready."
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Deploy Project"
              description="cPanel is an online Linux-based graphical interface (GUI) used as a control panel to simplify website and server management."
            ></Do>
          </div>
        </div>
      </section>

      {/* skill */}
      <section className="my-32 container">
        <h4 className="text-center uppercase text-secondary text-[12px] font-semibold">
          My skill
        </h4>
        <h1 className=" text-center font-bold text-6xl text-white">
          Visit My Skill & Hire Me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-12">
          <div className="bg-primary m-1 px-12 s shadow-2xl">
            <Image
              src="/images/html.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/css.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/bootstrap.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/18.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/13.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/jquery.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/ts.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/17.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/nextjs.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/vuejs1.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/nodejs.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/express-js.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/12.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/3.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/4.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/9.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/10.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/11.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/15.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/16.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/dt3.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
        </div>
      </section>

      {/* work */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          My Work
        </h4>
        <h1 className=" font-bold text-6xl text-white">Visit My Best Work</h1>
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          <Work
            name="GrapSchool"
            description="The goal of Grapschool, an IT training facility"
            website_link="https://grapschool.com/"
            image="/images/grapschoo.png"
            category="Education"
          ></Work>

          <Work
            name="GrapTown"
            description="Graptown Boys Hostel is a student hostel, Operated by GrapGroup"
            website_link="https://graptown.com/"
            image="/images/graptwon.png"
            category="Business"
          ></Work>

          <Work
            name="Asazaoa"
            description="One Platform for All Transport Services One app,all services at your fingertips."
            website_link="https://asazaoa.com/"
            image="/images/asajawa.png"
            category="Transport"
          ></Work>

          <Work
            name="Restura"
            description="Make Healthy Life With Fitbitesmeal. Delicious meal the way you want"
            website_link="https://restura-com.vercel.app/"
            image="/images/restura.png"
            category="Business"
          ></Work>

          <Work
            name="Bt-ecommerce"
            description="E-commerce is the buying and selling of goods and services over the internet."
            website_link="https://bokhtiar.github.io/bt-ecommerce.com/"
            image="/images/bt-original.png"
            category="Ecommerce"
          ></Work>


        </div>
      </section>

      {/* resume */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-center text-[12px] font-semibold">
          Years of experiance
        </h4>
        <h1 className=" font-bold text-6xl text-white text-center">
          My Resume
        </h1>

        {/* resume information */}
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* educaton */}
          <div className="mx-4">
            <h3 className=" text-white  mt-12 mb-12 uppercase text-2xl font-bold">
              Education
            </h3>
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 ">
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
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 my-12">
              <Resume
                name_of_institute="GrapView"
                title="GrapView at Software Engineer"
                year="Oct 2022 - Present"
                skill="MySQL · React.js · Node.js · Express.js · MongoDB · Redis · HTML · CSS · JavaScript · Next.js · Tailwind CSS · TypeScript · RabbitMQ · Bootstrap · Laravel · AJAX"
              ></Resume>
              <Resume
                name_of_institute="Freshosoft"
                title="Freshosoft at Junior Software Engineer"
                year="Dec 2021 - Oct 2022 "
                skill="Css · MySQL · HTML · JavaScript · Bootstrap · Laravel · AJAX · Vue.js"
              ></Resume>
              <Resume
                name_of_institute="Antooba Technologies Ltd"
                title="Antooba Technologies Ltd at Junior Software Engineer"
                year="Jan 2021 - Nov 2021 "
                skill="Css · MySQL · HTML · Bootstrap · Laravel · AJAX"
              ></Resume>
            </ol>
          </div>
        </section>
      </section>

      {/* testimonial */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          Testimonial
        </h4>
        <h1 className=" font-bold text-6xl text-white">What Clients Say</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
          <Testimonial
            name="mark cavin"
            designation="Ceo of sbrit"
            image="/images/me.png"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, "
          ></Testimonial>
        </div>
      </section>

      {/* contact us */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold text-center">
          Contact
        </h4>
        <h1 className=" font-bold text-6xl text-white text-center">
          Contact with me
        </h1>

        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8">
            {/* information */}
            <div className=" md:col-span-1 mx-8 md:mx-0">
              <Card
                info="Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216"
                index="1"
              ></Card>
              <Card info="+880 1638-107361" index="2"></Card>
              <Card info="bokhtiar.swe@gmail.com" index="3"></Card>
              <Card info="Freelancers Available" index="4"></Card>
            </div>
            {/* contact form */}
            <div className="col-span-3 s md:h-[600px] md:my-auto">
              <form action="" className="mx-8 md:mx-32 my-24">
                <div className="grid grid-cols-1 md:grid-cols-2   gap-12">
                  <input
                    type="text"
                    className="input input-bordered md:w-full  bg-primary s  text-secondary"
                    placeholder="Enter Your Name"
                    name=""
                    id=""
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full bg-primary s text-secondary  "
                    placeholder="Enter Your Phone"
                    name=""
                    id=""
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full bg-primary s  text-secondary"
                    placeholder="Enter Your Email"
                    name=""
                    id=""
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full bg-primary s  text-secondary"
                    placeholder="Enter Your Subject"
                    name=""
                    id=""
                  />
                </div>
                <textarea
                  className="bg-primary w-full input-bordered s mt-12  text-secondary"
                  rows={8}
                  cols={40}
                />

                <div className="text-center text-white mt-6">
                  <PrimaryButton name="Submit"></PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* footer us */}
      <section className=" ">
        <footer className="footer footer-center p-10 bg-primary  text-base-content rounded">
          <div>
            <Image
              src="/images/logo1.png"
              width={150}
              height={150}
              alt="Picture of the author"
              className="rounded-full"
            />
          </div>

          <div className="grid grid-flow-col gap-4 mt-[-20px]">
            {/* facebook */}
            <a className="bg-white rounded" href="">
              <Image
                src="/images/icon/fb.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full "
              />
            </a>

            {/* facebook */}
            <a className="bg-white rounded" href="">
              <Image
                src="/images/icon/insta.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full"
              />
            </a>

            {/* facebook */}
            <a className="bg-white rounded" href="">
              <Image
                src="/images/icon/twitter.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full"
              />
            </a>

            {/* facebook */}
            <a className="bg-white rounded" href="">
              <Image
                src="/images/icon/github.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full"
              />
            </a>

            {/* facebook */}
            <a className="bg-white rounded" href="">
              <Image
                src="/images/icon/linkdin.png"
                width={30}
                height={30}
                alt="Picture of the author"
                className="rounded-full"
              />
            </a>
          </div>

          <div className="mt-[-50px]">
            <p className="text-gray-400">
              Copyright © 2023 - All right reserved by Me
            </p>
          </div>
        </footer>
      </section>
    </section>
  );
}
