import React from 'react'
import './style.css';
import { Koulen } from "next/font/google";
import planet1 from '../../public/assets/planet 1.png';
import anima from '../../public/assets/anima.png';
import Image from 'next/image';
import breetwar from '../../public/assets/Brett Wars.png';
import ad7 from '../../public/assets/Ads─▒z_Resim 7.png';
import subtract from '../../public/assets/Subtract.png';
import one from '../../public/assets/1 (1).png';
import { Container } from 'reactstrap';
import vector1 from "../../public/assets/Vector (1).png";
import union from '../../public/assets/Union.png';
import ractangle from '../../public/assets/Rectangle 5474.png';
import rectangle2 from '../../public/assets/Rectangle 5472 (2).png';
import facehunger from '../../public/assets/facehugger 1.png';
const koulenFont = Koulen({
subsets: ["latin"],
weight: "400", // Koulen only supports 400
});
export default function Brettwar() {
    
  return (
    <>
    <div className={`${koulenFont.className} main-brett-war pt-[10vh] pb-[19vh]`}>
        <div className="sub-grett-war relative">
            <Image src={ad7} alt="Planet 1" className="planet-1 h-[40vh] w-[20vw] ml-[65vw] absolute top-[15vh] z-10 absolute" />
              <Image src={breetwar} alt="Planet 1" className="planet-1 h-[40vh] w-[20vw] ml-[38vw] absolute top-[24vh] z-10 relative" />
   <Image src={anima} alt='planet1' className='absolute z-1 top-[12vh] h-[80vh] w-[80vw] left-[12vw]'/>
            <Image src={planet1} alt='planet1' className='h-[100vh] w-[80vw] mt-[-36vh] ml-[9vw] z-0 relative' />

        </div>


{/* give away */}
 <div
      className={`z-20 bg-[#0487ab] pt-4 pl-5 pr-5 pb-2 border-[4px] border-[#003e58] rounded  w-[55vw] mx-auto -mt-[70px]`}
    >
     
        
            <div className="main-symbol-table flex justify-between items-center flex-wrap relative">
             <Image src={subtract} alt='subtract' className='relative z-0'/>
                <div className="transcation-image-sec flex justify-start items-center gap-1 bg-[#0487AB] absolute top-[3vh] left-[14%] p-1 border-[#003E58] border-[2px] rounded">
  <div className="img-sec-div p-2 bg-[#FFB3E8] h-[10vh] w-[6vw] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image
                  src={one}
                  alt="img-1"
                  className="h-[50px] w-[50px]"
                />
              </div>
            <p className='text-dark [-webkit-text-stroke:1px_#D6FF00] mt-3 text-[4vw] mb-0 pb-0 mt-0'>Million Giveaway</p>
            </div>
            <div className=" absolute buy-and-stake border-[2px] border-[#f36bca] bg-[#FFB3E8] rounded shadow-[-8px_8px_0_#003e58] top-[55%] left-[28%] ">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1 w-[20vw]">Enter Giveaway</p>
        </div>
                </div>       


    </div>
       <Container className="mt-1 mb-0 p-0 ml-[70px] relative">
  <div className="flex flex-wrap justify-between items-center gap-4 ml-[10px] mr-[50px] w-[48vw] absolute mt-[-16vh] left-[20vw]">
    
    {/* First Section */}
    <div className="flex items-center">
      <Image src={union} alt="union" width={55} height={50} className="ml-4" />
    </div>

    {/* Second Section */}
    <div className="flex justify-center items-center gap-2 ml-[60px] mt-[40px]">
      <Image src={ractangle} alt="rectangle" width={50} height={50} />
      <Image src={ractangle} alt="rectangle" width={50} height={50} />
    </div>

    {/* Third Section */}
    <div className="flex justify-center items-center gap-2 ml-4">
      <Image src={rectangle2} alt="rectangle2" width={50} height={50} />
      <Image src={rectangle2} alt="rectangle2" width={50} height={50} />
    </div>

  </div>
  <Image src={facehunger} alt='facehunger' className='absolute top-[-27vh] left-[59%] w-[25vw] h-[45vh]' />
</Container>
   
    <div className="main-layer-brett-button flex justify-center items-center gap-4 mt-4">
           <div className="buy-and-stake border-[2px] border-[#f36bca] bg-[#FFB3E8] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">Whitepaper</p>
        </div>
           {/*  Buy and stake */}
        <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">BUY NOW</p>
        </div>
        </div>
    </div>



    </>
  )
}
