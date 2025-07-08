import {
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiOpenai,
  SiPython,
  SiHuggingface,
  SiWeightsandbiases,
  SiGo,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const iconMap = {
  react: SiReact,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  openai: SiOpenai,
  python: SiPython,
  huggingface: SiHuggingface,
  weightsandbiases: SiWeightsandbiases,
  go: SiGo,
  express: SiExpress,
  mongodb: SiMongodb,
};

import React from "react";

export const getIcon = (iconName?: string): React.ReactElement | undefined => {
  if (!iconName) return undefined;
  const IconComponent = iconMap[iconName.toLowerCase() as keyof typeof iconMap];
  return IconComponent ? React.createElement(IconComponent) : undefined;
};
