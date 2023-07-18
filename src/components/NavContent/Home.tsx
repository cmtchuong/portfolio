import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home: React.FC = () => {
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Designer",
        "Automation Testing Engineer",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      cursorChar: '_',
    };

    // elRef refers to the rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed?.current?.destroy();
    };
  }, []);

  return (
    <section className=" bg-blue-100 min-h-[100vh]  xl:px-[10%] xl:pl-[25%] sm:px-[40px] py-[6%] flex animate">
      <div className="space-y-2 max-w-[600px] px-4">
        <h1 className="text-2xl font-semibold flex flex-col lg:flex-row">
          <span className="lg:self-center mr-3 font-bold">Hello, my name is </span>
          <img
            src="https://media.discordapp.net/attachments/890493745982767111/994972023161880656/signature.png"
            className="w-[200px] h-[100px]"
            alt="signature_name"
          ></img>
        </h1>
        <div className="">
          <h2 className="text-2xl font-semibold">I am working as</h2>
          <div className="type-wrap">
            <span className="text-base sm:text-3xl font-semibold font__mont text-yellow-700" style={{ whiteSpace: "pre" }} ref={el} />
          </div>
        </div>

        <p className="text-black font-semibold text-lg py-8 leading-10">
          A young and enthusiastic guy who always look for new challenges
          everyday. Currently pushing in Automation Testing and also try new things
          like Back-End or DevOps stuff...
        </p>
      </div>

      <div className="profile md:block relative p-10 hidden flex-grow ">
        <img
          src={
            "https://cdn.discordapp.com/attachments/890493745982767111/994939908244394014/IMG_20180206_121342_303-removebg-preview.png"
          }
          className="profile__image mt-12"
          alt="profile_image"
        />
      </div>
    </section>
  );
};
export default Home;
