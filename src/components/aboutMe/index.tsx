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
              I am a Computer Science and Mathematics with an emphasis on
              Statistics double major attending Vassar College. I am currently a
              senior interested in full-stack development or backend
              development, but open to exploring other career paths. I am
              seeking Summer 2025 opportunities to gain the valuable experience
              I need to grow in the ever-changing tech world.
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
