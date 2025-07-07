
export enum SelectedPage {
  Home = "home",
  About = "aboutme",
  Projects = "work",
  Contact = "contactme",
}


export type LayoutContextType = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  showSplash: boolean;
};