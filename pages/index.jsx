import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Contact from "./contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Moses Ajila</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Moses Ajila</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://github.com/moses0x"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Moses Ajila
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend Software Developer
            </h3>
            <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi there! I&apos;m Moses. I&apos;m a frontend developer, with passion for building scaleable software tools/product that actually solve problems in the real world.
              I&apos;m a computer science student.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              In my spare time, i&apos;m an autodidact, love to read tech articles, go for a walk with myself present while listening to good music.
            </p>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/moses0x" target="_blank" rel="noreferrer"><AiFillGithub /></a>
              <a href="https://linkedin.com/mosesajila" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://x.com/mosesajila" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="hi" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <p className="text-md py-1 text-teal-500 uppercase ">Tools</p>
            <h3 className="text-3xl py-1 dark:text-white ">My Skills</h3>
            <p className="text-md py-2 leading-5 text-gray-800 dark:text-gray-200">
              Crafting <span className="text-teal-500"> competence </span> and <span className="text-teal-500">building mastery </span> in chosen field - discipline.
            </p>
          </div>
          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <FaHtml5 style={{ width: "50px", height: "50px" }} />
              <h3 className="text-lg font-medium pt-2 pb-1 ">
                HTML
              </h3>
              <p className="py-0">
                HTML is the standard markup language for creating Web pages.
              </p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <FaCss3 style={{ width: "50px", height: "50px" }} />
              <h3 className="text-lg font-medium pt-2 pb-1 ">
                CSS
              </h3>
              <p className="py-0">
                CSS is the language we use to style an HTML document.
              </p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <IoLogoJavascript style={{ width: "50px", height: "50px" }} />
              <h3 className="text-lg font-medium pt-2 pb-1 ">
                JavaScript
              </h3>
              <p className="py-0">
                JavaScript is the programming language of the Web.
              </p>
            </div>
          </div>


          <div className="lg:flex gap-5">
            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <SiTailwindcss style={{ width: "50px", height: "50px" }} />

              <h3 className="text-lg font-medium pt-2 pb-1 ">
                Tailwind CSS
              </h3>
              <p className="py-0">
                Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML
              </p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <FaReact style={{ width: "50px", height: "50px" }} />

              <h3 className="text-lg font-medium pt-2 pb-1 ">
                Reactjs
              </h3>
              <p className="py-0">
                React is the library for web and native user interfaces. Build user interfaces out of individual pieces called componets written in JavaScript.
              </p>
            </div>

            <div className="text-center shadow-lg p-5 rounded-xl my-10  dark:bg-white flex-1">
              <FaGithubSquare style={{ width: "50px", height: "50px" }} />

              <h3 className="text-lg font-medium pt-2 pb-1 ">
        
                Git/Github
              </h3>
              <p className="py-0">
                Git: free and open source distributed version control system designed to handle everything from small and very large projects with speed and efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div>
            <p className="text-md py-1 text-teal-500 uppercase ">Career</p>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Navigating my professional journey one role/one project at time.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://github.com/moses0x/Order-App">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
              <h4 className="text-md py-2 mt-4 text-teal-500 uppercase "><a href="https://github.com/moses0x/Order-App">Food Order App</a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                Navigating my professional journey one role/one project at time. my professional journey one role/one project at time. my professional journey one role/one project at time.
              </p>
            </div>

            <div className="basis-1/3 flex-1">
              <a href="https://basecampwave.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </a>
              <h4 className="text-md py-3 mt-4 text-teal-500 uppercase "><a href="https://github.com/moses0x/moses-brainwave">Brainwave Website</a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                Navigating my professional journey one role/one project at time. my professional journey one role/one project at time. my professional journey one role/one project at time.
              </p>

            </div>
            
            <div className="basis-1/3 flex-1">
              <a href="https://elegantcontextapi.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
              <h4 className="text-md py-3 mt-4 text-teal-500 uppercase "><a href="https://github.com/moses0x/Fashion-Store">Fashion Store</a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                 Fashion Store Website built on the concepts of React.js Context API. It includes some basic functionalities but that"s all there is about it. Just another step forward into understanding how to apply reactjs concepts.
              </p>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/moses0x/Basecamp">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </a>
              <h4 className="text-md py-3 mt-4 text-teal-500 uppercase "><a href="https://basecampapp.netlify.app/">Project Management App</a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                Navigating my professional journey one role/one project at time. my professional journey one role/one project at time. my professional journey one role/one project at time.
              </p>

            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://investmentcalcx.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </a>
              <h4 className="text-md py-3 mt-4 text-teal-500 uppercase "><a href="https://github.com/moses0x/Investment-calculator"> Investment Calculator App </a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                Navigating my professional journey one role/one project at time. my professional journey one role/one project at time. my professional journey one role/one project at time.
              </p>

            </div>
            
            <div className="basis-1/3 flex-1">
              <a href="#">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </a>
              <h4 className="text-md py-3 mt-4 text-teal-500 uppercase "><a href="#">Career</a></h4>
              <p className="text-md leading-6 text-gray-800 dark:text-gray-200">
                Navigating my professional journey one role/one project at time. my professional journey one role/one project at time. my professional journey one role/one project at time.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}
