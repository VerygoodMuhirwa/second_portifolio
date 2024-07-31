import React, { useState } from "react";
import { ProjectComponent } from "../components/ProjectComponent";

// Defaults
import projects from "../defaults/projects";

// Components
import { SessionTitleComponent } from "../components/SessionTitleComponent";
import { useVisibilityY } from "../hooks/useVisibilityYHook";
import { IVisibilityConfig } from "../interfaces/IVisibilityConfig";

// CSS
import "./styles/ThingsBuiltedPage.scss";

export function ThingsBuilted() {
  const [visibilityConfigState, setVisibilityConfigState] =
    useState<IVisibilityConfig | null>();

  useVisibilityY(
    [visibilityConfigState, setVisibilityConfigState],
    {
      initialPosition: 80,
      endPosiotion: 0,
    },
    [750, 3500],
  );

  return (
    <main className="thingsBuiltedMain" style={{ ...visibilityConfigState }}>
      <SessionTitleComponent title="Main things I've Build" countNumber="02" />
      <div className="thingsBuiltedMain__projectsArea">
        {projects.map((project, idx) => {
          const inverted = idx % 2 !== 0;

          return (
            <ProjectComponent
              key={project.projectProfilePicture}
              projectData={{
                projectProfilePicture: project.projectProfilePicture,
                title: project.title,
                type: project.type,
                techs: project.techs,
                links: project.links,
              }}
              inverted={inverted}
            >
              {project.Description}
            </ProjectComponent>
          );
        })}

        <div className="thingsBuiltedMain__projectsArea__myGithub">
          <h3>
            For more, visit my{" "}
            <a href="https://github.com/VerygoodMuhirwa?tab=repositories">
              GitHub
            </a>
          </h3>
        </div>
      </div>
    </main>
  );
}
