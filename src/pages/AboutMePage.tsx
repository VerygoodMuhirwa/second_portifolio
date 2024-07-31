import React, { useState } from "react";

// Interfaces
import { IVisibilityConfig } from "../interfaces/IVisibilityConfig";

// Hooks
import { useVisibilityY } from "../hooks/useVisibilityYHook";

// Components
import { SessionTitleComponent } from "../components/SessionTitleComponent";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// CSS
import "./styles/AboutMePage.scss";

export function AboutMePage() {
  const [visibilityConfigState, setVisibilityConfigState] =
    useState<IVisibilityConfig | null>();

  useVisibilityY(
    [visibilityConfigState, setVisibilityConfigState],
    {
      initialPosition: 80,
      endPosiotion: 0,
    },
    [100, 750],
  );

  return (
    <main
      className="aboutMeMain"
      id="aboutMeMain"
      style={{
        ...visibilityConfigState,
      }}
    >
      <SessionTitleComponent title="About Me" countNumber="01" />
      <div className="aboutMeMain__aboutMeContent">
        <div className="aboutMeMain__aboutMeContent__text">
          I'm Full-Stack Developer, I live in Rwanda and my Hobbies is study
          Physics and Math, watch series, hear musics and play some game
          Sometimes, I like to solve problems with creativity to turn it the
          Simplest possible, not only for me, but also for other people.
          Something that I also like is explain things to someone, I Really like
          it. Everyday Studying, learning something else and helping people
          around !
          <br />
          <br />
          Here are some I've been working with recently:
          <br />
          <br />
          <ul>
            <div>
              <li>
                <ArrowRightIcon /> Typescript
              </li>
              <li>
                <ArrowRightIcon /> JavaScript (ES6+)
              </li>
              <li>
                <ArrowRightIcon /> Node.js
              </li>
              <li>
                <ArrowRightIcon /> Firebase
              </li>
              <li>
                <ArrowRightIcon /> Spring boot 
              </li>
            </div>
            <div>
              <li>
                <ArrowRightIcon /> Linux
              </li>
              <li>
                <ArrowRightIcon /> NestJS 
              </li>
              <li>
                <ArrowRightIcon /> React 
              </li>
              <li>
                <ArrowRightIcon /> REST APIs
              </li>
              <li>
                <ArrowRightIcon /> GraphQL
              </li>
            </div>
            <div>
              <li>
                <ArrowRightIcon /> SQL Databases (MySQL, PostgreSQL)
              </li>
              <li>
                <ArrowRightIcon /> NOSQL Databases(MongoDB)
              </li>
              <li>
                <ArrowRightIcon /> JWT Verifications
              </li>
            </div>
          </ul>
        </div>{" "}
        <div className="my_pictureContainer">
          <a href="https://github.com/VerygoodMuhirwa">
            <img
              className="my_picture"
              src="https://avatars.githubusercontent.com/u/121917699?v=4"
              alt="me"  
            />
          </a>
        </div>
      </div>
    </main>
  );
}
