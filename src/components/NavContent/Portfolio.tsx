import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@nextui-org/react";

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
          <h1 className="font-bold text-5xl"> Some projects I made </h1>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-10  py-14 relative">
          <div
            className="cursor-pointer mt-6 flip__card__container h-[500px] lg:max-h-[400px]"
            onClick={handlerAirbnb}
          >
            <div className="flip__card">
              <div className="flip__card__front">
                <img
                  src="https://cdn.discordapp.com/attachments/890493745982767111/1090720765420253254/airbnb.png?ex=65fb3a5f&is=65e8c55f&hm=7da04a6429528d55dd59bff68365aa4709fddc20befe4564b807d86b88403cbd&"
                  alt="airbnb"
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
                <img
                  src="/mercedes.jpeg"
                  alt="mercedes"
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
                <img
                  src="/meipaly.png"
                  alt="meipaly"
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
            <img src="/meipaly.png" alt="meipaly" width={1200} height={4800} />
          </Modal.Body>
        </Modal>
      )}

      {picture == "Mercedes" && (
        <Modal noPadding open={visible} onClose={closeHandler} blur width="60%">
          <Modal.Body>
            <img
              src="/mercedes.jpeg"
              alt="meipaly"
              width={1200}
              height={4800}
            />
          </Modal.Body>
        </Modal>
      )}

      {picture == "Airbnb" && (
        <Modal noPadding open={visible} onClose={closeHandler} blur width="60%">
          <Modal.Body>
            <img
              src="/airbnb.png"
              alt="airbnb"
              width={1518}
              height={3787}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default Portfolios;
