import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Box, Typography, useTheme } from "@mui/material";
import headshot from "@/assets/headshot.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  const theme = useTheme();
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
    >
      <Box
        id="aboutme"
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
          sx={{
            flex: 1,
            px: { xs: theme.spacing(3), md: theme.spacing(6) },
            py: { xs: theme.spacing(4), md: theme.spacing(8) },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
              My name is Jae Young Seo
            </Typography>
            <Typography sx={{ mb: 2 }}>
              I'm currently seeking entry-level full-stack or backend
              engineering roles where I can apply my experience, contribute
              meaningfully, and continue learning in a collaborative, fast-paced
              environment. As a Research Assistant, I designed ParV2, a
              runtime-based concurrency abstraction in Go that enables safe
              parallel execution of multiple functions. This project addressed a
              core limitation in Go’s concurrency model and laid the groundwork
              for ongoing research into Artificial Neural Networks. Outside of
              research, I built FitTrack AI, a full-stack platform that helps
              runners train for half marathons using real-time feedback and AI
              support. The app generates adaptive training plans based on mood,
              sleep, and prior workout data. These projects reflect my ability
              to operate across the stack - from designing low-level systems to
              deploying AI-powered user applications - with a focus on
              thoughtful engineering, adaptability, and real-world impact.
            </Typography>
          </motion.div>
        </Box>
        {/* </motion.div>
        </Box> */}
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
            alt="artwork"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
              borderRadius: theme.shape.borderRadius,
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutMe;
