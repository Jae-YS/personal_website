import { Box, Typography } from "@mui/material";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

import backgroundImage from "@/assets/background.png";

import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <Box id="home">
      <Box
        sx={{
          minHeight: "100vh",
          scrollMarginTop: "64px",
          width: "100vw",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: {
            xs: "cover",
            sm: "120% 120%",
            md: "150% 130%",
            lg: "cover",
          },
          backgroundPosition: {
            xs: "50% -50%",
            sm: "center",
            md: "center",
          },
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          overflowX: "hidden",
          position: "relative",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "white",
            fontSize: "1.5rem",
            letterSpacing: "0.1em",
            mb: 1,
          }}
        >
          Art by
        </Typography>
        <Typography
          variant="h1"
          sx={{
            color: "white",
            fontSize: { sm: "3rem", md: "5rem", lg: "6rem" },
            fontWeight: 500,
            letterSpacing: "0.1em",
          }}
        >
          Jae Young Seo
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "100vw",
          p: { xs: "0.5rem 1rem", md: "2rem 2rem", lg: "3rem 4rem" },
          mx: "auto",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "start",
            minHeight: isAboveMediumScreens ? "40vh" : "30vh",
          }}
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              wordBreak: "break-word",
              fontWeight: 500,
            }}
          >
            A quiet space with no thoughts, actions, or presence. Neither
            beginning nor end, just stillness—an empty canvas untouched by
            meaning, intention, or form. Pure, silent, infinite absence.{" "}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
