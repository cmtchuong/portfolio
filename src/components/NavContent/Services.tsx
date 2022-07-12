import React from "react";
import { CurrencyDollarIcon, DeviceMobileIcon, CursorClickIcon, ServerIcon, UserGroupIcon, CheckCircleIcon } from "@heroicons/react/outline";

const Service: React.FC = () => {
  return (
    <section className=" bg-[#002d13] min-h-[100vh]  xl:px-[10%] xl:pl-[25%] sm:px-[40px] py-[6%] animate">
      <div className="text-center space-y-4">
        <h1 className="font-bold text-3xl text-white"> Services </h1>
        <h2 className="font-semibold text-xl text-white">
          Simplicity is the ultimate sophistication
        </h2>
      </div>

      <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-3 lg:gap-4 py-14">
        <div className="border-4 border-green-500 rounded-md p-6 service mt-[24px]">
          <CurrencyDollarIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Low price</h1>
          <p className="font-semibold service__items">
            Already have a vision? Let me make that into product that you can use in your business.
          </p>
        </div>

        <div className="border-4 border-green-500 rounded-md p-6 service">
          <DeviceMobileIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Responsive</h1>
          <p className="font-semibold service__items">
            Make it simple and easy-looking in every devices. Just give me a plan and I will make it happen.
          </p>
        </div>

        <div className="border-4 border-green-500 rounded-md p-6 service">
          <CursorClickIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Interactive</h1>
          <p className="font-semibold service__items">
            My designed interactive website is mainly focus on usability, impact and achieving results.
          </p>
        </div>

        <div className="border-4 border-green-500 rounded-md p-6 service">
          <ServerIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Web Update</h1>
          <p className="font-semibold service__items">
            You want something new to level up your website? You found the right place. 
          </p>
        </div>

        <div className="border-4 border-green-500 rounded-md p-6 service">
          <UserGroupIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Web Manage</h1>
          <p className="font-semibold service__items">
            No more worry about website being shut down suddenly. Your website will always be up and running.
          </p>
        </div>

        <div className="border-4 border-green-500 rounded-md p-6 service">
          <CheckCircleIcon className="w-12 h-12 mr-5 float-left service__items" />
          <h1 className="font-bold text-xl service__items">Web Audit</h1>
          <p className="font-semibold service__items">
            Looking to improve website performance, security or SEO? I will do my best to help you.
          </p>
        </div>
      </div>


    </section>
  );
};
export default Service;
