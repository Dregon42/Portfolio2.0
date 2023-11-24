import React from "react";

export default function Certification() {
  return (
    <div className="flex flex-col h-[369px] items-center justify-center gap-[36px] px-[30px] py-[20px] relative bg-[#d9d9d9] rounded-[100px] overflow-hidden">
      <div className="relative self-stretch h-[39px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[30px] text-center tracking-[0] leading-[normal]">
        CERTIFICATIONS
      </div>
      <div className="flex flex-wrap content-between h-[225px] items-center justify-between relative self-stretch w-full">
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Software engineering"
          src="software-engineering-certificate-of-completion-1.png"
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Typescript certified"
          src="typescript-certified-1.png"
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Javascript certified"
          src="javascript-certified-1.png"
        />
        <img className="relative w-[100px] h-[100px] object-cover" alt="Css certified" src="css-certified.png" />
        <img className="relative w-[100px] h-[100px] object-cover" alt="React certified" src="react-certified-1.png" />
        <img className="relative w-[100px] h-[100px] object-cover" alt="Html certified" src="html-certified.png" />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Python certified"
          src="python-certified-1.png"
        />
        <img
          className="relative w-[100px] h-[100px] object-cover"
          alt="Nodejs certified"
          src="nodejs-certified-1.png"
        />
      </div>
    </div>
  );
};
