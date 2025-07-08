import {
  Box,
  Typography,
  Chip,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { ExpandMore, ExpandLess, ArrowOutward } from "@mui/icons-material";
import type { CarouselCardProps } from "@/types/index";
import { getIcon } from "@/utils/iconMap";

type CarouselCardMobileProps = CarouselCardProps & {
  isExpanded: boolean;
  onToggle: () => void;
};

const CarouselCardMobile = ({
  title,
  description,
  image,
  techstack,
  link,
  keyfeatures,
  isExpanded,
  onToggle,
}: CarouselCardMobileProps) => {
  return (
    <Box sx={{ mb: 2, px: 1 }}>
      <List disablePadding>
        <ListItemButton onClick={onToggle}>
          <ListItemIcon>
            <Box
              component="img"
              src={image}
              alt={`${title}-thumb`}
              sx={{
                width: 36,
                height: 36,
                borderRadius: 1,
                objectFit: "cover",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={<Typography fontWeight={600}>{title}</Typography>}
          />
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ width: "100%", height: 200, objectFit: "cover" }}
          />
          <Box sx={{ p: 2, backgroundColor: "#121212" }}>
            <Typography variant="h6" color="white" gutterBottom>
              {title}
            </Typography>
            {description && (
              <Typography variant="body2" color="white" sx={{ mb: 1 }}>
                {description}
              </Typography>
            )}
            {techstack && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 1 }}>
                {techstack.map((tech, idx) => (
                  <Chip
                    key={idx}
                    icon={getIcon(tech.icon)}
                    label={tech.name}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      px: 1,
                      "& .MuiChip-icon": {
                        color: "#fff",
                        marginLeft: "-4px",
                      },
                    }}
                  />
                ))}
              </Box>
            )}
            {keyfeatures && (
              <Box>
                {keyfeatures.map((feature, i) => (
                  <Typography
                    key={i}
                    variant="caption"
                    color="white"
                    display="block"
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>
            )}
            {link && (
              <Box sx={{ mt: 1 }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ArrowOutward sx={{ color: "white", fontSize: 20 }} />
                </a>
              </Box>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CarouselCardMobile;
