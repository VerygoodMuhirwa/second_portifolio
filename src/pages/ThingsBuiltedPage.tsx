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
    [750, 1500],
  );

  return (
    <main className="thingsBuiltedMain" style={{ ...visibilityConfigState }}>
      <SessionTitleComponent title="Things I've Build" countNumber="02" />
      <div className="thingsBuiltedMain__projectsArea">
        {projects.map((project, idx) => (
          <ProjectComponent
            key={project.projectProfilePicture}
            projectData={{
              projectProfilePicture: project.projectProfilePicture,
              title: project.title,
              type: project.type,
              techs: project.techs,
              links: project.links,
            }}
            inverted={idx % 2 !== 0}
          >
            {project.Description}
          </ProjectComponent>
        ))}
      </div>
    </main>
  );
}
