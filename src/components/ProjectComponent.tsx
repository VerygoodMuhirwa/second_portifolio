import React, { ReactNode } from "react";

import "./styles/project.scss";

export function ProjectComponent({
  projectData,
  inverted,
  children,
}: {
  projectData?: {
    type: string;
    title: string;
    techs: string[];
    projectProfilePicture: string;
    links?: {
      githubUrl: string;
    };
  };
  children: ReactNode;
  inverted?: boolean;
}) {
  return (
    <div
      className="exeptionProjectArea"
      style={{
        justifyContent: inverted ? "flex-end" : "",
      }}
    >
      <div className="project">
        <div
          className="project__before_background"
          style={{
            backgroundImage: `url(${projectData?.projectProfilePicture})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="project__project__projectProfilePicture">
          <div className="project__project__projectProfilePicture__project__infoContent">
            <div className="project__project__projectProfilePicture__project__infoContent__subTitleAndTitle">
              <span>{projectData?.type}</span>
              <h2>{projectData?.title}</h2>
            </div>
            <p className="project__project__projectProfilePicture__project__infoContent__description">
              {children}
            </p>
            <div className="project__project__projectProfilePicture__project__infoContent__techs">
              React
            </div>
            <div className="project__project__projectProfilePicture__project__infoContent__links"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
