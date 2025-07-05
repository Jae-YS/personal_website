import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Work = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      onViewportEnter={() => setSelectedPage(SelectedPage.Work)}
    >
      {/* Header */}
      <Box
        id="work"
        sx={{
          pt: { xs: 10, md: 12 },
          textAlign: "center",
          pb: 6,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: "black",
            letterSpacing: "0.1em",
            fontSize: { xs: "1.5rem", md: "3rem" },
            fontWeight: 400,
          }}
        >
          SELECTED WORK
        </Typography>
      </Box>

      {/* Tile Container */}

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          gap: { sm: "1rem", md: "1rem" },
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {/* Acrylic */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/work/acrylic" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                width: "100%",
                overflow: "hidden",
                margin: "0 auto",
                padding: "0 1rem",
              }}
            >
              {/* <Box
                component="img"
                src={image1}
                alt="Acrylic"
                sx={{
                  width: "100%",
                  height: { xs: "40vh", md: "60vh" }, // much smaller
                  objectFit: "cover",
                }}
              /> */}
            </motion.div>
            <Typography
              sx={{
                textAlign: "center",
                py: 2,
                color: "black",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
              }}
            >
              ACRYLIC ON CANVAS
            </Typography>
          </Link>
        </Box>

        {/* Oil */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link to="/work/oil" style={{ textDecoration: "none" }}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                width: "100%",
                overflow: "hidden",
                margin: "0 auto",
                padding: "0 1rem",
              }}
            >
              {/* <Box
                component="img"
                src={image2}
                alt="Oil"
                sx={{
                  width: "100%",
                  height: { xs: "40vh", md: "60vh" },
                  objectFit: "cover",
                }}
              /> */}
            </motion.div>
            <Typography
              sx={{
                textAlign: "center",
                py: 2,
                color: "black",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
              }}
            >
              OIL ON CANVAS
            </Typography>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Work;
