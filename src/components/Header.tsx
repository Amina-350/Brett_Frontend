// 'use client'
import React from 'react'
import Image from 'next/image';
import { Koulen } from "next/font/google";
import {Col, Container, Row } from 'reactstrap';
import HeaderCalboard from './HeaderCalboard';
import aliandance from '../../public/assets/alien5.svg';
import alian4 from '../../public/assets/alien8.png';
import thefuture from '../../public/assets/THE FUTURE OFBLOCKCHAIN (1).png';
import carimg from '../../public/assets/IMG_1923.png';
import './style.css';
import Navbar from './Navbar';
const koulenFont = Koulen({
subsets: ["latin"],
weight: "400", // Koulen only supports 400
});
export default function Header() {
  return (
  <>
  <div className={`${koulenFont.className} main-header-img`}>
    {/* navbar */}
    <Navbar/>
    <Image src={aliandance} alt="Header Image" width={160} height={160} className='absolute left-[38%] top-[60px] hidden sm:block '/>
    <Image src={alian4} alt='alian5' className='absolute top-[80%] hidden sm:block' width={120} height={120}/>
    {/* <div className="image-d">
      <Image 
        src={headerimg} 
        alt="My Photo" 
        className='absolute top-0 bottom-0 object-cover z-[-1] '
      />
      </div> */}
      <Container className='pt-[40px]'>
        <Row>
          <Col md={6}>
<HeaderCalboard/>
          </Col>
          <Col md={6} className=''>
          <h5 className='text-center text-white car-img-responsiveg'>LAYER BRETT IS UNLEASHING</h5>
          <Image src={thefuture} alt='future' className='ml-4 future'/>
          <Image src={carimg} alt='carimg' className='carimg'/>
          </Col>
        </Row>
      </Container>

   
  </div>
  </>
  )
}
