import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`contact rounded-full z-20 shadow-lg fixed top-2/3 right-3 shadow-black ${open ? 'w-72' : 'w-16 '}`}>
      <div className={`contact-links rounded-full ${open ? 'w-full' : 'w-16'}`}>
        <i
          className={`fa-solid fa-angles-left z-20 top-0.5 bg-blue-300 text-blue-200 text-4xl rounded-full shadow-lg shadow-black absolute  h-16 w-16 border-4 cursor-pointer ${open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        ></i>
        <ul className={`link-list flex flex-row place-content-center space-x-4 align-middle  ${!open && 'hidden'}`}>
          <li className='inline-block place-content-around text-3xl'>
            <a className="link-icon" href="https://github.com/Dregon42" target='_blank'>
              <i className="fa-brands fa-github fa-beat-fade"></i>
            </a>
          </li>
          <li className='inline-block place-content-around text-3xl'>
            <a className="link-icon" href="https://www.linkedin.com/in/th3-p1v0t/" target='_blank'>
              <i className="fa-brands fa-linkedin fa-beat-fade"></i>
            </a>
          </li>
          <li className='inline-block place-content-around'>
            <Link className="link-project" to={'/about'}>
              <i className="fa-solid fa-square-arrow-up-right fa-beat-fade">
                <aside>About</aside>
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
