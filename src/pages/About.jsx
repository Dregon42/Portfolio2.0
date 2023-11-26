import React from 'react'
import Grid from '../components/Grid'

export default function About() {
  return (
    <div>
      <nav className="relative w-full h-[100px] top-0 left-0 bg-slate-400">
          <p className="absolute top-[25px] left-[165px] [font-family:'Lato-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal]">
            L’Rae Brantley
            <br />
            Full Stack Engineer | Front-end Developer
          </p>
      </nav>

      <Grid />

      <footer className='relative bottom-0 left-0 w-full bg-slate-400 flex justify-center'>
        <div className="footer-content flex content-center">
          <div className="footer-info">
              <h3>Contact Me</h3>
              <div className="info-item inline-flex items-center space-x-2" id="my-email">
                  <i className="ml-4 fa-solid fa-envelope"></i>
                  <p>Email: lbrantl13@gmail.com</p>
              </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}
