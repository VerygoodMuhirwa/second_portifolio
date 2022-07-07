import React from "react";
import images from "../images.json";

import "./styles/NavComponent.scss";

export function NavComponent() {
    return (
    <nav>
        <div className="logoImageContainer">
            <img src={images.g_logo} alt="g - logo" height="80" />
        </div>
        <div className="content">
            <ul>
                <li><span>01.</span> About</li>
                <li><span>02.</span> Experience</li>
                <li><span>03.</span> Work</li>
                <li><span>04.</span> Contact</li>
            </ul>

            <button>Resume</button>
        </div>
    </nav>
    )
}
