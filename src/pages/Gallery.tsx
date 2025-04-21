import { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SelectedPage } from "@/shared/types";

import acrylic1 from "@/assets/download-1.png";
import acrylic2 from "@/assets/download-2.png";
import acrylic3 from "@/assets/download-3.png";
import acrylic4 from "@/assets/download.png";

import oil1 from "@/assets/download-1.png";
import oil2 from "@/assets/download-1.png";
import oil3 from "@/assets/download-1.png";
import oil4 from "@/assets/download-1.png";

const galleryMap = {
  acrylic: {
    title: "ACRYLIC ON CANVAS",
    images: [acrylic1, acrylic2, acrylic3, acrylic4],
  },
  oil: {
    title: "OIL ON CANVAS",
    images: [oil1, oil2, oil3, oil4],
  },
};

const Gallery = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  useOutletContext<{
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
  }>();

  // get the route key: 'acrylic' or 'oil'
  const type = location.pathname.includes("acrylic") ? "acrylic" : "oil";
  const { title, images } = galleryMap[type];

  const handleClose = () => setActiveIndex(null);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev! - 1 + images.length) % images.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev! + 1) % images.length);

  // ✅ Add this useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return; // only listen when modal is open

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

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
    >
      {/* Header */}
      <Box id="work" sx={{ pt: { xs: 10, md: 12 }, textAlign: "center" }}>
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
          {title}
        </Typography>
      </Box>

      {/* Image Grid */}
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
            backgroundColor: "rgba(255, 255, 255)",
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
              color: "#000",
              zIndex: 2100,
            }}
          >
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 20, color: "#000" }}
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
            sx={{ position: "absolute", right: 20, color: "#000" }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Modal>
    </motion.div>
  );
};

export default Gallery;
