import React from "react";

export default function Certification() {
  return (
    <div className="flex flex-col h-[369px] items-center justify-center gap-[36px] px-[30px] py-[20px] relative flex-1 grow bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_-8px_40px_#000000]">
      <div className="relative self-stretch h-[39px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[30px] text-center tracking-[0] leading-[normal]">
        CERTIFICATIONS
      </div>
      <div className="flex flex-wrap content-between h-[225px] items-center justify-between relative self-stretch">
        <img
          className="relative w-[100px] h-[100px]"
          alt="Software engineering"
          src="assets/software-engineering-certificate-of-completion.png"
        />
        <img
          className="relative w-[100px] h-[100px]"
          alt="Typescript certified"
          src="assets/typescript-certified.png"
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Javascript certified"
          src="assets/javascript-certified.2.png"
        />
        <img 
          className="relative w-[100px] h-[100px] object-cover" 
          alt="CSS certified" 
          src="assets/css-certified.1.png" 
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="React certified"
          src="assets/react-certified.2.png"
        />
        <img 
          className="relative w-[100px] h-[100px] object-cover" 
          alt="Html certified" 
          src="assets/html-certified.1.png" 
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Python certified"
          src="assets/python-certified.png"
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Nodejs certified"
          src="assets/nodejs-certified.png"
        />
      </div>
    </div>
  );
};
