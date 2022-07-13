import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "font-awesome/css/font-awesome.min.css";

const Contact: React.FC = () => {
  const form = useRef();

function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ro4n36e",
        "template_tzwcw6n",
        form.current as any,
        "m2IxhUivS47W9raw7"
      )
      .then(
        (result) => {
          alert("You have successfully sent your message, Chương will get back to you soon!");
        },
        (error) => {
          alert("There was an error when sending your message. Please try again.");
        }
      );

      e.currentTarget.reset();
  };

  return (
    <section className=" bg-pink-100 min-h-[100vh]  xl:px-[10%] xl:pl-[25%] sm:px-[40px] py-[6%] animate">
      <div className="text-center space-y-4 pb-20">
        <h1 className="font-bold text-3xl"> Want to talk with me? </h1>
      </div>

      <h2 className="font-semibold text-2xl text-center">
        You can contact via:
      </h2>

      <div className="py-14 relative">
        <ul className="flex contact__item absolute w-full space-x-5 justify-between ">
          <li>
            <a
              href="https://www.facebook.com/cmtchuong/"
              className=""
              target="_blank"
            >
              <i className="fa fa-facebook item text-center justify-end mt-4"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_cmtiezz" target="_blank">
              <i className="fa fa-twitter item mt-3"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/cmtchuong" target="_blank">
              <i className="fa fa-linkedin item"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/cmtchuong" target="_blank">
              <i className="fa fa-github item"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="">
        <div className="flex items-center py-14">
          <hr className=" h-[1px] bg-pink-700 mr-3 w-full flex-1  "></hr>
          <div className="font-semibold text-sm text-pink-800">OR</div>
          <hr className="h-[1px] bg-pink-700 ml-3 w-full flex-1  "></hr>
        </div>

        <form
          ref={form as any}
          onSubmit={sendEmail}
          className="p-6 lg:mx-[15%] border-4 border-pink-500 rounded-lg space-y-6"
        >
          <div>
            <label className="text-base font-semibold">Name: </label>
            <br></br>
            <input
              required
              type="text"
              name="user_name"
              className="text-base font-medium bg-pink-100 border-b border-black w-full"
            />
          </div>

          <div>
            <label className="text-base font-semibold">Email:</label>
            <input
              required
              type="email"
              name="user_email"
              className="text-base font-medium bg-pink-100 border-b border-black w-full"
            />
          </div>

          <div>
            <label className="text-base font-semibold">Message:</label>
            <textarea
              required
              name="message"
              className="text-base font-medium bg-pink-100 border border-black w-full mt-4 p-4"
            />
          </div>

          <input
            type="submit"
            value="Ready to talk!"
            className="cursor-pointer p-4 px-8 bg-pink-100 border-pink-600 border-4 hover:bg-gradient-to-r from-[#e61e4d] to-[#d70466] w-full rounded-xl py-3 mt-5 hover:text-white text-pink-800 active:bg-pink-500 hover:shadow-xl active:scale-90 transition duration-300 font-semibold"
          />
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
