import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Text, Link, useModal } from "@nextui-org/react";

const Portfolios: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [picture, setPicture] = useState("");
  const handlerAirbnb = () => {
    setPicture("Airbnb");
    setVisible(true);
  };
  const handlerMercedes = () => {
    setPicture("Mercedes");
    setVisible(true);
  };
  const handlerMeipaly = () => {
    setPicture("Meipaly");
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <>
      <section className=" bg-yellow-50 min-h-[100vh]  xl:px-[10%] xl:pl-[25%] sm:px-[40px] py-[6%] animate">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-3xl"> Some projects I made </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10  py-14 relative">
          <div
            className="cursor-pointer mt-6 flip__card__container h-[500px] lg:max-h-[400px]"
            onClick={handlerAirbnb}
          >
            <div className="flip__card">
              <div className="flip__card__front">
                <Image
                  src="/airbnb.png"
                  alt="airbnb"
                  layout="fill"
                  className="object-cover object-top rounded-lg"
                />
              </div>

              <div className="flip__card__back bg-pink-600 p-6 text-center">
                <a className="font-semibold text-xl">
                  Travel booking cloned Airbnb (2022)
                </a>

                <div className="border border-black"></div>
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer mt-6 flip__card__container h-[500px] lg:max-h-[400px]"
            onClick={handlerMercedes}
          >
            <div className="flip__card">
              <div className="flip__card__front">
                <Image
                  src="/mercedes.jpeg"
                  alt="mercedes"
                  layout="fill"
                  className="object-cover object-top rounded-lg"
                />
              </div>

              <div className="flip__card__back bg-black text-center p-6">
                <a className="font-semibold text-xl">Mercedes Layout (2021)</a>
              </div>
            </div>
          </div>

          <div
            className="cursor-pointer mt-6 flip__card__container h-[500px] lg:max-h-[400px]"
            onClick={handlerMeipaly}
          >
            <div className="flip__card">
              <div className="flip__card__front">
                <Image
                  src="/meipaly.png"
                  alt="meipaly"
                  layout="fill"
                  className="object-cover object-top rounded-lg"
                />
              </div>

              <div className="flip__card__back bg-gray-300 text-center p-6">
                <a className="font-semibold text-xl !text-black">
                  Meipaly (2021)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {picture == "Meipaly" && (
        <Modal noPadding open={visible} onClose={closeHandler} blur width="60%">
          <Modal.Body>
            <Image
              src="/meipaly.png"
              alt="meipaly"
              width={1896}
              height={8887}
            />
          </Modal.Body>
        </Modal>
      )}

      {picture == "Mercedes" && (
        <Modal noPadding open={visible} onClose={closeHandler} blur width="60%">
          <Modal.Body>
            <Image
              src="/mercedes.jpeg"
              alt="meipaly"
              width={1755}
              height={6432}
            />
          </Modal.Body>
        </Modal>
      )}

      {picture == "Airbnb" && (
        <Modal noPadding open={visible} onClose={closeHandler} blur width="60%">
          <Modal.Body>
            <Image src="/airbnb.png" alt="meipaly" width={1898} height={4734} />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default Portfolios;
