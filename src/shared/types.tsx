import { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Work = "work",
  AboutMe = "aboutme",
  ContactMe = "contactme",
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
