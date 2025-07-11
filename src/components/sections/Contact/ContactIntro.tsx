import { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

const ContactIntro = forwardRef<HTMLDivElement>((_, ref) => (
  <Box
    ref={ref}
    sx={{
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      px: { xs: 2, md: 4 },
    }}
  >
    <Typography
      variant="h4"
      fontWeight={700}
      gutterBottom
      sx={{ fontSize: { xs: "2rem", md: "4rem" } }}
    >
      Let's get in touch!
    </Typography>
    <Typography
      sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
      fontWeight={500}
    >
      Don&apos;t be afraid to say hello! I&apos;m open to opportunities and
      collaborations!
    </Typography>
  </Box>
));

export default ContactIntro;
