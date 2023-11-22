import React from "react";

export default function Skills() {
  return (
    <div className="flex flex-col w-[500px] h-[370px] items-center justify-center gap-[36px] px-[30px] py-[20px] absolute top-[41px] left-0 bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_-8px_40px_#000000]">
      <div className="relative w-[202px] h-[39px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[30px] text-center tracking-[0] leading-[normal]">
        CERTIFICATIONS
      </div>
      <div className="flex flex-wrap w-[555px] items-start gap-[25px_25px] relative flex-[0_0_auto] ml-[-17.50px] mr-[-17.50px]">
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Software engineering"
          src="src/assets/software-engineering-certificate-of-completion.png"
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Typescript certified"
          src="src/assets/typescript-certified.png"
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Javascript certified"
          src="src/assets/javascript-certified.2.png"
        />
        <img 
          className="relative w-[120px] h-[120px] object-cover" 
          alt="Css certified" 
          src="src/assets/css-certified.1.png" 
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="React certified"
          src="src/assets/react-certified.2.png"
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Html certified"
          src="src/assets/html-certified.1.png"
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Python certified"
          src="src/assets/python-certified.png"
        />
        <img
          className="relative w-[120px] h-[120px] object-cover"
          alt="Nodejs certified"
          src="src/assets/nodejs-certified.png"
        />
      </div>
    </div>
  );
};
