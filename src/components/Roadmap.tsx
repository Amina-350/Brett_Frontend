import React from "react";
import "./style.css";
import { Koulen } from "next/font/google";
import Image from "next/image";
import roadmap from "../../public/assets/Roadmap.png";
import spokone from "../../public/assets/spock1 1.png";
import { Nunito } from "next/font/google";
import aliean14 from '../../public/assets/alien14.png';
import alien15 from '../../public/assets/alien15.png';
const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: "400",
});
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400",
});
export default function Roadmap() {
  return (
    <>
      <div
        className={`${koulenFont.className} roadmap-background-img pt-[22vh] pb-[20vh] relative`}
      >
        <div className="main-roadmap-section flex gap-10 w-[80vw] mx-auto">
          <div className="roadmap-phase-1 flex flex-col items-center justify-center gap-8 flex-wrap">
            <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="absolute top-[-20px] left-[8%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                {/* <Image src={vector2} alt="img-1"/> */}
                <p className="pt-[20px]">Phase 1</p>
              </div>
              <div className="content-sec">
                <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                  Community Uprising
                </p>
                <span
                  className={`${NunitoFont.className} text-white text-[13px]`}
                >
                  <p> Grow Telegram, Twitter, and other platforms</p>

                  <p>Launch creative and daring marketing initiatives</p>
                  <p>Appoint passionate community leaders</p>

                  <p>Complete early presale stages.</p>
                </span>
              </div>
            </div>

            <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="absolute top-[-20px] left-[8%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                {/* <Image src={vector2} alt="img-1"/> */}
                <p className="pt-[20px]">Phase 3</p>
              </div>
              <div className="content-sec">
                <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                  The Breakthrough
                </p>
                <span
                  className={`${NunitoFont.className} text-white text-[13px]`}
                >
                  <p>Conquer final stages of the presale</p>

                  <p>Achieve 50,000+ members across socials</p>

                  <p>Claim Layer Bretts spot in the spotlight.</p>

                  <p>
                    Finalize all preparations for token allocation and ecosystem
                    launch.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="roadmap-phase-2 flex flex-col items-center justify-center gap-4 flex-wrap">
            <Image src={roadmap} alt="roadmap" />
            <Image src={spokone} alt="spokone" />
            <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="absolute top-[-20px] left-[8%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                {/* <Image src={vector2} alt="img-1"/> */}
                <p className="pt-[20px]">Phase 5</p>
              </div>
              <div className="content-sec">
                <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                  The Infinite Future
                </p>
                <span
                  className={`${NunitoFont.className} text-white text-[13px]`}
                >
                  <p>Conquer final stages of the presale</p>

                  <p>Achieve 50,000+ members across socials</p>

                  <p>Claim Layer Bretts spot in the spotlight.</p>

                  <p>
                    Finalize all preparations for token allocation and ecosystem
                    launch.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="roadmap-phase-3 flex flex-col items-center justify-center gap-8 flex-wrap">
            <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="absolute top-[-20px] left-[3%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                {/* <Image src={vector2} alt="img-1"/> */}
                <p className="pt-[20px]">Phase 4</p>
              </div>
              <div className="content-sec">
                <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                  Brett Unchained
                </p>
                <span
                  className={`${NunitoFont.className} text-white text-[13px]`}
                >
                  <p>Launch the Layer Brett website and socials</p>

                  <p>Begin presale and onboard the early believers.</p>

                  <p>Kickstart marketing campaign.</p>

                  <p>
                    Finalize all preparations for token allocation and ecosystem
                    launch.
                  </p>
                </span>
              </div>
            </div>

            <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
              <div className="absolute top-[-20px] left-[3%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                {/* <Image src={vector2} alt="img-1"/> */}
                <p className="pt-[20px]">Phase 2</p>
              </div>
              <div className="content-sec">
                <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                  The Genesis
                </p>
                <span
                  className={`${NunitoFont.className} text-white text-[13px]`}
                >
                  <p>
                    {" "}
                    Officially launch $LBRETT and bring the full ecosystem
                    online.
                  </p>

                  <p>
                    Introduce lbrettscan, governance, and Layer 2 utilities.
                  </p>
                  <p>
                    Partner with developers and projects to expand the Layer
                    Brett ecosystem.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Image src={aliean14} alt="aliean14" className="w-[10vw] h-[20vh] absolute bottom-[14vh] left-[13vw] z-0" />
        <Image src={alien15} alt="aliean14" className="w-[10vw] h-[20vh] absolute bottom-[18vh] right-[13vw] z-0" />
      </div>
    </>
  );
}
