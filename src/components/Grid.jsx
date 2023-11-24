import React from "react";

export default function Grid() {
  return (
    <div className="flex flex-col w-[1440px] h-[937px] items-center gap-[24px] px-[50px] py-[18px] relative">
      <div className="flex items-center gap-[24px] px-[112px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col h-[369px] items-center justify-center gap-[26px] px-[37px] py-[31px] relative flex-[0_0_auto] bg-[#d9d9d9dd] rounded-[100px] shadow-[5px_-8px_40px_#000000]">
          <img
            className="relative self-stretch w-full h-[234px] ml-[-8.50px] mr-[-16.50px] object-cover"
            alt="Box champy"
            src="box-champy.png"
          />
          <div className="relative self-stretch [font-family:'Lato-Bold',Helvetica] font-bold text-variable-collection-slate text-[20px] text-center tracking-[0] leading-[normal]">
            Created with&nbsp;&nbsp;Figma
          </div>
        </div>
        <div className="flex flex-col h-[369px] items-center justify-center gap-[36px] px-[30px] py-[20px] relative flex-1 grow bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_-8px_40px_#000000]">
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
            <img
              className="relative w-[100px] h-[100px] object-cover"
              alt="React certified"
              src="react-certified-1.png"
            />
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
        <img
          className="relative w-[345px] h-[426px] mt-[-18.00px] mb-[-39.00px] mr-[-45.00px] object-cover"
          alt="Headshot"
          src="headshot.png"
        />
      </div>
      <div className="flex items-center justify-center gap-[24px] px-[110px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[265px] h-[431px] items-center gap-[32px] px-[29px] py-[41px] relative bg-[#967676] rounded-[100px] shadow-[5px_-1px_40px_#000000]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Lato-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Transferable Skills:
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
        <div className="flex flex-col h-[441px] items-center justify-between pl-[19px] pr-[8px] pt-[19px] pb-[8px] relative flex-1 grow bg-[#d9d9d9] rounded-[100px] overflow-hidden shadow-[5px_0px_40px_#000000]">
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
        <div className="relative w-[265px] h-[441px] rounded-[100px] shadow-[5px_-1px_40px_#000000] [background:linear-gradient(180deg,rgb(59.85,34.75,34.75)_0%,rgba(255,255,255,0)_100%)]" />
      </div>
    </div>
  );
};
