import { useState } from "react";
import { Box, IconButton, Modal, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
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
  const theme = useTheme();

  const handleClose = () => setActiveIndex(null);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev! + 1) % images.length);

  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Work)}
      viewport={{ once: false, amount: 0.3 }}
    >
      <Grid container spacing={2} px={{ xs: 2, md: 4 }} py={4}>
        {images.map((src, i) => (
          <Grid container item xs={6} sm={6} md={4} key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIndex(i)}
              style={{ cursor: "pointer", overflow: "hidden", borderRadius: 8 }}
            >
              <Box
                component="img"
                src={src}
                alt={`Artwork ${i + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={activeIndex !== null} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "rgba(0,0,0,0.95)",
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
              top: 20,
              right: 20,
              color: "#fff",
              zIndex: 2100,
            }}
          >
            <CloseIcon />
          </IconButton>

          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 20, color: "#fff" }}
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
              maxHeight: "90%",
              maxWidth: "90%",
              objectFit: "contain",
              borderRadius: 8,
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
