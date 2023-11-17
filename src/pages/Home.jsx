import React from 'react';
import Background from '../assets/luke-chesser-pJadQetzTkI-unsplash.jpg';

export default function Home() {
  return (
    <div className='bg-cover bg-center w-screen h-screen flex flex-row'
    style={{ backgroundImage: `url(${ Background })`}}>
      <div className=' flex-1 m-10 h-1/2 w-1/2 p-10 rounded-full relative top-50 left-44'>
        <img className='rounded-full z-30 shadow-2xl shadow-black' src="src/assets/NightLife.jpg" alt="photo of me" />
      </div>
      <div className='flex-1 m-20 p-10 text-2xl text-slate-300 leading-7'>
        <p><strong>Hi,</strong></p>
        <p>I'm L'Rae</p>
        <p>Front-End Develper | </p>
      </div>
      u
    </div>
  )
}

