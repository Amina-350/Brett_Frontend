'use client'
import React, { useState } from "react";
import { Koulen,Nunito } from "next/font/google";
import "./style.css";
import Image from "next/image";
import faqsImg from "../../public/assets/FAQ section.png";
import planet2 from "../../public/assets/planet 2.png";
import social from '../../public/assets/social_gpalacinka_httpss 1.png';
import calc from '../../public/assets/Group 1597885467.png';
import layerbreet from '../../public/assets/LayerBrett (2).png';
import vector5 from '../../public/assets/Vector (5).png';
import vector6 from '../../public/assets/Vector (6).png';
import vector7 from '../../public/assets/Vector (7).png';
import adsrem from '../../public/assets/Ads─▒z_Resim 2.png';

const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});
const NunitoFont = Nunito({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});

const faqData = [
  {
    question: "What is $LBRETT?",
    answer:
      "$LBRETT is our presale token offering exclusive staking bonuses for early adopters.",
  },
  {
    question: "How do I participate in the presale?",
    answer:
      "Simply connect your wallet, choose your amount, and confirm the transaction.",
  },
  {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
    {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
    {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
    {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
    {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
    {
    question: "When will $LBRETT launch?",
    answer:
      "$LBRETT will launch on major exchanges after the presale ends.",
  },
  
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${koulenFont.className} bg-black relative`}>
      <div className="main-faqs-section px-6 py-8 ml-[14vw] relative z-10">
        {/* Upper section with images */}
        <div className="upr-sec flex gap-8 items-center mb-6 max-w-2xl mx-auto">
          <Image src={faqsImg} alt="faqs" className="w-[17vw] h-[20vh]" />
          <Image src={planet2} alt="planet2" className="w-[29vw] h-[35vh]" />
        </div>

        {/* FAQ Section */}
        <div className="faq-container max-w-2xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-500 py-4 px-4 bg-transparent rounded mb-2"
            >
              <button
                className="flex justify-between items-center w-full text-left text-white text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[#D6FF00]">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-300 bg-transparent">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Image src={social} alt="social" className="absolute top-[80vh] z-0 w-[40vw] h-[70vh]" />
     <div className="last-images-section w-[60vw] flex justify-center items-center gap-4 mx-auto flex-wrap mt-4 pb-8">
  <Image src={calc} alt="calc" className="w-[5vw] h-[10vh]" />
  <Image src={layerbreet} alt="layerbreet" className="h-[10vh]" />
  <Image src={vector5} alt="vector5" className="h-[10vh]" />
  <Image src={vector6} alt="vector6" className="h-[10vh]" />
  <Image src={vector7} alt="vector7" className="h-[10vh]" />
  <Image src={adsrem} alt="adsrem" className="w-[18vw] h-[30vh]" />
</div>

<div className={`${NunitoFont.className} bg-black relative text-white w-[76vw] mx-auto pb-4`}>
    <p className="text-center">Powering the Future of MemeCoins © Layer Brett 2024 All Rights Reserved</p>
    <p className="text-center text-[12px]">Powering the Future of MemeCoins © Layer Brett 2025 All Rights Reserved
Disclaimer: By visiting this website, using our services, or purchasing $LBRETT, you agree to our Terms of Service and Privacy Policy. You also confirm that you have read and fully understood the Disclaimer regarding the risks of buying cryptocurrencies like $LBRETT. By completing a purchase, you declare that you are not a citizen or resident of any restricted country, or any jurisdiction where purchasing $LBRETT may be prohibited by law. A full list of restricted countries can be found here. Please note that this list, along with our Terms of Service, may be updated periodically, so we recommend checking back regularly for the latest version.

$LBRETT is not an investment. It is a memecoin created as an experimental blockchain project and an ecosystem utility token. $LBRETT tokens are not currently resellable or tradable on any exchanges. They are exclusively designed for use within the Layer Brett ecosystem. There is no guarantee that they will ever hold market value, appreciate in price, or become tradeable on any platform. We do not make any guarantees or representations about the value, price stability, or potential returns associated with $LBRETT. All purchases are final, and buyers accept full responsibility for the risks involved.

By using the Layer Brett platform or purchasing $LBRETT, you accept the platform and its services "as is." We reserve the right to modify, discontinue, or cease maintenance of the platform and services at any time without prior notice. Availability of services and interfaces is not guaranteed, and Layer Brett is not liable for any losses, errors, or interruptions related to the use of the platform or $LBRETT. Always exercise caution and make informed decisions. Buying and using $LBRETT is done entirely at your own risk.</p>
<p className="text-center text-[12px]">Powering the Future of MemeCoins © Layer Brett 2025 All Rights Reserved
Disclaimer: By visiting this website, using our services, or purchasing $LBRETT, you agree to our Terms of Service and Privacy Policy. You also confirm that you have read and fully understood the Disclaimer regarding the risks of buying cryptocurrencies like $LBRETT. By completing a purchase, you declare that you are not a citizen or resident of any restricted country, or any jurisdiction where purchasing $LBRETT may be prohibited by law. A full list of restricted countries can be found here. Please note that this list, along with our Terms of Service, may be updated periodically, so we recommend checking back regularly for the latest version.

$LBRETT is not an investment. It is a memecoin created as an experimental blockchain project and an ecosystem utility token. $LBRETT tokens are not currently resellable or tradable on any exchanges. They are exclusively designed for use within the Layer Brett ecosystem. There is no guarantee that they will ever hold market value, appreciate in price, or become tradeable on any platform. We do not make any guarantees or representations about the value, price stability, or potential returns associated with $LBRETT. All purchases are final, and buyers accept full responsibility for the risks involved.

    </p>
<p className="text-center text-[12px]">Powering the Future of MemeCoins © Layer Brett 2025 All Rights Reserved
Disclaimer: By visiting this website, using our services, or purchasing $LBRETT, you agree to our Terms of Service and Privacy Policy. You also confirm that you have read and fully understood the Disclaimer regarding the risks of buying cryptocurrencies like $LBRETT. By completing a purchase, you declare that you are not a citizen or resident of any restricted country, or any jurisdiction where purchasing $LBRETT may be prohibited by law. A full list of restricted countries can be found here. Please note that this list, along with our Terms of Service, may be updated periodically, so we recommend checking back regularly for the latest version.

$LBRETT is not an investment. It is a memecoin created as an experimental blockchain project and an ecosystem utility token. $LBRETT tokens are not currently resellable or tradable on any exchanges. They are exclusively designed for use within the Layer Brett ecosystem. There is no guarantee that they will ever hold market value, appreciate in price, or become tradeable on any platform. We do not make any guarantees or representations about the value, price stability, or potential returns associated with $LBRETT. All purchases are final, and buyers accept full responsibility for the risks involved.

</p>

</div>
<div  className={`${NunitoFont.className} bg-black flex justify-center items-center gap-4 text-white w-[76vw] mx-auto pb-4`}>
    <p>Privacy policy</p>
    <p>Terms & Conditions</p>
</div>
    </div>
  );
}
