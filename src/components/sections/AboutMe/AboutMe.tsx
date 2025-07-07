import { useLayoutEffect, useRef } from "react";
import { SelectedPage } from "@/components/shared/types";
import { Box, Typography, useTheme } from "@mui/material";
import headshot from "/me.png";
import { gsap } from "@/utils/gsap";
import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "@/types";

const AboutMe = () => {
  const theme = useTheme();
  const { mode, setSelectedPage } = useOutletContext<LayoutContextType>();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            onEnter: () => setSelectedPage(SelectedPage.About),
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [setSelectedPage]);

  return (
    <section
      id="aboutme"
      ref={containerRef}
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "100vh",
          width: "100%",
          mt: theme.spacing(15),
        }}
      >
        {/* LEFT - Text Content */}
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 2, fontWeight: 600, color: theme.palette.primary.main }}
          >
            About Me!
          </Typography>

          {[
            "I’m a recent graduate from Vassar College with a double major in Computer Science and Mathematics. I’m currently looking for full-time roles in backend or full-stack engineering where I can keep learning, contribute to something meaningful, and grow with a team that values curiosity and impact.",
            "I got into tech because I wanted to make a difference. My first idea was simple: build a website for my parents' small business to help them reach more people. That project sparked my interest in programming and quickly showed me how powerful technology can be when it’s created with care and intention.",
            "My next project was for the Vassar community: a digital Valentine's Day card that spread smiles across campus. Since then, I’ve been driven by a desire to build tools that are thoughtful, accessible, and actually useful to the people who rely on them.",
            "I recently completed Cognizant’s Generative AI externship and developed a concurrency abstraction in Go, called ParV2, during my time as a research assistant. These projects reflect my systems-level thinking and curiosity for how things work under the hood.",
            "Outside of tech, I’ve led as Captain of the Varsity Track and Field Team and served as President of Vassar’s Computer Science Organization. Whether I'm writing code, organizing teammates, or mentoring peers, I care deeply about community, clarity, and progress.",
            "I’m a curious problem-solver who enjoys finding thoughtful ways to improve the lives of others. As AI becomes more integrated into everyday life, I’m committed to learning deeply, staying thoughtful about its impact, and contributing to a future that benefits everyone.",
          ].map((text, idx) => (
            <Typography key={idx} variant="body1" sx={{ mb: 2 }}>
              {text}
            </Typography>
          ))}
        </Box>

        {/* RIGHT - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 8 },
          }}
        >
          <Box
            component="img"
            src={headshot}
            alt="Jae Young Seo headshot"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
              borderRadius: theme.shape.borderRadius,
              boxShadow: mode === "dark" ? 8 : 2,
            }}
          />
        </Box>
      </Box>
    </section>
  );
};

export default AboutMe;
