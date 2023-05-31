import Image from "next/image";
import { Do } from "../components/do/index";
import { Resume } from "@/components/resume";
import { Work } from "../components/work/index";
import { PrimaryButton } from "../components/button/index";


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
              src="/images/logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className="rounded-full"
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
              <span className="text-secondary text-3xl font-semibold">I'm</span>
            </h2>
            <h1 className="text-6xl font-bold my-2">Bokhtiar Toshar</h1>
            <h2 className="text-3xl font-semibold">Software engineer</h2>

            {/* about me */}
            <p className="my-12 text-gray-400 ">
              Hi, I am Bokhtiar Toshar a passionate Software Engineer: Laravel,
              Nodejs, Reactjs, Vuejs, nextjs, Database : MongoDB, MySql. Always
              I want to learn something
            </p>
            {/* find on me */}
            <div className="my-12">
              <h2 className="uppercase mb-2">Find ON Me</h2>
              <div className="flex items-center gap-3">
                {/* facebook */}
                <a className="bg-white rounded" href="">
                  <Image
                    src="/images/icon/fb.png"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                    className="rounded-full"
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
              src="/images/logo.png"
              width={450}
              height={250}
              alt="Picture of the author"
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </section>

      {/* what i do */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          My services
        </h4>
        <h1 className=" font-bold text-4xl text-white">What I Do</h1>
        {/* services list */}
        <div className=" grid grid-cols-1 md:grid-cols-3 my-12 gap-8">
          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>

          <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
            <Do
              logo="/images/icon/github.png"
              title="Web development"
              description="Reference site about Lorem Ipsum, giving information on its origins,"
            ></Do>
          </div>
        </div>
      </section>

      {/* skill */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          My skill
        </h4>
        <h1 className=" font-bold text-4xl text-white">
          Visit My Skill & Hire Me
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 my-12">
          <div className="bg-primary m-1 px-12 s shadow-2xl">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>
          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
              width={60}
              height={60}
              alt="Picture of the author"
              className="mx-auto py-5 rounded"
            />
          </div>

          <div className="bg-primary m-1 px-12 s ">
            <Image
              src="/images/laravel.png"
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
        <h1 className=" font-bold text-4xl text-white">Visit My Best Work</h1>
        <div className="my-12 grid grid-cols-1 md:grid-cols-4 gap-7">
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
          <Work
            name="Resturant managment system with post"
            website_link=""
            image="/images/pos.jpeg"
            category="Ecomerce"
          ></Work>
        </div>
      </section>

      {/* resume */}
      <section className="my-32 container">
        <h4 className=" uppercase text-secondary text-[12px] font-semibold">
          Years of experiance
        </h4>
        <h1 className=" font-bold text-4xl text-white">My Resume</h1>

        {/* resume information */}
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* educaton */}
          <div>
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 my-12">
              <Resume name_of_institute=" Bachelor of Software Engineering" title="B.Sc in Software Engineering Daffodil International
                    University (DIU)" year="Jan 2017 – Dec 2020" result="CGPA - 3.25 out of 4.00"></Resume>
              <Resume name_of_institute=" Higher Secondary School Certificate" title="Higher Secondary at Darunnazt Siddikiea Kamil Madrasha (DSKM)" year="Jan 2015 – Dec 2016" result="GPA - 4.96 out of 5.00"></Resume>
              <Resume name_of_institute="Secondary School Certificate" title="Secondary School at Darunnazt Siddikiea Kamil Madrasha (DSKM)" year="Jan 2015 – Dec 2016" result="GPA - 5.00 out of 5.00"></Resume>
            </ol>
          </div>

          {/* job experiance */}
          <div>
            <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 my-12">
              
            <Resume name_of_institute="GrapView" title="GrapView at Software Engineer" year="Oct 2022 - Present" skill="MySQL · React.js · Node.js · Express.js · MongoDB · Redis · HTML · CSS · JavaScript · Next.js · Tailwind CSS · TypeScript · RabbitMQ · Bootstrap · Laravel · AJAX"></Resume>
            <Resume name_of_institute="Freshosoft" title="Freshosoft at Junior Software Engineer" year="Dec 2021 - Oct 2022 " skill="Css · MySQL · HTML · JavaScript · Bootstrap · Laravel · AJAX · Vue.js"></Resume>
            <Resume name_of_institute="Antooba Technologies Ltd" title="Antooba Technologies Ltd at Junior Software Engineer" year="Jan 2021 - Nov 2021 " skill="Css · MySQL · HTML · Bootstrap · Laravel · AJAX"></Resume>
            </ol>
          </div>
        </section>
      </section>
    </section>
  );
}
