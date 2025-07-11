import { useRef } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import headshot from "/me.png";
import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "@/types/index";
import { useAboutMeAnimation } from "@/hooks/useAboutMeAnimation";

const AboutMe = () => {
  const theme = useTheme();
  const { mode } = useOutletContext<LayoutContextType>();

  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const contentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useAboutMeAnimation(contentRef, containerRef);

  return (
    <Box
      id="aboutme"
      ref={containerRef}
      sx={{
        scrollMarginTop: { xs: 56, sm: 64 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flex: 1,
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          py: { xs: 6, md: 10 },
          gap: { xs: 6, md: 8 },
        }}
      >
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: theme.palette.text.primary,
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            About Me!
          </Typography>
          {[
            "I'm a recent Vassar College graduate with a double major in Computer Science and Mathematics, now looking for backend or full-stack roles where I can keep learning, contribute to something meaningful, and grow with a team that values curiosity and impact.",
            "I got into tech after building a website for my parents' small business — a simple project that opened my eyes to how powerful and personal technology can be. Since then, I've created tools for my campus community, completed Cognizant's Generative AI externship, and developed a concurrency abstraction in Go through faculty-led research.",
            "Outside of code, I've led as Captain of the Varsity Track and Field Team and President of Vassar's CS Organization. I'm a curious problem-solver who enjoys finding thoughtful ways to improve the lives of others. As AI becomes more integrated into daily life, I'm committed to building with thoughtfulness and purpose.",
          ].map((text, idx) => (
            <Typography key={idx} variant="body1" sx={{ mb: 0.25 }}>
              {text}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: 480,
              height: { xs: 340, sm: 420, md: 500 },
              overflow: "hidden",
              borderRadius: theme.shape.borderRadius,
              boxShadow: mode === "dark" ? 8 : 2,
            }}
          >
            <Box
              component="img"
              src={headshot}
              alt="Jae Young Seo headshot"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 50%",
                transform: "scale(1.4)",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
