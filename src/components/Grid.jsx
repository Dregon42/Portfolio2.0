import React from "react";
import Certification from "./Certification";
import FigmaModal from "./FigmaModal";

export default function Grid() {
  return (
    <div className="flex flex-col w-[screen] h-[937px] items-center gap-[24px] py-[30px] px-[20px] relative  [background:linear-gradient(180deg,rgb(42.28,111.62,133.52)_0%,rgba(42.28,111.62,133.52,0)_100%)]">
      <div className="flex items-center gap-[24px] px-[11px] py-0 relative self-stretch w-[screen] flex-[0_0_auto] mx-10">
        <FigmaModal />
        <Certification />
        <img
          className="relative w-[300px] h-[400px] mt-[-18.00px] mb-[-39.00px] mr-[-45.00px] object-cover shadow-[5px_-8px_40px_#000000] rounded-[100px] flex-[.5]"
          alt="Headshot"
          src="assets/IMG_2992.png"
        />
      </div>
      <div className="flex items-center gap-[24px] px-[11px] py-0 relative self-stretch w-[screen] flex-[0_0_auto] ">
        <div className="flex flex-col w-[265px] h-[400px] items-center gap-[32px] px-[29px] py-[20px] relative bg-[#d9d9d9] rounded-[100px] shadow-[5px_-1px_40px_#000000]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-black text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Dev Tools:
          </div>
          <div className="relative w-fit font-skills font-[number:var(--skills-font-weight)] text-black text-[length:var(--skills-font-size)] text-center tracking-[var(--skills-letter-spacing)] leading-[var(--skills-line-height)] [font-style:var(--skills-font-style)]">
            Anaconda
          </div>
          <div className="relative w-fit font-skills font-[number:var(--skills-font-weight)] text-black text-[length:var(--skills-font-size)] text-center tracking-[var(--skills-letter-spacing)] leading-[var(--skills-line-height)] [font-style:var(--skills-font-style)]">
            Github
          </div>
          <div className="relative w-fit font-skills font-[number:var(--skills-font-weight)] text-black text-[length:var(--skills-font-size)] text-center tracking-[var(--skills-letter-spacing)] leading-[var(--skills-line-height)] [font-style:var(--skills-font-style)]">
            Insomnia
          </div>
          <div className="relative w-fit font-skills font-[number:var(--skills-font-weight)] text-black text-[length:var(--skills-font-size)] text-center tracking-[var(--skills-letter-spacing)] leading-[var(--skills-line-height)] [font-style:var(--skills-font-style)]">
            Figma
          </div>
          <div className="relative w-fit font-skills font-[number:var(--skills-font-weight)] text-black text-[length:var(--skills-font-size)] text-center tracking-[var(--skills-letter-spacing)] leading-[var(--skills-line-height)] [font-style:var(--skills-font-style)]">
            Jupyter Notebook
          </div>
        </div>
        <div className="flex flex-col h-[400px] items-center justify-between pl-[19px] pr-[8px] pt-[19px] pb-[8px] relative flex-1 grow bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_0px_40px_#000000]">
          <a href="https://lively-taffy-cc585c.netlify.app" target="_blank"><img className="relative w-[320px] h-[240px] rounded-xl" alt="Rectangle" src="assets/One_Moore_Brantley.PNG" /></a>
          <div className="relative w-[170px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
            ONE MOORE BRANTLEY
          </div>
          <div className="relative w-[358px] h-[137px] [font-family:'Gowun_Batang-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
            This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message
            Board. There is also a page that has a gallery of photos of the couple. Each photo plays a song when
            clicked.
          </div>
        </div>
        <div className="flex flex-col h-[400px] items-center justify-between pl-[19px] pr-[8px] pt-[19px] pb-[8px] relative flex-1 grow bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_0px_40px_#000000]">
          <div>
            <a href="https://dancing-kangaroo-026fe2.netlify.app/" target="_blank">
              <img src="assets/Meme.PNG" alt="" className="relative w-[325px] max-w-md h-[240px] mx-5 rounded-xl"/>
            </a>
            
            <div>
              <p className="[font-family:'Gowun_Batang-Regular',Helvetica]">
                This Meme Generator is my <a href="https://publiclab.co/building-in-public">Build in Place</a> project. In this full stack application I utilized React.js, Flask, Redux, and Restful API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
