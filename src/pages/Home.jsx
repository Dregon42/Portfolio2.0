import React from 'react';
import Background from '../assets/luke-chesser-pJadQetzTkI-unsplash.jpg';

export default function Home() {
  return (
    <div className='bg-cover bg-center w-screen h-screen flex flex-row'
    style={{ backgroundImage: `url(${ Background })`}}>
      <div className=' flex-1 m-10 h-1/2 w-1/2 p-10 rounded-full relative top-50 left-44'>
        <img className='rounded-full z-30 shadow-2xl shadow-black' src="src/assets/NightLife.jpg" alt="photo of me" />
      </div>
      <div className='flex-1 m-20 p-10 h-full flex-col text-slate-300 leading-7'>
        <p className='m-5 text-2xl'>Hi,</p>
        <p className='m-5 text-6xl'>I'm L'Rae</p>
        <p className='m-5 text-6xl'>Full Stack Engineer </p>
      </div>
    </div>
  )
}

