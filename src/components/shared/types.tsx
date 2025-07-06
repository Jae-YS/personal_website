import { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  About = "aboutme",
  Projects = "work",
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
