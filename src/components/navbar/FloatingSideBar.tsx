import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "aboutme", label: "About Me" },
  { id: "work", label: "Work" },
  { id: "contactme", label: "Contact" },
];

const FloatingSidebar = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setVisible(false);
      }, 1000); // 1s after scroll stops
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });

    if (progressRef.current && trackRef.current) {
      const trackHeight = trackRef.current.offsetHeight;

      gsap.fromTo(
        progressRef.current,
        { y: 0 },
        {
          y: trackHeight,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            endTrigger: "#footer",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <Box
      ref={sidebarRef}
      sx={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: visible
          ? "translateY(-50%) scale(1)"
          : "translateY(-50%) scale(0.95)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease, transform 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
        bgcolor: theme.palette.background.default,
        px: 4,
        py: 4,
        borderRadius: "0 12px 12px 0",
        boxShadow: 2,
        zIndex: 1200,
        overflow: "visible",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Vertical Track */}
      <Box
        ref={trackRef}
        sx={{
          position: "relative",
          height: 400,
          width: 4,
          backgroundColor: "#e0e0e0",
          borderRadius: 2,
          mr: 3,
        }}
      >
        {/* Animated Horizontal Bar */}
        <Box
          ref={progressRef}
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%, 0)",
            width: 40,
            height: 4,
            background: `linear-gradient(90deg, ${
              isDark ? theme.palette.primary.main : theme.palette.secondary.main
            }, ${
              isDark
                ? theme.palette.secondary.light
                : theme.palette.customColors.primary100
            })`,
            borderRadius: 999,
            boxShadow: `0 0 12px ${
              isDark ? theme.palette.secondary.main : theme.palette.primary.main
            }`,
          }}
        />
      </Box>

      {/* Section Labels */}
      <Stack spacing={10} sx={{ zIndex: 2 }}>
        {sections.map((section) => (
          <Box
            key={section.id}
            onClick={() =>
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            sx={{ cursor: "pointer" }}
          >
            <Typography
              variant="body2"
              fontWeight={activeSection === section.id ? "bold" : 400}
              sx={{ color: theme.palette.text.primary }}
            >
              {section.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FloatingSidebar;
