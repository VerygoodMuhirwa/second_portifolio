import base64images from "./base64Images.json";

// Interfaces
import { IProject } from "../interfaces/IProject";

const projects: IProject[] = [
  {
    title: "Contenta Web",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/opshrus_project",
    },
    Description: (
      <span>
        A web app to help people to find the best talents for their companies
      </span>
    ),
    projectProfilePicture: base64images.contentaWeb,
    type: "Marketing",
    techs: [""],
  },
  {
    title: "Ignite Lab Course Platform",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/Course_Platform",
    },
    Description: (
      <span>
        A web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new{" "}
        <strong>playlists</strong> of recommended tracks based on your existing
        playlists and more.
      </span>
    ),
    projectProfilePicture:
      "https://s3-alpha-sig.figma.com/hub/file/2007195079/804b9406-d007-4158-b3a5-16205b6319ba-cover.png?Expires=1658102400&Signature=Ij1MDGbLrwEVGIBQ6NzaKYM2P-GWHlrkrXy9JvvjmZQwqjHv9eLCAm0OG21gMdOk5~LcsV6DdnBsE-2B6OVa8MKWGHYTqz4E~noCHNckdHDETufTkhStgs4j2fnVokRGEN~8MR6Q~p6vviQAnyFACGchXjTuKJGzlvx1EhUxIU0rNAi24Ww2RikNZZMwQzV8oiNY9u1CXRzc0W5gF4kakLffv0H0U3v-y~o7Vv7d09ZwkegBkmsQjMMcLSJJfCgfexb2XY-LGaISoGqcD0k3hEQuQPqiTLIXjbT8n93bichSoGvyovWa-Y6XD4pU518HNhod~Jnn7Vgq7gSSJJoSOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    type: "Education",
    techs: ["React"],
  },
];

export default projects;
