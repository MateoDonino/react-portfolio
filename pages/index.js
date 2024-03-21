import Image from "next/image";
import deved from "../public/avatar.png";
import { Inter } from "next/font/google";
import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Icon } from "@iconify/react";
import web1 from "../public/web1.PNG";
import web2 from "../public/web2.PNG";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mateo Donino Portfolio</title>
        <meta name="description" content="Genrated by creators"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className=" bg-gradient-to-b from-black to-slate-800 px-10 md:px-20 lg:px-40">
        <section className=" min-h-screen">
          {/* NAVBAR */}
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-2xl font-medium text-white">PORTFOLIO.</h1>
            <ul className=" flex items-center">
              <li>
                <a
                  className=" button bg-gradient-to-r from-yellow-100 to-yellow-300 text-black px-3 py-3 rounded-md"
                  href="https://drive.google.com/file/d/1ASsnNtI-Z9mKJCoMgdCS3IUQdVQzA8a7/view?usp=drive_link"
                  download="mi-cv.pdf"
                  target="_blanck"
                >
                  Chequea mi CV
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center">
            <h2 className=" text-5xl py-2 text-white font-medium md:text-6xl">
              Mateo Donino
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl font-medium text-yellow-200">
              Full Stack Developer
            </h3>
            <p className=" text-md py-2 leading-8 text-white md:text-xl">
              Hola! Me presento, soy Mateo y soy Programador, apasionado por
              crear soluciones web innovadoras y eficientes. Domino tecnologías
              Frontend como HTML5, CSS3, JavaScript y ReactJS, y Backend como
              Node.js, Express.js, MongoDB y Java. Mi enfoque se basa en la
              colaboración y la entrega de resultados de alta calidad. Me adapto
              fácilmente a diferentes entornos y siempre estoy dispuesto a
              aprender y afrontar nuevos desafíos.
            </p>
          </div>
          <div className=" relative mx-auto rounded-full w-80 h-80 overflow-hidden p-10 m-10">
            <Image src={deved} layout="fill" objectFit="contain" />
          </div>
          <div className=" text-5xl flex justify-center gap-16 text-gray-300 p-2 m-2">
            <a
              href="https://www.linkedin.com/in/mateo-donino-583035192/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/MateoDonino" target="_blank">
              <AiFillGithub />
            </a>
          </div>

          {/* HERRAMIENTAS */}

          <div className=" ">
            <div className=" flex justify-center gap-16 p-6 m-6 text-center">
              <h3 className=" text-3xl font-medium text-yellow-100">
                LENGUAJES Y FRAMEWORKS.
              </h3>
            </div>
            <div className=" icon-container text-4xl flex justify-center gap-16 mt-10">
              <Icon icon="devicon:html5" />
              <Icon icon="devicon:css3" />
              <Icon icon="devicon:javascript" />
              <Icon icon="devicon:react" />
              <Icon icon="devicon:java" />
              <Icon icon="devicon:nodejs-wordmark" />
              <Icon icon="devicon:mongodb-wordmark" />
              <Icon icon="skill-icons:expressjs-light" />
              <Icon icon="devicon:tailwindcss" />
              <Icon icon="devicon:git" />
              <Icon icon="devicon:nextjs" />
            </div>
          </div>

          {/* PROYECTOS */}

          <div className=" text-center md:text-xl mt-12">
            <h3 className=" text-3xl font-medium text-yellow-100">
              PROYECTOS.
            </h3>
          </div>

          {/* CARD */}

          <div className=" lg:flex gap-10">
            <div className=" text-center shadow-2xl p-10 rounded-3xl my-10 container mx-auto">
              <a href="https://react-portfolio-steel-sigma.vercel.app/">
                <Image
                  src={web2}
                  className=" mx-auto rounded-lg object-cover"
                />
              </a>
              <h3 className=" text-3xl font-medium pt-8 pb-2 text-yellow-100">
                Portfolio
              </h3>
              <p className=" text-md py-2 leading-7 text-white">
                Si, este mismo proyecto. Portfolio web con mi resumen, donde se
                puede encontrar mi CV como tambien el poder interactuar para
                poder ir a mi LinkedIn y a las paginas de los proyectos.
                Programado con React, Next.js y Taildwind CSS.
              </p>
              <div className=" mt-12">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-100 to-yellow-300 text-black font-medium px-5 py-3 rounded-md"
                  href="https://react-portfolio-steel-sigma.vercel.app/"
                  target="_autoblanck"
                >
                  IR A LA WEB
                </a>
              </div>
              <div className=" mt-10">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-medium px-5 py-3 rounded-md"
                  href="https://github.com/MateoDonino/react-portfolio.git"
                  target="_autoblanck"
                >
                  CODIGO EN GITHUB
                </a>
              </div>
            </div>
            <div className=" text-center shadow-2xl p-10 rounded-3xl my-10 container mx-auto">
              <a href="https://react-portfolio-steel-sigma.vercel.app/">
                <Image
                  src={web2}
                  className=" mx-auto rounded-lg object-cover"
                />
              </a>
              <h3 className=" text-3xl font-medium pt-8 pb-2 text-yellow-100">
                Portfolio
              </h3>
              <p className=" text-md py-2 leading-7 text-white">
                Si, este mismo proyecto. Portfolio web con mi resumen, donde se
                puede encontrar mi CV como tambien el poder interactuar para
                poder ir a mi LinkedIn y a las paginas de los proyectos.
                Programado con React, Next.js y Taildwind CSS.
              </p>
              <div className=" mt-12">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-100 to-yellow-300 text-black font-medium px-5 py-3 rounded-md"
                  href="https://react-portfolio-steel-sigma.vercel.app/"
                  target="_autoblanck"
                >
                  IR A LA WEB
                </a>
              </div>
              <div className=" mt-10">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-medium px-5 py-3 rounded-md"
                  href="https://github.com/MateoDonino/react-portfolio.git"
                  target="_autoblanck"
                >
                  CODIGO EN GITHUB
                </a>
              </div>
            </div>
            <div className=" text-center shadow-2xl p-10 rounded-3xl my-10 container mx-auto">
              <a href="https://react-portfolio-steel-sigma.vercel.app/">
                <Image
                  src={web2}
                  className=" mx-auto rounded-lg object-cover"
                />
              </a>
              <h3 className=" text-3xl font-medium pt-8 pb-2 text-yellow-100">
                Portfolio
              </h3>
              <p className=" text-md py-2 leading-7 text-white">
                Si, este mismo proyecto. Portfolio web con mi resumen, donde se
                puede encontrar mi CV como tambien el poder interactuar para
                poder ir a mi LinkedIn y a las paginas de los proyectos.
                Programado con React, Next.js y Taildwind CSS.
              </p>
              <div className=" mt-12">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-100 to-yellow-300 text-black font-medium px-5 py-3 rounded-md"
                  href="https://react-portfolio-steel-sigma.vercel.app/"
                  target="_autoblanck"
                >
                  IR A LA WEB
                </a>
              </div>
              <div className=" mt-10">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-medium px-5 py-3 rounded-md"
                  href="https://github.com/MateoDonino/react-portfolio.git"
                  target="_autoblanck"
                >
                  CODIGO EN GITHUB
                </a>
              </div>
            </div>
            <div className=" text-center shadow-2xl p-10 rounded-3xl my-10 container mx-auto">
              <a href="https://react-portfolio-steel-sigma.vercel.app/">
                <Image
                  src={web2}
                  className=" mx-auto rounded-lg object-cover"
                />
              </a>
              <h3 className=" text-3xl font-medium pt-8 pb-2 text-yellow-100">
                Portfolio
              </h3>
              <p className=" text-md py-2 leading-7 text-white">
                Si, este mismo proyecto. Portfolio web con mi resumen, donde se
                puede encontrar mi CV como tambien el poder interactuar para
                poder ir a mi LinkedIn y a las paginas de los proyectos.
                Programado con React, Next.js y Taildwind CSS.
              </p>
              <div className=" mt-12">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-100 to-yellow-300 text-black font-medium px-5 py-3 rounded-md"
                  href="https://react-portfolio-steel-sigma.vercel.app/"
                  target="_autoblanck"
                >
                  IR A LA WEB
                </a>
              </div>
              <div className=" mt-10">
                <a
                  className=" button-container bg-gradient-to-r from-yellow-300 to-yellow-100 text-black font-medium px-5 py-3 rounded-md"
                  href="https://github.com/MateoDonino/react-portfolio.git"
                  target="_autoblanck"
                >
                  CODIGO EN GITHUB
                </a>
              </div>
            </div>
          </div>

          {/* SERVICIOS */}

          <div className="text-center py-10 text-white md:text-xl">
            <h3 className=" text-3xl py-1 font-medium text-yellow-100">
              SERVICIOS QUE OFREZCO.
            </h3>
            <p className=" text-md py-2 leading-8 text-white">
              <span className=" text-yellow-200 font-medium">
                Diseño y desarrollo web:{" "}
              </span>
              puedo crear sitios web y aplicaciones web a medida que se adapten
              a tus necesidades específicas, utilizando las últimas tecnologías
              y frameworks disponibles.
              <span className=" text-yellow-200 font-medium">
                {" "}
                Consultoría:{" "}
              </span>
              te puedo asesorar en la selección de la mejor tecnología para tu
              proyecto, analizar los requisitos y planificar el desarrollo,
              gestionar equipos de desarrollo e implementar metodologías ágiles
              de desarrollo.
              <span className=" text-yellow-200 font-medium">
                {" "}
                Soporte técnico:{" "}
              </span>
              puedo ayudarte a solucionar problemas técnicos y errores, brindar
              asistencia técnica a usuarios y clientes, implementar medidas de
              seguridad y prevención de errores, y actualizar y mantener tu
              software.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
