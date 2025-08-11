import React from 'react'
import './style.css';
import { Koulen } from "next/font/google";
import tokenmics from '../../public/assets/Tokenomics.png';
import Image from 'next/image';
import imgthirthy from '../../public/assets/30.png';
import imgpercent from '../../public/assets/percent.png';
import one from '../../public/assets/1.png';
import threepointfive from '../../public/assets/2.5.png';
import five from '../../public/assets/5.png';
import eight from '../../public/assets/8.png';
import tens from '../../public/assets/10.png';
import fifteen from '../../public/assets/15.png';
import twentyfive from '../../public/assets/25.png';
import threepointf from '../../public/assets/3.5.png';
import tokennomic from '../../public/assets/tokenomics2 1.png';
import alien12 from '../../public/assets/alien12 1.png';
import alian9 from '../../public/assets/alien9 1.png';
import alian10 from '../../public/assets/alien10 1.png';
import alian11 from '../../public/assets/alien11 1.png';
const koulenFont = Koulen({
subsets: ["latin"],
weight: "400",
});
export default function TokenNomic() {
  return (
   <>
   <div className={`${koulenFont.className} TokenNomic-background-img pt-[5%] pb-[5%] `}>
   
    <Image src={tokenmics} alt="tokenmics" className='h-[13vh] w-[30vw] ml-[35%]'/>
    <div className="tokenmic-sub-div relative h-[523px]">
     <Image src={alien12} alt="tokenmics1" className='absolute top-[10vh] w-[15vw] h-[25vh]'/>
      <Image src={alian9} alt="tokenmics1" className='absolute z-0 top-[70vh] left-[6vw] w-[15vw] h-[25vh]'/>
          <Image src={alian10} alt="tokenmics1" className='absolute z-0 top-[7vh] left-[82vw] w-[15vw] h-[25vh]'/>
          <Image src={alian11} alt="tokenmics1" className='absolute z-0 top-[78vh] left-[82vw] w-[15vw] h-[25vh]'/>
        <Image src={tokennomic} alt="tokennomic" className='w-[60vw] h-[80vh] z-0 absolute left-[18vw] top-[5vh]'/>
        <div className="tokenmic-30 flex items-center absolute top-[20px] left-[18vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={imgthirthy} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent'/>
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 25% */}
          <div className="tokenmic-30 flex items-center absolute top-[126px] left-[15vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={twentyfive} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 15% */}
          <div className="tokenmic-30 flex items-center absolute top-[247px] left-[20vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={fifteen} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 2.5% */}
          <div className="tokenmic-30 flex items-center absolute top-[350px] left-[30%]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={threepointfive} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 1 %*/}
          <div className="tokenmic-30 flex items-center absolute top-[400px] left-[45vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={one} alt="img-1" className='h-[4vh] w-[2vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 3.5 % */}
          <div className="tokenmic-30 flex items-center absolute top-[330px] left-[60%]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={threepointf} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 5% */}
          <div className="tokenmic-30 flex items-center absolute top-[240px] left-[65vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={five} alt="img-1" className='h-[4vh] w-[2vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 8 % */}
          <div className="tokenmic-30 flex items-center absolute top-[140px] left-[68vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={eight} alt="img-1" className='h-[4vh] w-[2vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        {/* 10% */}
          <div className="tokenmic-30 flex items-center absolute top-[30px] left-[65vw]">
            <div className="z-10 img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] flex ">
                <Image src={tens} alt="img-1" className='h-[4vh] w-[3vw]'/>
                <Image src={imgpercent} alt='percent' />
            </div>
            <div className="tokenmic-30-content">
                <p className='z-0 p-2 bg-[#0487AB] h-[30px] w-[100px] border-[2px] border-[#003E58] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58] -ml-4 mt-3'>Presale</p>
            </div>
        </div>
        
    </div>
    {/* symbol table */}
     <div
      className={`z-20 bg-[#0487ab] pt-4 pl-5 pr-5 pb-2 border-[4px] border-[#003e58] rounded  w-[55vw] mx-auto`}
    >
      <div className="subheadercal bg-[#003e58] rounded pt-3 pb-2 pl-1 pr-3">
        <div className="bg-[#376c8a] pt-[6px] pl-[20px] pr-[20px] pb-[6px]">
            <div className="main-symbol-table flex justify-between items-center flex-wrap">
                <div className="symbol-name-1">
                    <p className='text-[#FFFFFF]'>Symbol:</p>
                    <p className='text-[#FFFFFF]'>Starting Price:</p>
                    <p className='text-[#FFFFFF]'>Chain:</p>
                </div>
                <div className="symbol-reading-1">
                <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center  shadow-[-8px_6px_0_#003e58]'>LBRETT</p>

                <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center shadow-[-8px_6px_0_#003e58]'>$0.007</p>

                <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center shadow-[-8px_6px_0_#003e58] '>Ethereum (ERC-20) </p>


                </div>
                   <div className="symbol-name-2">
                     <p className='text-[#FFFFFF]'>Contract Address:</p>
                    <p className='text-[#FFFFFF]'>Supply:</p>
                    <p className='text-[#FFFFFF]'>Decimals:</p>

                </div>
                <div className="symbol-reading-2">
                    <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center  shadow-[-8px_6px_0_#003e58]'>LBRETT</p>

                <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center shadow-[-8px_6px_0_#003e58]'>$0.007</p>

                <p className='z-0 text-[#D6FF00] p-2 bg-[#0487AB] h-[30px] w-[150px] border-[2px] border-[#003E58] rounded flex justify-start items-center shadow-[-8px_6px_0_#003e58]'>Ethereum (ERC-20) </p>

                </div>
                </div>         
        </div>

       
      </div>


    </div>
   
   </div>
   </>
  )
}