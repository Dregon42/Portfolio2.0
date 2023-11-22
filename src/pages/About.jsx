import React from "react";

export default function About() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden [background:linear-gradient(180deg,rgb(42.28,111.62,133.52)_0%,rgba(133.85,173.34,185.81,0.57)_75.74%,rgba(255,255,255,0)_100%)] w-[1440px] h-[1187px] relative">
        <div className="left-[-9px] absolute w-[1449px] h-[1025px] top-0">
          <div className="left-0 absolute w-[1449px] h-[1025px] top-0">
            <div className="absolute w-[1449px] h-[137px] top-0 left-0 bg-[#d9d9d9]" />
            <p className="absolute top-[47px] left-[50px] [font-family:'Lato-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
              L’Rae Brantley
              <br />
              Full Stack Engineer | Front-end Developer
            </p>
            <div className="flex-col w-[538px] h-[369px] justify-center gap-[36px] px-[30px] py-[20px] absolute top-[183px] left-[454px] bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_-8px_40px_#000000] flex items-center">
              <div className="relative w-[202px] h-[39px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[30px] text-center tracking-[0] leading-[normal]">
                CERTIFICATIONS
              </div>
              <div className="flex-wrap w-[502px] justify-center gap-[25px_25px] relative flex-[0_0_auto] ml-[-12.00px] mr-[-12.00px] flex items-center">
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
                <img
                  className="relative w-[100px] h-[100px] object-cover"
                  alt="Css certified"
                  src="css-certified.png"
                />
                <img
                  className="relative w-[100px] h-[100px] object-cover"
                  alt="React certified"
                  src="react-certified-1.png"
                />
                <img
                  className="relative w-[100px] h-[100px] object-cover"
                  alt="Html certified"
                  src="html-certified.png"
                />
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
            <div className="flex-col w-[550px] h-[441px] justify-between pl-[19px] pr-[8px] pt-[19px] pb-[8px] absolute top-[584px] left-[454px] bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_0px_40px_#000000] flex items-center">
              <img className="relative w-[360px] h-[240px]" alt="Rectangle" src="rectangle-2.png" />
              <div className="relative w-[170px] [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
                ONE MOORE BRANTLEY
              </div>
              <p className="relative w-[358px] h-[137px] [font-family:'Gowun_Batang-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
                This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message
                Board. There is also a page that has a gallery of photos of the couple. Each photo plays a song when
                clicked.
              </p>
            </div>
            <img
              className="absolute w-[345px] h-[474px] top-[117px] left-[989px] object-cov"
              alt="Rectangle"
              src="src/assets/IMG_2992.png"
            />
            <div className="absolute w-[265px] h-[441px] top-[584px] left-[1024px] bg-[#d9d9d9] rounded-[100px]" />
          </div>
          <div className="flex-col w-[265px] h-[369px] justify-center gap-[26px] px-[37px] py-[31px] absolute top-[183px] left-[50px] bg-[#d9d9d9dd] rounded-[100px] shadow-[5px_-8px_40px_#000000] flex items-center">
            <img
              className="relative w-[194px] h-[234px] mr-[-5.50px] object-cover"
              alt="Untitled"
              src="untitled-1.png"
            />
            <div className="left-0 relative w-fit [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-slate text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Created with&nbsp;&nbsp;Figma
            </div>
          </div>
        </div>
        <div className="absolute w-[1440px] h-[108px] top-[1079px] left-0 bg-[#d9d9d9]" />
      </div>
    </div>
  );
};
