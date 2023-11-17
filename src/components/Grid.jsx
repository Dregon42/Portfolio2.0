import React from 'react'

export default function Grid() {
  return (
    <div>
    
        <section>
            <div className="grid-container">
                <div className="grid_item" id="hobbies">
                    <h3>Hoobies</h3>
                    <ul>
                        <li>Guitar</li>
                        <li>Video games</li>
                        <li>Cooking</li>
                    </ul>
                </div>
                <div className="grid_item" id="history">
                    <p>
                        My name is L'Rae and I was born and raise in Cleveland, Ohio. I root for the Browns knowing they will lose and
                        and LeBron James is the GOAT. I have a background in operations and project management. When I'm not working I love annoying 
                        daughter and spending time with my fiancee. 
                    </p>
                </div>
                <div className="grid_item" id="fun-photo">
                    <img src="static/IMG_2496.JPEG" alt="Me relazing in a hammick"/>
                </div>
                <div className="grid_item" id="family-photo">
                    <img src="static/IMG_2161.JPEG" alt="family photo"/>
                </div>
                <div className="grid_item" id="favorite">
                    {/* <img src="" alt="Remember The Titans">  */}
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

    
    </div>
  )
}
