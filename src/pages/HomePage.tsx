import React, { useEffect, useState } from "react";
import { useVisibilityY } from "../hooks/useVisibilityYHook";
import { IVisibilityConfig } from "../interfaces/IVisibilityConfig";
import { getApperConfig } from "../modules/getApperConfig";

// Interfaces
import { IIntervals } from "../interfaces/IIntervals";

// CSS
import "./styles/HomePage.scss";

let counter = 0;

export function HomePage() {
  const [visibilityConfigState, setVisibilityConfigState] =
    useState<IVisibilityConfig | null>();
  const interval: IIntervals = [0, 200];

  useVisibilityY(
    [visibilityConfigState, setVisibilityConfigState],
    {
      initialPosition: 80,
      endPosiotion: 0,
    },
    interval,
  );

  useEffect(() => {
    if (counter == 0) {
      counter++;

      const appearConfig = getApperConfig(interval, 20, 0);
      setVisibilityConfigState(appearConfig);
    }
  });

  return (
    <main>
      <div className="homepageContent" style={{ ...visibilityConfigState }}>
        <h3>Hi, my name is</h3>
        <div>
          <h1 className="name">Guilherme Henrique.</h1>
          <h1 className="whatDoes">I build things for the web</h1>
        </div>
        <p>
          Hey! My Name's Guilherme, i'm a FullStack-Developer and It's my
          Portfolio, where I share my jobs, projects, studies, experiments and a
          bit more about me, I hope you enjoy it !
        </p>
      </div>
    </main>
  );
}
