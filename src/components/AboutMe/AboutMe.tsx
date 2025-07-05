import { useLayoutEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import { Box, Typography, useTheme } from "@mui/material";
import headshot from "/me.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  const theme = useTheme();
  const { mode } = useOutletContext<{
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  }>();

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const background = mode === "light" ? "#f7f6f2" : "#202020";
  const color = mode === "light" ? "#202020" : "#f0f0f0";

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            onEnter: () => setSelectedPage(SelectedPage.AboutMe),
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
        background,
        color,
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
        {/* LEFT */}
        <Box
          ref={contentRef}
          sx={{
            flex: 1,
            px: { xs: theme.spacing(3), md: theme.spacing(6) },
            py: { xs: theme.spacing(4), md: theme.spacing(8) },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            My name is Jae Young Seo!
          </Typography>
          <Typography sx={{ mb: 1 }}>
            A recent graduate from Vassar College majoring in Computer Science
            and Mathematics. I'm seeking full-time roles in backend or
            full-stack engineering where I can apply my systems mindset, build
            meaningful tools, and continue growing alongside a collaborative,
            fast-moving team.
          </Typography>
          <Typography sx={{ mb: 1 }}>
            As a Research Assistant, I designed ParV2, a concurrency abstraction
            in Go that enables safe parallel execution of arbitrary functions
            via reflection...
          </Typography>
          <Typography sx={{ mb: 1 }}>
            In June 2025, I completed Cognizant's Generative AI Externship...
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Beyond technical projects, I serve as Captain of the Varsity Track
            and Field Team and President of Vassar's Computer Science
            Organization (VC++)...
          </Typography>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: theme.spacing(2), md: theme.spacing(4) },
            py: { xs: theme.spacing(4), md: theme.spacing(8) },
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
