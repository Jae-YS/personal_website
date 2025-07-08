import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  image?: string;
  description?: string;
  techstack?: string;
  keyfeatures?: string[];
  link?: string;
};

const ListRowCard = ({ title, image, description }: Props) => (
  <Box
    className="project-card"
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
      px: 2,
      py: 1,
      minHeight: 56,
      borderBottom: "1px solid",
      borderColor: "divider",
      transition: "background 0.2s ease",
      "&:hover": {
        backgroundColor: "action.hover",
      },
    }}
  >
    <Box
      component="img"
      src={image}
      alt={title}
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />

    <Box sx={{ flex: 2, minWidth: 0 }}>
      <Typography variant="body2" fontWeight={500} noWrap lineHeight={1.3}>
        {title}
      </Typography>
    </Box>

    <Box sx={{ flex: 3, minWidth: 0 }}>
      <Typography
        variant="caption"
        color="text.secondary"
        noWrap
        sx={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

export default ListRowCard;
