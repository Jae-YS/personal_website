export enum SelectedPage {
  Home = "home",
  About = "aboutme",
  Projects = "myprojects",
  Contact = "contactme",
}


export type PageItem = {
  label: string;
  value: SelectedPage;
  icon?: React.ReactNode;
};

export interface NavLinksProps {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  direction?: "row" | "column";
  spacing?: number;
  pages?: PageItem[];
  sx?: object;
  onLinkClick?: () => void;
  sectionProgress?: Record<string, number>;
}

export interface ContactCardProps {
  label: string;
  value: React.ReactNode; 
  href?: string;
}
export type LayoutContextType = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  showSplash: boolean;
};

export interface WithSelectedPage {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
}

export interface LinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
}

export type CarouselCardProps = {
  
  id: string | number;
  title: string;
  description?: string;
  image: string;
  techstack?: { name: string; icon?: string }[];
  link?: string;
  keyfeatures?: string[];
  isMobile?: boolean;
};


export type SocialIconProps = {
  href: string;
  icon: React.ReactElement;  
  color?: string;
};

export type ThemeProps = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};
