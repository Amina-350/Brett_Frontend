import React from "react";
import "./style.css";
import { Koulen } from "next/font/google";
import Image from "next/image";
import eightthreedancing from "../../public/83b1e82fca40929adbab37b2d7474f7926cd769b.gif";
import alian7 from "../../public/assets/alien7.png";
import adzrism from "../../public/assets/Ads─▒z_Resim.png";
import speed from "../../public/assets/Speed. Scalability. Security..png";
import fastforward from "../../public/assets/Fast forward.png";
import group1 from "../../public/assets/Group (1).png";
import { Nunito } from "next/font/google";

const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400",
});
const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: "400",
});
export default function Charateristic() {
  return (
    <>
      <div
        className={`${koulenFont.className} main-precel-bounces pt-[60vh] pb-[25vh] main-charateristic`}
      >
        <div className="submain-precel-bounces relative ">
          <Image
            src={eightthreedancing}
            alt="eightthreedancing"
            className="w-[20vw] h-[40vh] absolute eightthreedancing top-[-63vh] left-[13vw]"
          />
          <Image
            src={alian7}
            alt="alian7"
            className=" alian7 w-[20vw] h-[40vh] absolute top-[-16vh]"
          />
          <Image
            src={adzrism}
            alt="adzrism"
            className="adzrism w-[40vw] h-[80vh] absolute top-[-57vh] left-[33vw]"
          />

          <div className="main-inner-charateristics-section w-[75vw] mx-auto flex flex-col flex-wrap justify-center items-center pt-[10vh]">
            <div className="main-heading-section-chara">
              <p className="text-white">
                Not Just a MemeCoin — A Blockchain Revolution: Layer Brett
              </p>
              <Image src={speed} alt="speed" className="w-[40vw] h-[15vh] speed-text" />
            </div>
            <div className="sub-section-charateristic-list flex gap-4">
              <div className="fast-transcation-section">
                <div className="faster-transcation">
                  <div className="transcation-image-sec flex justify-start items-center gap-4">
                    <div className="img-sec-div p-2 bg-[#FFB3E8] h-[30px] w-[35px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      <Image
                        src={fastforward}
                        alt="img-1"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <p className="text-white pt-3">Faster Transactions</p>
                  </div>
                  <p className={`${NunitoFont.className} text-white`}>
                    No more waiting. With Layer 2 technology, Layer Brett
                    processes transactions at lightning speed, ensuring seamless
                    staking, trading, and interactions across the ecosystem.
                  </p>
                </div>
                <div className="programmibility">
                  <div className="transcation-image-sec flex justify-start items-center gap-4">
                    <div className="img-sec-div p-2 bg-[#FFB3E8] h-[30px] w-[35px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      <Image
                        src={group1}
                        alt="group1"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <p className="text-white pt-3">Programmability</p>
                  </div>
                  <p className={`${NunitoFont.className} text-white`}>
                    Unleash the potential of smart contracts. Layer Brett
                    supports advanced programmability, enabling developers to
                    build unique dApps and experiences within the ecosystem.
                  </p>
                </div>
              </div>
              <div className="community-power-section">
                <div className="faster-transcation">
                  <div className="transcation-image-sec flex justify-start items-center gap-4">
                    <div className="img-sec-div p-2 bg-[#FFB3E8] h-[30px] w-[35px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      <Image
                        src={fastforward}
                        alt="img-1"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <p className="text-white pt-3">Faster Transactions</p>
                  </div>
                  <p className={`${NunitoFont.className} text-white`}>
                    No more waiting. With Layer 2 technology, Layer Brett
                    processes transactions at lightning speed, ensuring seamless
                    staking, trading, and interactions across the ecosystem.
                  </p>
                </div>
                <div className="programmibility">
                  <div className="transcation-image-sec flex justify-start items-center gap-4">
                    <div className="img-sec-div p-2 bg-[#FFB3E8] h-[30px] w-[35px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      <Image
                        src={group1}
                        alt="group1"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <p className="text-white pt-3">Programmability</p>
                  </div>
                  <p className={`${NunitoFont.className} text-white`}>
                    Unleash the potential of smart contracts. Layer Brett
                    supports advanced programmability, enabling developers to
                    build unique dApps and experiences within the ecosystem.
                  </p>
                </div>
              </div>
              <div className="lower-fees-section">
                <div className="lower-fess">
                  <div className="transcation-image-sec flex justify-start items-center gap-4">
                    <div className="img-sec-div p-2 bg-[#FFB3E8] h-[30px] w-[35px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      <Image
                        src={group1}
                        alt="group1"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <p className="text-white pt-3">Programmability</p>
                  </div>
                  <p className={`${NunitoFont.className} text-white`}>
                    Unleash the potential of smart contracts. Layer Brett
                    supports advanced programmability, enabling developers to
                    build unique dApps and experiences within the ecosystem.
                  </p>
                </div>
                <div className="last-button-section flex justify-center items-center gap-4 ">
                  <div className="main-layer-brett-button main-layer-brett-button1 flex justify-start items-center gap-4">
                    <div className="buy-and-stake border-[2px] border-[#f36bca] Whitepaper1 bg-[#FFB3E8] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
                      <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">
                        Whitepaper
                      </p>
                    </div>
                    {/*  Buy and stake */}
                    <div className="buy-and-stake  Whitepaper1 border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
                      <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">
                        BUY NOW
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
