import React from "react";
import Image from "next/image";
import Featured from "./Featured";
import "./style.css";
import { Koulen } from "next/font/google";
import layerbrett from '../../public/assets/LayerBrett (1).png';
import aliendance from '../../public/assets/alien-dance3.png';
import dancealian from '../../public/assets/Ads─▒z_Resim 4.png';
import alianback from '../../public/assets/IMG_1921.png';
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});
export default function About() {
  return (
    <>
      <div className={`${koulenFont.className} about-featured pb-[40%]`}>
        <Featured />
  <div className="about-brett w-[80%] ml-[20%] mt-[7%] sm:w-[40%] sm:ml-[46%]">

         <div className="about-layer-brett flex gap-2 justify-start items-center">
          <h4>ABOUT</h4>
          <span><Image src={layerbrett} alt="layerbratt" className="w-[150px] "/></span>
          </div>
          <p>
            Welcome to Layer Brett, where innovation meets personality. Layer
            Brett is no longer just another name in the crypto world—he’s a
            symbol of transformation, breaking free from the ordinary and
            stepping into a new era of blockchain technology. This isn’t just
            another Layer 2; it’s a movement built for speed, rewards, and a
            whole lot of character!
          </p>
          <div className="main-layer-brett-button flex justify-start items-center  gap-4">
           <div className="buy-and-stake border-[2px] border-[#f36bca] bg-[#FFB3E8] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">Whitepaper</p>
        </div>
           {/*  Buy and stake */}
        <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">BUY NOW</p>
        </div>
        </div>
        </div>
        <Image src={aliendance} alt="" className="absolute top-[65%] left-[15%]  hidden sm:block"/>
        <Image src={aliendance} alt="" className="absolute top-[63%] left-[7%] hidden sm:block" />
        <Image src={aliendance} alt="" className="absolute top-[68%] left-[10%] hidden sm:block"/>
        <Image src={dancealian} alt="" className="absolute top-[50%] left-[20%] w-[33%] h-[46%] hidden sm:block"/>
         <Image src={alianback} alt="" className="absolute top-[33%] left-[52%] w-[48%] h-[58%] hidden sm:block"/>
      </div>
    </>
  );
}
