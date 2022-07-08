import React, { useState } from "react";
import { ProjectComponent } from "../components/ProjectComponent";

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
        <ProjectComponent
          projectData={{
            projectProfilePicture:
              "https://s3-alpha-sig.figma.com/hub/file/2007195079/804b9406-d007-4158-b3a5-16205b6319ba-cover.png?Expires=1658102400&Signature=Ij1MDGbLrwEVGIBQ6NzaKYM2P-GWHlrkrXy9JvvjmZQwqjHv9eLCAm0OG21gMdOk5~LcsV6DdnBsE-2B6OVa8MKWGHYTqz4E~noCHNckdHDETufTkhStgs4j2fnVokRGEN~8MR6Q~p6vviQAnyFACGchXjTuKJGzlvx1EhUxIU0rNAi24Ww2RikNZZMwQzV8oiNY9u1CXRzc0W5gF4kakLffv0H0U3v-y~o7Vv7d09ZwkegBkmsQjMMcLSJJfCgfexb2XY-LGaISoGqcD0k3hEQuQPqiTLIXjbT8n93bichSoGvyovWa-Y6XD4pU518HNhod~Jnn7Vgq7gSSJJoSOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Spotify Profile",
            type: "Featured Project",
            techs: ["react"],
          }}
        >
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new
          <strong>playlists</strong> of recommended tracks based on your
          existing playlists and more.
        </ProjectComponent>

        <ProjectComponent
          projectData={{
            projectProfilePicture:
              "https://s3-alpha-sig.figma.com/hub/file/2007195079/804b9406-d007-4158-b3a5-16205b6319ba-cover.png?Expires=1658102400&Signature=Ij1MDGbLrwEVGIBQ6NzaKYM2P-GWHlrkrXy9JvvjmZQwqjHv9eLCAm0OG21gMdOk5~LcsV6DdnBsE-2B6OVa8MKWGHYTqz4E~noCHNckdHDETufTkhStgs4j2fnVokRGEN~8MR6Q~p6vviQAnyFACGchXjTuKJGzlvx1EhUxIU0rNAi24Ww2RikNZZMwQzV8oiNY9u1CXRzc0W5gF4kakLffv0H0U3v-y~o7Vv7d09ZwkegBkmsQjMMcLSJJfCgfexb2XY-LGaISoGqcD0k3hEQuQPqiTLIXjbT8n93bichSoGvyovWa-Y6XD4pU518HNhod~Jnn7Vgq7gSSJJoSOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Spotify Profile",
            type: "Featured Project",
            techs: ["react"],
          }}
          inverted={true}
        >
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
          information about each track. Create and save new
          <strong>playlists</strong> of recommended tracks based on your
          existing playlists and more.
        </ProjectComponent>
      </div>
    </main>
  );
}
