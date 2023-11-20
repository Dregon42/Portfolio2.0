import React, { useEffect, useState } from 'react';


/* For this component I want to create a figure, similar to a pokemon card.
With a image of my website and a desciption of wath it does below it */
export default function OneMooreBrantley() {
    

    return (
        <figure className="max-w-screen-md rounded overflow-hidden shadow-lg">
            <div className="relative overflow-hidden bg-gray-900" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    title="One Moore Brantley website"
                    src="https://lively-taffy-cc585c.netlify.app/"
                    width="100%"
                    height="100%"
                    className="absolute inset-0 w-full h-full"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">One Moore Brantley Website</div>
                <figcaption className="text-gray-300 text-base">
                    This is a wedding website where guests can RSVP and leave a message for the happy couple on the Message Board.
                    There is also a page that has a gallery of photos of the couple. Each photo plays a song when clicked.
                </figcaption>
            </div>
        </figure>
  )
}
