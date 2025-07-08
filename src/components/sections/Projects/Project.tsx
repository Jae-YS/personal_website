import { useRef, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { projectData } from "@/data/projectData";
import { useProjectCardsReveal } from "@/hooks/useProjectCardsReveal";
import CarouselCardWrapper from "@/components/sections/Projects/CarouselCardWrapper";
import CarouselCardMobile from "@/components/sections/Projects/CarouselCardMobile";

const Project = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)", { noSsr: true });
  const sectionRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const cardsContainerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const [expandedId, setExpandedId] = useState<string | number | null>(null);

  const visibleProjects = projectData.map((project) => ({
    ...project,
    key: project.id,
  }));

  useProjectCardsReveal(cardsContainerRef, sectionRef, isMobile);

  return (
    <section
      id="myprojects"
      ref={sectionRef}
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
        margin: "0 auto",
        paddingTop: isMobile ? "2rem" : "4rem",
        paddingBottom: "2rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            maxWidth: isMobile ? "100%" : "1440px",
            mx: "auto",
            px: { xs: 1, sm: 2, md: 4 },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.palette.primary.main}
            textAlign="start"
            mb={{ xs: 4, md: 6 }}
          >
            My Projects
          </Typography>
        </Box>

        {isMobile ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {visibleProjects.map((project) => (
              <CarouselCardMobile
                {...project}
                key={project.id}
                isExpanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId((prev) =>
                    prev === project.id ? null : project.id
                  )
                }
              />
            ))}
          </Box>
        ) : (
          <Box
            ref={cardsContainerRef}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr 1fr",
              },
              gap: 4,
              px: { xs: 1, sm: 2, md: 4 },
              maxWidth: "1440px",
              mx: "auto",
            }}
          >
            <CarouselCardWrapper items={visibleProjects} />
          </Box>
        )}
      </Box>
    </section>
  );
};

export default Project;
