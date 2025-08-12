import React from "react";
import "./style.css";
import { Koulen } from "next/font/google";
import Image from "next/image";
import calculator from "../../public/assets/Calculator.png";
import ProgressBar from "./ProgressBar";
import { Container } from "reactstrap";
import ads6 from "../../public/assets/Ads─▒z_Resim 6.png";
import alian4 from "../../public/assets/alien4 1.png";
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export default function Calculator() {
  return (
    <>
      <div
        className={`${koulenFont.className} calculator-background-img pt-[22vh] pb-[20vh] relative`}
      >
        <div className="sub-cal-section w-[40vw] mx-auto">
          <Image
            src={calculator}
            alt="calculator"
            className="w-[30vw] h-[20vh] flex mx-auto calc"
          />
          <div
            className={`headercal bg-[#0487ab] pt-4 pl-5 pr-5 pb-4 border-[4px] border-[#003e58] rounded ${koulenFont.className}`}
          >
            <div className="subheadercal bg-[#003e58] rounded pt-3 pb-2 pl-1 pr-3">
              <div className="bg-[#376c8a] pt-[6px] pl-[20px] pr-[20px] pb-[6px]">
                <div className="text-[20px] text-[#FFFFFF]">
                  <p className="text-dark Pump-Calculator [-webkit-text-stroke:1px_#D6FF00] text-center text-[2vw] mb-0 pb-0 mt-0">
                    Try The $LBRETT Pump Calculator
                  </p>
                </div>
                {/* pay with eth section */}
                <div className="pay-with-eth-section mt-1 flex flex-col gap-2 w-full flex-wrap">
                  {/* Upper div */}
                  <div className="pay-with-eth text-white flex items-center gap-4 w-full flex-wrap">
                    <span className="whitespace-nowrap mr-[10vw]">Amount:</span>
                    <input
                      defaultValue={1000}
                      className=" bg-[#138DB1] text-white text-[24px] font-normal font-koulen py-[3px]  px-3 rounded-[5px] outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58] w-[27rem]"
                    />
                  </div>

                  {/* Lower div */}
                  <div className="pay-with-eth text-white flex items-center gap-4 w-full flex-wrap">
                    <span className="whitespace-nowrap mr-[10vw]">
                      $LBRETT:
                    </span>
                    <input
                      defaultValue={1000000}
                      className="bg-[#138DB1] text-white text-[24px] font-normal font-koulen py-[3px] px-3 rounded-[5px] outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58] w-[27rem]"
                    />
                  </div>
                </div>
                <div className="not-have-enough">
                  <p className="text-[#FFFFFF7D] text-[18px] text-center mt-2 mb-2">
                    Adjust the slider to view the value of your<br></br> $LBRETT
                    coins at various price levels.
                  </p>
                </div>

                {/* Avatar and Progress */}
                <div className="flex mt-2">
                  <div className="w-full">
                    <ProgressBar />
                  </div>
                </div>

                <div className="main-layer-brett-button flex justify-between items-center flex-wrap">
                  <div className="main-layer-sec">
                    <p className="text-white pt-[10px] pb-0 mb-0 ">
                      Start price at:
                    </p>
                    <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
                      <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">
                        $0.005
                      </p>
                    </div>
                  </div>

                  {/* Buy and stake */}
                  <div className="main-layer-2">
                    <p className="text-white pt-[10px] pb-0 mb-0 ">Moon</p>
                    <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
                      <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">
                        $0.005
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lbrett balance */}
                <div className="main-lbrett-balance main-lbrett-balanceq flex justify-center items-center gap-5 mt-4 flex-wrap">
                  <span className="text-white text-[23px]">
                    Total Bag Worth:
                  </span>
                  <span>
                    <div className="relative w-[140px]">
                      {/* Icon */}
                      {/* <Image
    src={avatarimg}
    alt="ETH"
    className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5"
  /> */}

                      {/* Input */}
                      <input
                        defaultValue={0}
                        className="bg-[#138DB1] text-white text-[24px] font-normal font-koulen  py-[3px] pl-8 pr-2 rounded-[5px] w-full outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58]"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <Container className="mt-2 mb-0 p-0 ml-[70px]">
              <div className="flex flex-wrap justify-between items-center gap-4 ml-[10px] mr-[50px]">
                <div className="cal-buttons flex justify-center items-center gap-4">
                  <div className="img-sec-div cal-sec bg-[#0487AB] h-[45px] w-[45px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                    <p className="m-0 text-[23px] text-white">+</p>
                  </div>

                  <div className="img-sec-div cal-sec  bg-[#0487AB] h-[45px] w-[45px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                    <p className="m-0 text-[23px]  text-white">-</p>
                  </div>
                  <div className="img-sec-div cal-sec  bg-[#0487AB] h-[45px] w-[45px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                    <p className="m-0 text-[23px] text-white mt-[10px]">*</p>
                  </div>
                  <div className="img-sec-div cal-sec  bg-[#0487AB] h-[45px] w-[45px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                    <p className="m-0 text-[23px]  text-white">/</p>
                  </div>
                  <div className="img-sec-div cal-sec  bg-[#FFB3E8] h-[45px] w-[45px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] ml-[10vw]">
                    <p className="m-0 text-[23px]  text-white">=</p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <Image
          src={ads6}
          alt=""
          className="absolute top-[70vh] w-[32vw] h-[70vh] z-0 ads6 hidden sm:block"
        />
        <Image
          src={alian4}
          alt="alian4"
          className="absolute top-[70vh] w-[26vw] h-[60vh] left-[70vw] z-0 alian4 hidden sm:block"
        />
      </div>
    </>
  );
}
