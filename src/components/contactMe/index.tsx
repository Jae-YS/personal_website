import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Box, Link, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import image1 from "@/assets/download-1.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  return (
    <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}>
      <Box
        id="contactme"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f4f4f4",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 8 },
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="artwork"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            flex: 1,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Contact Me (Text to replace)
          </Typography>
          <Typography sx={{ mb: 2 }}>Need to replace this text</Typography>

          <Box sx={{ borderTop: "1px solid black", my: 4, width: "100%" }} />

          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography>123 Demo Street</Typography>
            <Typography>Los Angeles, California</Typography>
            <Typography>(555) 555-5555</Typography>
            <Typography>email@example.com</Typography>
          </Stack>

          <Stack direction="row" spacing={2} justifyContent="center">
            if you want:
            <Link href="#" target="_blank">
              <InstagramIcon />
            </Link>
            <Link href="#" target="_blank">
              <TwitterIcon />
            </Link>
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactMe;
