import React, { useEffect, useState } from "react";
import images from "../images.json";

// CSS
import "./styles/NavComponent.scss";

function changeInnerHeight(positionY: number) {
  window.scroll(0, positionY);
}

export function NavComponent() {
  const [appear, setAppear] = useState<boolean>(false);

  useEffect(() => {
    setAppear(true);
  });

  return (
    <nav
      style={{
        transform: appear ? "translateY(0)" : "",
      }}
    >
      <div className="logoImageContainer">
        <img src={images.g_logo} alt="g - logo" height="80" />
      </div>
      <div className="content">
        <ul>
          <li onClick={() => changeInnerHeight(500)}>
            <span>01.</span> About Me
          </li>
          <li onClick={() => changeInnerHeight(1300)}>
            <span>02.</span> Experience / Work
          </li>
        </ul>

        <button>Resume</button>
      </div>
    </nav>
  );
}
