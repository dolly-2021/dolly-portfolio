import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/dolly-2021/social-bee" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dolly-2021/social-bee" target="_blank" rel="noreferrer"><h2>Social Application</h2></a>
                <p>Developed a social media application to connect, share/post what's happening around , and discover new people across the globe.</p>

            </div>
            <div className="project">
                <a href="https://github.com/dolly-2021/Coronavirus-Tracker" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dolly-2021/Coronavirus-Tracker" target="_blank" rel="noreferrer"><h2>Coronavirus Tracker</h2></a>
                <p>Designed, Developed an application to track every day cases and provides real-time updates of coronavirus cases</p>
            </div>
            {/* <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Developed and released a 2D shooting game with C# and Unity. This project is hosted on the Itch.io public marketplace.</p>
            </div> */}
        </div>
    </div>
    );
}

export default Project;