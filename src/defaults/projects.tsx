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
        A web app to help people to find the best talents for their Companies
      </span>
    ),
    projectProfilePicture: base64images.contentaWeb,
    type: "Web App",
    techs: ["TypeScript", "React", "SCSS", "UI", "Figma Tools"],
  },
  {
    title: "Ignite Lab Course Platform",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/Course_Platform",
    },
    Description: (
      <span>
        Ignite Lab Course Platform is a Course Platform, where the owner of
        course can public its course by adding the content through a CMS's
        Service called GraphCMS, the main tech used at this project is GraphQL
      </span>
    ),
    projectProfilePicture:
      "https://s3-alpha-sig.figma.com/hub/file/2007195079/804b9406-d007-4158-b3a5-16205b6319ba-cover.png?Expires=1658102400&Signature=Ij1MDGbLrwEVGIBQ6NzaKYM2P-GWHlrkrXy9JvvjmZQwqjHv9eLCAm0OG21gMdOk5~LcsV6DdnBsE-2B6OVa8MKWGHYTqz4E~noCHNckdHDETufTkhStgs4j2fnVokRGEN~8MR6Q~p6vviQAnyFACGchXjTuKJGzlvx1EhUxIU0rNAi24Ww2RikNZZMwQzV8oiNY9u1CXRzc0W5gF4kakLffv0H0U3v-y~o7Vv7d09ZwkegBkmsQjMMcLSJJfCgfexb2XY-LGaISoGqcD0k3hEQuQPqiTLIXjbT8n93bichSoGvyovWa-Y6XD4pU518HNhod~Jnn7Vgq7gSSJJoSOg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    type: "Web App",
    techs: ["TypeScript", "React", "SCSS", "GraphCMS", "CMS", "GraphQL"],
  },
  {
    title: "Let me Ask",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/letmeask_gameVersion",
    },
    Description: (
      <span>
        Let me ask is intended to solve a communication problem between
        communicator and followers. It does this by creating a question voting
        system, so the content creator/communicator can choose which one to
        answer and ignore, making their choice clear. with the tools present
      </span>
    ),
    projectProfilePicture:
      "https://raw.githubusercontent.com/guilhermecapitao/letmeask/c068f01c136ad259023a7f7a2642a5781791b607/.github/cover.svg",
    type: "Web App",
    techs: [
      "React",
      "TypeScript",
      "Firebase",
      "Firebase-Database Realtime",
      "Firebase Auth",
      "Google Auth",
    ],
  },
  {
    title: "Be Nice",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/be-nice-interface-react",
    },
    Description: (
      <span>
        Be Nice is intended to Join people, where the user can add other user
        and make/receive compliments, thus having a friend system . All the
        backend was deployed in the AWS.
      </span>
    ),
    projectProfilePicture:
      "https://camo.githubusercontent.com/591e23aaf4266b3f2ce74014488aa6c7d86f76b973de368d5a0765632e995ac5/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835373730313835383635353037363430322f3935333835363239313237393838343333382f756e6b6e6f776e2e706e67",
    type: "Web App",
    techs: ["React", "TypeScript", "Web Socket", "REST API's Calls"],
  },
  {
    title: "E-Commerce",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/E-Commerce",
    },
    Description: (
      <span>
        An E-commerce Real Time made with Node(Express), Socket.io, EJS / SCSS /
        CSS3 / HTML5 / JS, Express-Session and KNEX.
      </span>
    ),
    projectProfilePicture:
      "https://camo.githubusercontent.com/722a30a25c1835ee82919ada9ffa31521e140f663b2520633ba54978f343fc91/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3835373730313835383635353037363430322f3837313339373737333632353339373234382f486f6d655f2d5f4f706572615f33315f30375f323032315f32305f30375f32305f322e706e67",
    type: "Web App",
    techs: [
      "Java Script",
      "Web Socket",
      "EJS",
      "MySQL",
      "Express Session",
      "KNEX",
    ],
  },
  {
    title: "E-Money",
    links: {
      githubUrl: "https://github.com/Navarropy/e-money",
    },
    Description: <span>E-Money</span>,
    projectProfilePicture: base64images.eMoney,
    type: "Template",
    techs: ["React", "TypeScript", "Animations", "SCSS"],
  },
  {
    title: "Be Nice API",
    links: {
      githubUrl: "https://github.com/Guilherme2014-ai/Be-Nice-Project",
    },
    Description: (
      <span>
        Well, this API can create Users who can relate to each other, an example
        of this dynamic is Facebook itself, where Users can make friends with
        other Users, but the API does not only allow that, it also allows a User
        to make a comment to another - hence the name "Be Nice" - thus
        generating a dynamic system of Network and Exchange of Comments between
        Users.
      </span>
    ),
    projectProfilePicture:
      "https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/Web-Service-What-is-REST-API-And-How-Does-it-Work-1024x576.png",
    type: "API",
    techs: [
      "JWT Auth",
      "MySQL",
      "Jest",
      "Automated Tests",
      "Cloud AWS",
      "TypeORM",
      "Linux",
    ],
  },
];

export default projects;
