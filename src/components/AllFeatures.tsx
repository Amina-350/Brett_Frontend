import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Koulen } from "next/font/google";
import etherem from '../../public/assets/Ethereum.png';
import vector2 from '../../public/assets/Vector (2).png';
import Image from 'next/image';
import vector22 from '../../public/assets/Vector@2x.png';
import vector3 from '../../public/assets/Vector (3).png';
import document from '../../public/assets/Documents.png';
import vector4 from '../../public/assets/Vector (4).png';
import dancing4 from '../../public/assets/Group 1597885480 (1).svg';
import tfighter from '../../public/assets/t fighter 5.png';
import tfighter1 from '../../public/assets/t fighter 1.png';
import img95 from '../../public/assets/IMG_1925.png'

const koulenFont = Koulen({
subsets: ["latin"],
weight: "400", // Koulen only supports 400
});
export default function AllFeatures() {
  return (
    <>
    <div className={`${koulenFont.className} all-feature-section`}>
        <Image src={tfighter} alt="tfighter" className='absolute h-[20vh] w-[20vw]' />
       <Container className='pt-[150px] pb-[150px] aliantounge-container'>
        <Row className='relative z-1'>
            <Col md={4} sm={12} className='aliantounge hidden'>
      <div className="dancing-img dancing-img1">
        <Image src={dancing4} alt="img-1" className='dancing-img h-[70vh] w-[70vw]'/>
      </div>
        </Col>



        <Col md={4} sm={12}>
        <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={etherem} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Built on Ethereum</h5>
                <span className='text-white text-[13px]'>Layer Brett harnesses the power of Ethereum’s Layer 2 technology to deliver faster, cheaper, and scalable blockchain solutions.</span>
            </div>
        </div>
        <br></br>
         <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px] -ml-8 mr-5">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={vector2} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Seamless Interoperability</h5>
                <span className='text-white text-[13px]'>Layer Brett connects ecosystems with ease, allowing users to move assets quickly and securely across chains. Layer Brett is your gateway to the future</span>
            </div>
        </div>
        <br></br>
         <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={vector22} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Community-Driven Vision</h5>
                <span className='text-white text-[13px]'>Empowering the Layer Brett community with decentralized governance, ensuring every voice shapes the future of Layer Brett.</span>
            </div>
        </div>
        </Col>
      <Col md={4} sm={12} className="hidden sm:block">
      <div className="dancing-img">
        <Image src={dancing4} alt="img-1" className='h-[70vh] w-[70vw]'/>
      </div>
        </Col>
        <Col md={4} sm={12}>
         <div className="build-on-etherem build-on-etherem-sec flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={vector3} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Double the Rewards</h5>
                <span className='text-white text-[13px]'>Stake $LBRETT and earn enhanced rewards, powered by the efficiency of Layer 2 scalability. Maximize your potential in the Layer Brett ecosystem.</span>
            </div>
        </div>
        <br></br>
         <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px] -ml-8 mr-5">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={document} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Cutting-Edge Technology</h5>
                <span className='text-white text-[13px]'>Leveraging advanced Layer 2 solutions, Layer Brett ensures lightning-fast transactions without compromising on decentralization or security.</span>
            </div>
        </div>
        <br></br>
         <div className="build-on-etherem flex justify-center item-center gap-3 bg-[#0487AB] border-[4px] border-[#003E58] shadow-[-8px_8px_0_#003e58] rounded p-[13px]">
            <div className="img-sec-div p-2 bg-[#FFB3E8] h-[50px] w-[80px] border-[2px] border-[#EF53C0C0] rounded flex justify-center items-center shadow-[-6px_4px_0_#003e58]">
                <Image src={vector4} alt="img-1"/>

            </div>
            <div className="content-sec">
                <h5 className='text-dark [-webkit-text-stroke:0.5px_#D6FF00]'>Scalable and Secure</h5>
                <span className='text-white text-[13px]'>Layer Brett is designed to handle mass adoption with low fees and unparalleled security, redefining what’s possible on Layer 2.</span>
            </div>
        </div>
        </Col>
<Row>
    <Col md={12} sm={12} className='mt-4 flex justify-center items-center '>
     <div className="main-layer-brett-button  flex justify-start items-center  gap-4 flex-wrap">
           <div className="buy-and-stake border-[2px] border-[#f36bca] bg-[#FFB3E8]  Whitepaper rounded w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">Whitepaper</p>
        </div>
           {/*  Buy and stake */}
        <div className="buy-and-stake border-[4px] border-[#009BAF] bg-[#00D2ED] rounded Whitepaper w-[170px] shadow-[-8px_8px_0_#003e58]">
          <p className="text-[#FFFFFF7D] text-[18px] text-center text-dark mb-1 mt-1">BUY NOW</p>
        </div>
        </div>
    </Col>
</Row> 
        </Row>
        <Image src={tfighter1} alt="img-1" className=' absolute h-[25vh] w-[25vw] ml-[55%] -mt-[6%] hidden z-0 md:block'/>
        <Image src={img95} alt="img-1" className=' absolute h-[40vh] w-[34vw] ml-[3%] -mt-[3%] hidden z-0 md:block'/>

       </Container>
    </div>
    </>
  )
}
