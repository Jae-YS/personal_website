import { useState } from "react";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/download-1.png";
import image2 from "@/assets/download-2.png";
import image3 from "@/assets/download-3.png";
import image4 from "@/assets/download.png";

const images = [image1, image2, image3, image4];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Work = ({ setSelectedPage }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = () => setActiveIndex(null);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev! + 1) % images.length);

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
      <Box
        id="work"
        sx={{
          pt: { xs: 10, md: 12 },
          textAlign: "center",
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
          px: { xs: 2, md: 4 },
          py: 4,
        }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            // whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveIndex(i)}
            style={{
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`Artwork ${i + 1}`}
              sx={{
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1.2",
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        ))}
      </Box>

      {/* Modal */}
      <Modal open={activeIndex !== null} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255)", // soft glass
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              cursor: "pointer",
              top: 20,
              right: 20,
              color: "#000",
              zIndex: 2100,
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{
              cursor: "pointer",
              position: "absolute",
              left: 20,
              color: "#fff",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <motion.img
            key={activeIndex}
            src={images[activeIndex ?? 0]}
            alt={`Fullscreen image ${activeIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "95%",
              maxHeight: "97%",
              objectFit: "contain",
            }}
          />

          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", right: 20, color: "#fff" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </motion.div>
  );
};

export default Work;
