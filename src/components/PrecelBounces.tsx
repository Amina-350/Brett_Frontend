import React from "react";
import "./style.css";
import { Koulen } from "next/font/google";
import Image from "next/image";
import precelbounce from "../../public/assets/Presale-Bonuses.png";
// Load Koulen font
import grouppic from "../../public/assets/Group.png";
import adcartoon from '../../public/assets/Ads─▒z_Resim 3.png';
import yoda from '../../public/assets/yoda 1.png';
import aliandance3 from '../../public/assets/alien-dance3 (1).png';
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400",
});

export default function PrecelBounces() {
  return (
    <div
      className={`${koulenFont.className} main-precel-bounces pt-[60vh] pb-[45vh]`}
    >
      <div className="sub-precel-bounces relative z-10">
        <Image
          src={precelbounce}
          alt=""
          className="w-[20vw] h-[27vh] absolute top-[-170px] left-[34vw]"
        />
        <div className="main-precel-section w-[55vw] mt-[80px] ml-[8vw] h-[300px] relative z-10">
          <div className="precel-bounce-section flex justify-center items-center gap-4 pl-[70px]">
            <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="img-sec-div p-2 bg-[#FFB3E8] h-[40px] w-[75px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image
                  src={grouppic}
                  alt="img-1"
                  className="h-[25px] w-[25px]"
                />
              </div>
              <div className="content-sec">
                <p className="text-white text-[13px] leading-none pb-0 mb-0">
                  Get in early with presale pricing, offering the lowest cost
                  for $LBRETT. Secure your position before prices surge and
                  $LBRETT launches on major exchanges.
                </p>
              </div>
            </div>
            <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="img-sec-div p-2 bg-[#FFB3E8] h-[40px] w-[75px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image
                  src={grouppic}
                  alt="img-1"
                  className="h-[25px] w-[25px]"
                />
              </div>
              <div className="content-sec">
                <p className="text-white text-[13px] leading-none pb-0 mb-0">
                  Get in early with presale pricing, offering the lowest cost
                  for $LBRETT. Secure your position before prices surge and
                  $LBRETT launches on major exchanges.
                </p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="precel-bounce-section flex justify-center items-center gap-4 mr-[60px]">
            <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="img-sec-div p-2 bg-[#FFB3E8] w-[40px] w-[75px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image
                  src={grouppic}
                  alt="img-1"
                  className="h-[25px] w-[25px]"
                />
              </div>
              <div className="content-sec">
                <p className="text-white text-[13px] leading-none pb-0 mb-0">
                  Get in early with presale pricing, offering the lowest cost
                  for $LBRETT. Secure your position before prices surge and
                  $LBRETT launches on major exchanges.
                </p>
              </div>
            </div>
            <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="img-sec-div p-2 bg-[#FFB3E8] h-[40px] w-[75px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image
                  src={grouppic}
                  alt="img-1"
                  className="h-[25px] w-[25px]"
                />
              </div>
              <div className="content-sec">
                <p className="text-white text-[13px] leading-none pb-0 mb-0">
                  Get in early with presale pricing, offering the lowest cost
                  for $LBRETT. Secure your position before prices surge and
                  $LBRETT launches on major exchanges.
                </p>
              </div>
            </div>
          </div>
          <h6 className="text-center mt-4">
            Where memes meet mechanism - Layer Brett brings speed, <br></br>
            staking and unstoppable vibes.
          </h6>
        </div>
        <p className="bg-[#FFFFFF] border-[2px] border-[#bfbfbf] p-2 rounded w-[160px] leading-none text-[14px] absolute left-[67vw] top-[3vh]">Early adopters of $LBRETT enjoy exclusive staking bonuses.</p>
        <Image src={adcartoon} alt="adcartoon" className="absolute left-[63vw] top-[3vh] w-[30vw] h-[90vh] z-0"/>
          <Image src={yoda} alt="yoda" className="absolute left-[43vw] top-[37vh] w-[20vw] h-[50vh] z-0"/>
             <Image src={aliandance3} alt="yoda" className="absolute left-[3vw] top-[48vh] w-[10vw] h-[50vh] z-0"/>
      </div>
    </div>
  );
}
