import { useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import { projectData } from "@/data/projectData";
import { useProjectCardsReveal } from "@/hooks/useProjectCardsReveal";

const Project = () => {
  const theme = useTheme();
  const sectionRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const cardsContainerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const visibleProjects = projectData;

  useProjectCardsReveal(cardsContainerRef, sectionRef);

  return (
    <section
      id="myprojects"
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
        margin: "0 auto",
        padding: "4rem 1rem",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Typography
          variant="h4"
          textAlign="start"
          mb={{ xs: 4, md: 6 }}
          sx={{
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          My Projects
        </Typography>

        <Box
          ref={cardsContainerRef}
          className="projects-card"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: 3,
            overflow: "hidden",
            cursor: "grab",
            alignItems: "flex-start",
            justifyContent: "center",
            pb: { xs: 6, md: 10 },
          }}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={`${project.id}-carousel`}
              {...project}
              view="carousel"
            />
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Project;
