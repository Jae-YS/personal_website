import { useLayoutEffect, useRef } from "react";
import { Box, Typography, Chip, Stack } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Link from "@/components/Navbar/Link";
import { SelectedPage } from "@/shared/types";
import Scene from "@/components/Animation/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useTheme } from "@mui/material/styles";
import SocialIcon from "@/components/Hero/SocialIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type HeroProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  onLinkClick?: () => void;
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const Hero = ({
  selectedPage,
  setSelectedPage,
  onLinkClick,
  mode,
  setMode,
}: HeroProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!headingRef.current || !buttonRef.current) return;

      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        background: mode === "light" ? "#f0f0f0" : "#202020",
        width: "100%",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 8 },
          py: { xs: 5, md: 8 },
          gap: { xs: 5, md: 8 },
        }}
      >
        {/* LEFT: Text */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <Chip
            label="AVAILABLE FOR WORK"
            sx={{
              backgroundColor: "#E0F7FA",
              color: "#00796B",
              fontWeight: 600,
              letterSpacing: 0.5,
              width: "fit-content",
              px: 2,
              py: 1,
            }}
          />

          <Typography
            component="h1"
            variant="h1"
            fontWeight={700}
            lineHeight={1.2}
            mb={2}
            ref={headingRef}
            sx={{ color: mode === "light" ? "#202020" : "#f0f0f0" }}
          >
            My name is <br />
            Jae Young Seo
          </Typography>

          <Link
            key={SelectedPage.ContactMe}
            page={SelectedPage.ContactMe}
            selectedPage={selectedPage}
            setSelectedPage={(v) => {
              setSelectedPage(v);
              if (onLinkClick) onLinkClick();
            }}
          >
            <button
              ref={buttonRef}
              style={{
                backgroundColor: mode === "light" ? "#202020" : "#f0f0f0",
                color: mode === "light" ? "#f0f0f0" : "#202020",
                border: "none",
                fontSize: "1rem",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Contact Me
            </button>
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
            gap: 2,
            px: 2,
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: mode === "light" ? "#202020" : "#f0f0f0",
              textAlign: "center",
              fontWeight: 700,
              mb: 1,
            }}
          >
            Change Modes
          </Typography>

          <main
            style={{
              background: mode === "light" ? "#f0f0f0" : "#202020",
              borderRadius: 12,
              overflow: "hidden",
              width: "100%",
              display: "block",
            }}
          >
            <Canvas
              camera={{ position: [4, 4, 4], fov: 50 }}
              shadows
              dpr={[1, 2]}
              style={{ width: "100%", height: 450 }}
            >
              <Scene setMode={setMode} mode={mode} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </main>

          <Stack direction="row" spacing={3} sx={{ marginTop: 2 }}>
            <SocialIcon
              href="https://www.linkedin.com/in/jae-young-seo/"
              backgroundColor={isDark ? "#fff" : "transparent"}
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
              backgroundColor={isDark ? "#fff" : "transparent"}
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
