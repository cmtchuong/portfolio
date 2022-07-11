import React from "react";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section className=" min-h-[100vh]  xl:px-[10%] xl:pl-[25%] sm:px-[40px] py-[6%] animate bg-purple-100">
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-3xl"> About Me </h1>
        <h2 className="font-semibold text-xl">
          Web Developer, Software Engineering, Young Learner{" "}
        </h2>
      </div>
      <div className="lg:flex-row flex flex-col py-12">
        <div className="border-4 border-indigo-200 shadow-md p-6 rounded-l-md">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">
                Greetings, I'm{" "}
                <span className="font-bold text-indigo-700">
                  Tô Đoàn Cao Chương
                </span>
              </h1>
              <div className=" sm:mr-6">
                <button className="font-bold resume__button p-3 border-2 border-indigo-500 max-h-[50px] rounded relative z-10 inline-block">
                  Resume
                </button>
              </div>
            </div>
            <h2 className="text-xl font-semibold py-6">
              I am currently working on Front-End stuff
            </h2>
          </div>
          <p className="text-lg font-semibold">
            Starting this journey later than my friends, but I finally found
            myself a way to begin my passion for Technologies. I described
            myself as a passionate developer who loves coding, learning new
            things and always looking for new challenges.
          </p>
          <br></br>
          <p className="text-lg font-semibold">
            Based in Ho Chi Minh City, I can speak well in English. I am also a
            good team player and can adapt quickly in workspaces.
          </p>

          <br></br>
          <p className="text-lg font-semibold">
            Aside my studies at school, I like to create and sometimes
            contribute to open source projects. That helps me to learn new
            stuffs, as well as grow my developer skills and support other open
            source projects. (maybe in the future I will also write some
            technical things ✍️ in here too).
          </p>
        </div>

        <div className="flex flex-col flex-grow min-w-[200px] border-4 lg:border-l-0 border-indigo-200 shadow-md rounded-r-md">
          <div className="border-b-4 border-indigo-200 p-6 h-2/3">
            <h2 className="font-semibold text-center">Front-End Stack</h2>
            <div className="lg:grid lg:grid-cols-3 py-4 gap-3 gap-y-4 grid grid-cols-6">
              <Image src="/html.png" width={40} height={40} />

              <Image src="/css.png" width={40} height={40} />

              <Image src="/js.png" width={40} height={40} />
              <Image src="/sass.png" width={40} height={40} />

              <Image src="/bs.png" width={40} height={40} />

              <Image src="/reactjs.png" width={40} height={40} />

              <Image src="/nextjs.png" width={40} height={40} />
              <Image src="/typescript.png" width={40} height={40} />

              <Image src="/react_query.png" width={40} height={40} />
              <Image src="/tailwind.png" width={40} height={40} />
            </div>
          </div>

          <div className="p-6">
            <h2 className="font-semibold text-center">DevOps Stack</h2>
            <div className="lg:grid lg:grid-cols-3 py-4 gap-3 gap-y-4 grid grid-cols-6">
              <Image src="/docker.png" width={40} height={40} />
              <Image src="/k8s.png" width={40} height={40} />
              <Image src="/gcp.png" width={40} height={40} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div className="border-4 border-indigo-200 shadow-md p-6 rounded-l-md lg:w-1/2 ">
          <h1 className="text-2xl font-bold pb-6">Experience</h1>
          <div className="border-l border-gray-300 py-6 px-4">
            <h1 className="font-semibold text-lg job__header relative">
              Front-End Developer, Software Engineer
            </h1>
            <h2 className="font-semibold text-indigo-700">2021 - Present</h2>
            <p className="text-base font-semibold">
              Improve and make yourself better is never an easy journey, so I
              decided to take an training course in Front-End as a way to learn
              new more things. After complete the course, I got myself ways to
              improve and where I can self-study. So now I currently learning
              more in Front-End and also having a little Back-End and DevOps to
              continue my journey as a Full-Stack developer, and more!{" "}
            </p>
          </div>

          <div className="border-l border-gray-300 py-6 px-4">
            <h1 className="font-semibold text-lg job__header relative">
              WordPress Developer, Graphic Designer
            </h1>
            <h2 className="font-semibold text-indigo-700">2020 - Present</h2>
            <p className="text-base font-semibold">
              At the beginning of sophomore, when I can't decide what my path
              that I'm heading to is, I participated in an Web campaign in Green
              Summer Volunteer Federation where I can learn some web design made
              by WordPress. After training in a week, I managed to make a simple
              portfolio and eCommerce Website in there. This is when I learn
              more about WordPress and start to decide my carrer path.
            </p>
          </div>

          <div className="border-l border-gray-300 py-6 px-4">
            <h1 className="font-semibold text-lg job__header relative">
              Presentation Designer
            </h1>
            <h2 className="font-semibold text-indigo-700">
              2014 - 2019 | Self-employed
            </h2>
            <p className="text-base font-semibold">
              Since I was in secondary school and highschool, I always handle
              with most of the Powerpoint presentations in our group or in
              class. So I decided to help making design presentations for my
              friends. In 2019, I also participated in MOS Powerpoint and got
              Certificate of Merit.
            </p>
          </div>
        </div>

        <div className="border-4 lg:border-l-0 border-indigo-200 shadow-md p-6 rounded-r-md lg:w-1/2">
          <h1 className="text-2xl font-bold pb-6">Education</h1>
          <div className="flex flex-col justify-between h-[92%] border-l border-gray-300">
            <div className="py-6 px-4">
              <h1 className="font-semibold text-lg job__header relative">
                Unviversity (Post Graduation)
              </h1>
              <h2 className="font-semibold text-indigo-700">
                2019 - First half 2023 (Excepted)
              </h2>
              <p className="text-base font-semibold">
                But the interest won't last long when I somehow feel tired of my
                majors in Sophomore. So I decide to follow Web Developer career
                path and continue my journey in here. My goal is not only
                skilled in Front-End, but manage to dig more in different
                technologies, architectures to become a fully Programmer,
                continue writing my own journey.{" "}
              </p>
            </div>

            <div className="py-6 px-4">
              <h1 className="font-semibold text-lg job__header relative">
                Graduation
              </h1>
              <h2 className="font-semibold text-indigo-700">Summer 2019</h2>
              <p className="text-base font-semibold">
                At that time, my interest in Security somehow began and I
                managed to enroll at the University of Information Technology
                (UIT) in Information Security majors.
              </p>
            </div>

            <div className="py-6 px-4">
              <h1 className="font-semibold text-lg job__header relative">
                High School
              </h1>
              <h2 className="font-semibold text-indigo-700">2016 - 2019</h2>
              <p className="text-base font-semibold">
                This is a golden time when I enjoy playing computers, I do love
                technologies and always get a high mark in Computer subject, or
                when I participate in Excellent Student. I also earn my first
                money as a Presentation Designer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
