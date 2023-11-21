import React, { useEffect, useState } from 'react';


/* For this component I want to create a figure, similar to a pokemon card.
With a image of my website and a desciption of wath it does below it */
export default function OneMooreBrantley() {
    

    return (
        <figure className="max-w-screen-md rounded overflow-hidden shadow-lg">
            <div className="relative overflow-hidden">
                <img src="src/assets/One_Moore_Brantley.png" alt="" />
            </div>
            <div className="px-6 py-4 bg-black">
                <div className="font-bold text-2xl text-white mb-2">
                    <a href="https://lively-taffy-cc585c.netlify.app/" target='_blank'>One Moore Brantley Website</a>
                </div>
                <figcaption className="text-gray-500 text-base">
                    This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message Board.
                    There is also a page that has a gallery of photos of the couple. Each photo plays a song when clicked.
                </figcaption>
            </div>
        </figure>
  )
}
