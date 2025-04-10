import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  Box,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import image1 from "@/assets/download-1.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const theme = useTheme();

  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
    >
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
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
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

          <Typography
            variant="caption"
            sx={{
              mt: 1,
              color: theme.palette.text.secondary,
              fontSize: isAboveMediumScreens ? "1rem" : "0.75rem",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Untitled, 2024 — Mixed media on canvas
          </Typography>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
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
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ContactMe;
