export interface IProject {
  type: string;
  title: string;
  Description?: string | JSX.Element;
  techs: string[];
  projectProfilePicture: string;
  links?: {
    githubUrl: string;
  };
}
