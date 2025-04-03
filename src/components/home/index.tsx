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
    <Box
      id="home"
      sx={{
        bgcolor: "grey.20",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          overflowX: "hidden",
          px: 2,
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
            fontFamily: "Georgia, serif",
            fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
            fontWeight: 500,
            letterSpacing: "0.1em",
          }}
        >
          Ava Novak
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          mx: "auto",
          px: 2,
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "start",
            minHeight: isAboveMediumScreens ? "60vh" : "40vh",
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
          <h1
            style={{
              wordBreak: "break-word",
              fontSize: isAboveMediumScreens ? "3rem" : "1rem",
            }}
          >
            BlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBlobBBlob
          </h1>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
