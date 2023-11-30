import React from 'react';
import Grid from '../components/Grid';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='w-screen h-screen'>
      <nav className="relative w-[full] h-[100px] top-[0] left-[0] bg-slate-400">
          <Link to={'/'}>
            <p className="absolute top-[25px] left-[165px] [font-family:'Lato-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
              L’Rae Brantley
              <br />
              Full Stack Engineer | Front-end Developer
            </p>
          </Link>
      </nav>

      <Grid />

      <footer className='relative bottom-0  w-full bg-slate-400 flex justify-center'>
        <div className="footer-content flex items-center">
          <div className="info-item inline-flex items-center space-x-2" id="my-email">
            <i className="ml-4 fa-solid fa-envelope"></i>
            <p>Email: lbrantl13@gmail.com</p>
          </div>
        </div>
      </footer>

      
    </div>
  )
}
