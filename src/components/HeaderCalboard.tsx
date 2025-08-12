"use client";
import React from "react";
import { Koulen } from "next/font/google";
// import { Progress } from "reactstrap";
import Image from "next/image"; // Import Image from next/image
import avatarimg from "../../public/assets/Mask group.png";
import ProgressBar from "./ProgressBar";
import {Col, Container, Row } from "reactstrap";
import Dropdownfun from "./Dropdown";
import imgvector from "../../public/assets/Vector.png";
import vector1 from "../../public/assets/Vector (1).png";
import union from '../../public/assets/Union.png';
import ractangle from '../../public/assets/Rectangle 5474.png';
import rectangle2 from '../../public/assets/Rectangle 5472 (2).png'
// Set up Koulen font
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});

export default function HeaderCalboard() {
  return (
    <div
      className={`headercal bg-[#0487ab] pt-4 pl-5 pr-5 pb-2 border-[4px] border-[#003e58] rounded ${koulenFont.className} `}
    >
      <div className="subheadercal bg-[#003e58] rounded pt-3 pb-2 pl-1 pr-3">
        <div className="bg-[#376c8a] pt-[6px] pl-[20px] pr-[20px] pb-[6px]">
          <div className="text-[20px] text-[#FFFFFF]">
            $LBRETT Price = <span className="text-[#ffb3e8]">$0.000035</span>
          </div>
          {/* Avatar and Progress */}
          <div className="flex mt-2">
            <div className="w-full">
              <ProgressBar />
            </div>
          </div>

          <Container className="p-0 m-0">
            <Row className="p-0 m-0">
              <Col sm={12} lg={6} className="p-0 m-0">
                <div className="next-price p-0 m-0">
                  <span className="text-[20px] text-white">Next price</span>
                  <input
                    defaultValue={0}
                    className="bg-[#138DB1] text-white text-[20px] font-normal font-koulen  py-[3px] px-3 rounded-[5px] w-full outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58]"
                  />
                </div>
              </Col>

              <Col sm={12} lg={6} className="p-0 m-0">
                <div className="USDT-RAISED ">
                  <span className="text-[20px] text-white">USDT RAISED</span>
                  <input
                    defaultValue={0}
                    className="bg-[#138DB1] text-white text-[24px] font-normal font-koulen py-[3px] px-3 rounded-[5px] w-full outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58]"
                  />
                </div>
              </Col>
            </Row>
          </Container>

          {/* pay with eth section */}
          <div className="pay-with-eth-section mt-1 flex justify-between flex-wrap">
            <div className="sub-pay-eth-section h-full">
              <div className="pay-with-eth pay-with-eth-text  text-[white] flex justify-between items-center mt-2" >
                <span>Pay with eth</span>
                <span className="ml-[20px] rounded-[3px] bg-[#003e58] max-b text-[white]">
                  <button className=" pt-[2px] pb-[2px] pr-[5px] pl-[5px] max-b">
                    MAX
                  </button>
                </span> &nbsp; &nbsp;
                <span>
                  <input
                    defaultValue={0}
                    className="bg-[#138DB1] text-white text-[24px] font-normal font-koulen py-[3px] px-1 rounded-[5px] w-[140px] outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58]"
                  />
                </span>
              </div>
              <div className="pay-with-eth  text-[white] flex justify-between items-center mt-2 flex-wrap">
                <span>YOU RECEIVE</span>

                <span>
                  <input
                    defaultValue={0}
                    className="bg-[#138DB1] text-white text-[24px] font-normal font-koulen  py-[3px] px-3 rounded-[5px] w-[140px] outline-none placeholder:text-white border-[4px] border-[#003E58] [box-shadow:inset_-5px_3px_0_0_#003E58]"
                  />
                </span>
              </div>
            </div>
            <div className="dropdowndiv mt-2">
              <Dropdownfun
                label="eth"
                items={[
                  {
                    label: "ETH",
                    icon: (
                      <Image src={imgvector} alt="ETH" className="w-5 h-5" />
                    ),
                  },
                  {
                    label: "USDT",
                    icon: (
                      <Image src={vector1} alt="USDT" className="w-5 h-5" />
                    ),
                  },
                ]}
              />
            </div>
          </div>


          {/* not have enough to pay */}
          <div className="not-have-enough">
            <p className="text-[#FFFFFF7D] text-[18px] text-center mt-2 mb-2">NOT HAVE ENOUGH ETH TO PAY FOR TRANSACTION</p>
          </div>
          {/*  Buy and stake */}
        <div className="buy-and-stake border-[2px] border-[#f36bca] bg-[#FFB3E8] rounded shadow-[-8px_8px_0_#003e58] ">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">BUY & STAKE FOR 2.61% REWARDS</p>
        </div>
           {/*  Buy and stake */}
        <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded mt-3 shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">BUY $LBRETT</p>
        </div>
           {/* not have enough to pay */}
          <div className="not-have-enough">
            <p className="text-white text-[18px] text-center mt-1 mb-1">Get an extra <span className="text-[#FFB3E8]">10% Bonus </span>on purchase over $500</p>
          </div>
          {/* Lbrett balance */}
          <div className="main-lbrett-balance flex justify-center items-center gap-5">
            <span className="text-white">
LBRETT Balance
            </span>
             <span>
              
                 <div className="relative w-[140px]">
  {/* Icon */}
  <Image
    src={avatarimg}
    alt="ETH"
    className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5"
  />

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
    <Container className="mt-1 mb-0 p-0 ml-[70px]">
  <div className="flex justify-between items-center gap-4 ml-[10px] mr-[50px]">
    
    {/* First Section */}
    <div className="flex items-center">
      <Image src={union} alt="union" width={45} height={40} className="ml-4" />
    </div>

    {/* Second Section */}
    <div className="flex justify-center items-center gap-2">
      <Image src={ractangle} alt="rectangle" width={30} height={40} />
      <Image src={ractangle} alt="rectangle" width={30} height={40} />
    </div>

    {/* Third Section */}
    <div className="flex justify-center items-center gap-2 ml-4">
      <Image src={rectangle2} alt="rectangle2" width={40} height={40} />
      <Image src={rectangle2} alt="rectangle2" width={40} height={40} />
    </div>

  </div>
</Container>

    </div>
  );
}
