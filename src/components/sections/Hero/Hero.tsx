import { useRef } from "react";
import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Link from "@/components/layout/Navbar/Link";
import { SelectedPage } from "@/types/index";
import Scene from "@/components/animation/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "@mui/material/styles";
import SocialIcon from "@/components/shared/SocialIcon";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { useOutletContext } from "react-router-dom";
import type { LayoutContextType } from "@/types/index";
import { useHeroFadeIn } from "@/hooks/useHeroFadeIn";

const Hero = () => {
  const theme = useTheme();
  const { selectedPage, setSelectedPage, mode, setMode } =
    useOutletContext<LayoutContextType>();

  const heroRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const headingRef = useRef<HTMLHeadingElement>(
    null
  ) as React.RefObject<HTMLHeadingElement>;
  const buttonRef = useRef<HTMLButtonElement>(
    null
  ) as React.RefObject<HTMLButtonElement>;

  useHeroFadeIn(heroRef, headingRef, buttonRef);

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        scrollMarginTop: "96px",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "12px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, sm: 5, md: 8 },
          py: { xs: 8, md: 10 },
          gap: { xs: 6, md: 10 },
        }}
      >
        {/* LEFT: Text */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Chip
            label="AVAILABLE FOR WORK"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
              fontWeight: 600,
              letterSpacing: 0.5,
              width: "fit-content",
              px: 2,
              py: 1,
            }}
          />

          <Typography
            component="h1"
            variant="h2"
            fontWeight={700}
            lineHeight={1.2}
            mb={2}
            sx={{
              fontSize: { xs: "2.4rem", sm: "3rem", md: "4rem" },
              color: theme.palette.text.primary,
            }}
          >
            My name is <br />
            Jae Young Seo
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={500}
            lineHeight={1.5}
            maxWidth="90%"
            fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.25rem" }}
            sx={{ color: theme.palette.text.primary }}
          >
            I'm an early-career full-stack engineer interested in designing
            systems that span from low-level concurrency to AI-powered
            interfaces.
          </Typography>

          <Link
            page={SelectedPage.Contact}
            selectedPage={selectedPage}
            setSelectedPage={(v) => {
              setSelectedPage(v);
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  opacity: 0.9,
                },
              }}
            >
              <Button
                ref={buttonRef}
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: theme.palette.text.primary,
                  color: theme.palette.background.default,
                  fontSize: "1rem",
                  fontWeight: 600,
                  px: 2,
                  py: 1,
                  borderRadius: theme.shape.borderRadius,
                  textTransform: "none",
                  transition: "none",
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Link>
        </Box>

        {/* RIGHT: Scene + Icons */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 4,
            gap: 1,
            px: 2,
            py: 2,
          }}
        >
          <ThemeToggle mode={mode} setMode={setMode} />

          <Box
            sx={{
              width: "100%",
              maxWidth: 400,
              overflow: "hidden",
              borderRadius: theme.shape.borderRadius,
              backgroundColor: theme.palette.background.default,
              height: { xs: 300, sm: 350, md: 400 },
            }}
          >
            <Canvas
              dpr={[1, 2]}
              shadows
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            >
              <Scene mode={mode} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </Box>

          <Stack direction="row" spacing={3} sx={{ marginTop: 2 }}>
            <SocialIcon
              href="https://www.linkedin.com/in/jae-young-seo/"
              icon={
                <LinkedIn
                  sx={{
                    fontSize: 42,
                    color: "#0A66C2",
                    transition: "color 0.3s ease",
                  }}
                />
              }
            />
            <SocialIcon
              href="https://github.com/Jae-YS"
              icon={
                <GitHub
                  sx={{
                    fontSize: 42,
                    color: "#000",
                    transition: "color 0.3s ease",
                  }}
                />
              }
            />
          </Stack>
        </Box>
      </Box>
    </section>
  );
};

export default Hero;
