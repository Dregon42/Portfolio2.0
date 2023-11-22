import React from "react";

export default function Frame() {
  return (
    <div className="shadow-black shadow-2xl flex flex-col w-[573px] h-[487px] items-center justify-center gap-[28px] pt-[19px] pb-[8px] px-[19px] relative bg-[#d9d9d9] rounded-[100px] overflow-hidden">
      <img className="relative w-[398px] h-[239px] mt-[-1.50px]" alt="Rectangle" src="rectangle-2.png" />
      <div className="relative w-fit [font-family:'Saira_Condensed-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
        ONE MOORE BRANTLEY
      </div>
      <p className="relative w-[528px] h-[137px] mb-[-0.50px] [font-family:'Gowun_Batang-Regular',Helvetica] font-normal text-black text-[15px] tracking-[0] leading-[normal]">
        This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message Board.
        There is also a page that has a gallery of photos of the couple. Each photo plays a song when clicked.
      </p>
    </div>
  );
};
