import React from 'react'
import { Koulen } from "next/font/google";
import Image from 'next/image';
import markimg1 from '../../public/assets/Mask group (1).png';
import markimg2 from '../../public/assets/Mask group (2).png';
import markimg3 from '../../public/assets/Mask group (3).png';
import markimg4 from '../../public/assets/Mask group (4).png';
import markimg5 from '../../public/assets/Mask group (5).png';
import markimg6 from '../../public/assets/Mask group (6).png';
import markimg7 from '../../public/assets/Mask group (7).png';
const koulenFont = Koulen({
subsets: ["latin"],
weight: "400", // Koulen only supports 400
});
export default function Featured() {
  return (
   <>
   <div  className={`${koulenFont.className}`}>
   <h4 className='font-bold pt-10 text-center'>Featured in</h4>
<div className="sponsors flex flex-wrap justify-between items-center pt-7 pl-4 pr-6 w-full">
  <Image src={markimg1} alt="mark1" className="h-[30px] w-[120px]" />
  <Image src={markimg2} alt="mark2" className="h-[30px] w-[120px]" />
  <Image src={markimg3} alt="mark3" className="h-[30px] w-[120px]" />
  <Image src={markimg4} alt="mark4" className="h-[30px] w-[120px]" />
  <Image src={markimg5} alt="mark5" className="h-[30px] w-[120px]" />
  <Image src={markimg6} alt="mark6" className="h-[30px] w-[120px]" />
  <Image src={markimg7} alt="mark7" className="h-[30px] w-[120px]" />
</div>


</div>
   </>
  )
}
