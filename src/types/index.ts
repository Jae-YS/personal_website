import { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  About = "aboutme",
  Projects = "myprojects",
  Contact = "contactme",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
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

export type ContactCardProps = {
  label: string;
  value: string;
  href?: string;
};

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

export type Tech = {
  name: string;
  icon?: string;
};

export type CarouselProps = {
  title: string;
  description?: string;
  image?: string;
  techstack?: Tech[];
  link?: string;
  keyfeatures?: string[];
};

export type ProjectCardProps = {
  view: "carousel" | "list";
  title: string;
  image?: string;
  description?: string;
  techstack?: Tech[];
  keyfeatures?: string[];
  link?: string;
};

export type SocialIconProps = {
  href: string;
  icon: React.ReactElement;
};

export type ThemeProps = {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
};

