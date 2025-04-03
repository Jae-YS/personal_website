import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import headshot from "@/assets/headshot.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
      <Box
        id="aboutme"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "100vh",
          width: "100%",
          m: 10,
        }}
      >
        {/* LEFT */}

        <Box
          sx={{
            flex: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            My name is Jae Young Seo
          </Typography>
          <Typography sx={{ mb: 2 }}>
            I am a Computer Science and Mathematics with an emphasis on
            Statistics double major attending Vassar College. I am currently a
            senior interested in full-stack development or backend development,
            but open to exploring other career paths. I am seeking Summer 2025
            opportunities to gain the valuable experience I need to grow in the
            ever-changing tech world.
          </Typography>
        </Box>

        {/* RIGHT */}

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 8 },
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
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutMe;
