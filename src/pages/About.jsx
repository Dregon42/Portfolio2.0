import React from 'react';
import '../components/Grid.css'
import Resume from '../components/Resume';

export default function About() {
  return (
    <div>
        <nav className="navbar h-44 mb-10 shadow fixed-top">
            <div className="container relative top-6">
                <a href="index.html" className="navbar-brand">
                    <h1>L'Rae Brantley</h1>
                </a>
            </div>
        </nav>

        <section>
            <div className="grid-container">
                <div className="grid_item" id="hobbies">
                    <h3>Hobbies</h3>
                    <ul>
                        <li>Guitar</li>
                        <li>Video games</li>
                        <li>Cooking</li>
                    </ul>
                </div>
                <div className="grid_item " id="history">
                    <p className='text-2xl'>
                        "<strong>Pivoting</strong> from operations management to web development has been eye-opening, and the challenges along the way have been incredibly rewarding. 
                        The pivot, though not taken lightly, has proven to be profoundly worthwhile. In the world of web development, I've discovered an unprecedented interest 
                        and passion, bringing a newfound joy to problem-solving and crafting innovative solutions. This shift not only unlocked doors to a dynamic field but also 
                        kindled a genuine enthusiasm for the creative and problem-solving facets of web development that I never experienced before."
                    </p>
                </div>
                <div className="grid_item" id="fun-photo">
                    <Resume />
                </div>
                <div className="grid_item" id="family-photo">
                    {/* <img src="static/IMG_2161.JPEG" alt="family photo"/> */}
                </div>
                <div className="grid_item" id="favorite">
                    <img src="" alt="Remember The Titans"/> 
                </div>
                <div className="grid_item" id="poll">
                    <form action="" id="sign_in">
                        <div className="input-group">
                            <h3>Sign In!</h3>
                    
                            <div className="form_control" id="email">
                                <label for="email">Email</label>
                                <input type="text" aria-label="Email" id="email" placeholder="Email"/>
                            </div>
                            <div className="form_control" id="password">
                                <label for="password">Password</label>
                                <input type="text" aria-label="Password" id="password"  placeholder="Password"/>
                            </div>
                            <input type="submit" value="submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <h3>Contact Me</h3>
                    <div className="info-item" id="address">
                        <div>
                            <i className="ml-4 fa-solid fa-map-location"></i>
                        </div>
                        <div >
                            <p>Address: 3477 Union Ave, Cleveland, OH 44120</p>
                        </div>
                    </div>
                    <div className="info-item" id phone>
                        <i className="ml-4 fa-solid fa-phone"></i>
                        <p>Phone: (572) 337-3466</p>
                    </div>
                    <div className="info-item" id="my-email">
                        <i className="ml-4 fa-solid fa-envelope"></i>
                        <p>Email: Zoolander@Blue_Steele.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}