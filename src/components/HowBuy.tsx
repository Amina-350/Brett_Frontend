// 'use client'
import React from "react";
import Image from "next/image";
import { Koulen } from "next/font/google";
import {Col, Container, Row } from "reactstrap";
import howbuy from "../../public/assets/How to buy.png";
import dancealian from '../../public/assets/alien-dance3 (1).png'
import "./style.css";
import rtd from '../../public/assets/r2d2 1.png';
import suspic from '../../public/assets/sus 1.png';
import jabba from '../../public/assets/jabba-talking 1.png';
const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});
export default function HowBuy() {
  return (
    <>
      <div className={`${koulenFont.className} main-howbuy-img relative`}>
        <div className="how-we-buy">
          <Image
            src={howbuy}
            alt="howbuy"
            className="w-[30%] h-[30%] pt-[80px] ml-[27%]"
          />
          <Image src={dancealian} alt="dancealian" className="absolute -mt-[87px]"/>
           <Image src={rtd} alt='rtd' className="absolute top-[55%] w-[15vw] h-[64vh]"/>
             <Image src={suspic} alt='rtd' className="absolute top-[78%] w-[8vw] h-[16vh] left-[43%]"/>
               <Image src={jabba} alt='rtd' className="absolute top-[52%] w-[44vw] h-[63vh] left-[52%]"/>
          <Container>
            <Row>
              <Col md={12} sm={12}>
                <div className="main-how-buy flex flex-nowrap sm:flex-wrap gap-8 items-center justify-center w-[70vw] ml-[12%] pb-[45%]">
                  <div className="relative  mt-[16%] step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px] -ml-8 mr-5">
                    <div className="absolute top-[-20px] left-[3%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      {/* <Image src={vector2} alt="img-1"/> */}
                      <p className="pt-[20px]">Step 1</p>
                    </div>
                    <div className="content-sec">
                      <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                        Connect Wallet
                      </p>
                      <span className="text-white text-[13px]">
                        Connect your crypto wallet (we recommend MetaMask). This
                        is your gateway to the Layer Brett ecosystem. Make sure
                        your wallet is loaded with ETH USDT or you can use
                        Fiat Card Payment to participate.
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-[10%] step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px] -ml-8 mr-5">
                    <div className="absolute top-[-20px] left-[3%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      {/* <Image src={vector2} alt="img-1"/> */}
                      <p className="pt-[20px]">Step 2</p>
                    </div>
                    <div className="content-sec">
                      <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                        Enter The Amount
                      </p>
                      <span className="text-white text-[13px]">
                       After selecting ETH, USDT or Card from the drop down menu, enter the amount you want to purchase and see the corresponding amount of $LBRETT tokens. Secure your spot early and be part of the future of Layer 2 blockchain innovation.
                      </span>
                    </div>
                  </div>

                  <div className="relative step-1 build-on-etherem  bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px] -ml-8 mr-5">
                    <div className="absolute top-[-20px] left-[3%] img-sec-div p-1 bg-[#FFB3E8] h-[39px] w-[120px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                      {/* <Image src={vector2} alt="img-1"/> */}
                      <p className="pt-[15px]">Step 3</p>
                    </div>
                    <div className="content-sec">
                      <p className="text-[#D6FF00] text-[24px] pt-[13px] mb-0">
                        Buy / Buy & Stake
                      </p>
                      <span className="text-white text-[13px]">
                    Press Buy & Stake or Buy Now depending on if you wish to stake or not. Confirm the transaction in your wallet once the pop-up appears. Remember to have enough in your wallet for gas fees.
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
           
          </Container>
        </div>
      </div>
    </>
  );
}
