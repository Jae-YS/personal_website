import {
  Box,
  Typography,
  Chip,
  IconButton,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ArrowForwardIos, ArrowOutward } from "@mui/icons-material";
import { useState } from "react";
import type { CarouselCardProps } from "@/types/index";
import { getIcon } from "@/utils/iconMap";

const CarouselCardDesktop = ({
  title,
  description,
  image,
  techstack,
  link,
  keyfeatures,
}: CarouselCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [hovered, setHovered] = useState(false);
  const [page, setPage] = useState(0);

  const handleNext = () => setPage((prev) => (prev === 0 ? 1 : 0));

  return (
    <Box
      className="project-card"
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        height: {
          xs: "85vh",
          sm: "75vh",
          md: 460,
        },
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: isMobile ? "none" : "scale(1.02)",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPage(0);
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: hovered ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.3)",
          zIndex: 2,
          transition: "background-color 0.4s ease",
        }}
      />

      <Fade in={hovered} timeout={300}>
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            right: 20,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            height: "calc(100% - 40px)",
          }}
        >
          {page === 0 ? (
            <>
              <Typography
                variant="h5"
                color="white"
                fontWeight={700}
                sx={{
                  fontSize: isMobile
                    ? "1.3rem"
                    : isMedium
                    ? "1.2rem"
                    : "1.1rem",
                }}
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    lineHeight: 1.6,
                    opacity: 0.95,
                    fontSize: isMobile
                      ? "0.95rem"
                      : isMedium
                      ? "0.9rem"
                      : "0.85rem",
                  }}
                >
                  {description}
                </Typography>
              )}
              {techstack && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {techstack.map((tech, idx) => (
                    <Chip
                      key={idx}
                      icon={getIcon(tech.icon)}
                      label={tech.name}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "#fff",
                        fontSize: isMobile ? "0.75rem" : "0.8rem",
                        px: isMobile || isMedium ? 1 : undefined,
                        "& .MuiChip-icon": {
                          color: "#fff",
                          marginLeft: "-4px",
                          fontSize: isMedium ? 18 : undefined,
                        },
                      }}
                    />
                  ))}
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ mt: 1 }}>
              {(keyfeatures ?? []).map((feature, i) => (
                <Typography
                  key={i}
                  variant="caption"
                  color="white"
                  sx={{
                    display: "block",
                    mb: 0.5,
                    fontSize: isMobile
                      ? "0.9rem"
                      : isMedium
                      ? "0.85rem"
                      : "0.8rem",
                  }}
                >
                  • {feature}
                </Typography>
              ))}
            </Box>
          )}

          <IconButton
            size="small"
            onClick={handleNext}
            sx={{
              mt: "auto",
              alignSelf: "flex-end",
              color: "white",
              fontSize: isMobile ? "1rem" : isMedium ? "0.95rem" : "inherit",
            }}
          >
            <ArrowForwardIos
              sx={{ fontSize: isMobile ? 18 : isMedium ? 17 : 16 }}
            />
          </IconButton>
        </Box>
      </Fade>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ position: "absolute", bottom: 12, left: 12, zIndex: 4 }}
        >
          <ArrowOutward
            sx={{
              color: "white",
              fontSize: isMobile ? 20 : isMedium ? 21 : 20,
            }}
          />
        </a>
      )}
    </Box>
  );
};

export default CarouselCardDesktop;
