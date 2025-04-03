import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelectedPage }: Props) => {
  const theme = useTheme();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <Box
      id="ContactMe"
      sx={{
        maxWidth: "83.3333%",
        mx: "auto",
        pt: 12,
        pb: 16,
      }}
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactMe)}
      >
        {/* HEADER */}
        <motion.div
          style={{ maxWidth: "60%" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              JOIN NOW
            </Box>{" "}
            TO GET IN SHAPE
          </HText>
          <Typography sx={{ my: 2 }}>
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </Typography>
        </motion.div>

        {/* FORM AND IMAGE */}
        <Box
          sx={{
            mt: 6,
            display: { md: "flex" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* FORM */}
          <motion.div
            style={{ flexBasis: "60%" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Box
              component="form"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
            >
              {/* NAME */}
              <TextField
                fullWidth
                placeholder="NAME"
                variant="filled"
                sx={{
                  mb: 3,
                  borderRadius: "8px",
                  bgcolor: "primary.light",
                  input: {
                    color: "white",
                    "::placeholder": { color: "white" },
                  },
                }}
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <Typography sx={{ mt: 1, color: "primary.main" }}>
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </Typography>
              )}

              {/* EMAIL */}
              <TextField
                fullWidth
                placeholder="EMAIL"
                variant="filled"
                sx={{
                  mb: 3,
                  borderRadius: "8px",
                  bgcolor: "primary.light",
                  input: {
                    color: "white",
                    "::placeholder": { color: "white" },
                  },
                }}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <Typography sx={{ mt: 1, color: "primary.main" }}>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </Typography>
              )}

              {/* MESSAGE */}
              <TextField
                fullWidth
                placeholder="MESSAGE"
                variant="filled"
                multiline
                rows={4}
                sx={{
                  mb: 3,
                  borderRadius: "8px",
                  bgcolor: "primary.light",
                  textarea: {
                    color: "white",
                    "::placeholder": { color: "white" },
                  },
                }}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <Typography sx={{ mt: 1, color: "primary.main" }}>
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </Typography>
              )}

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  px: 5,
                  py: 1.5,
                  borderRadius: "8px",
                  backgroundColor: "secondary.main",
                  color: "black",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            style={{ flexBasis: "40%", marginTop: "4rem" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Box sx={{ position: "relative", width: "100%" }}>
              <img alt="contact-us-page-graphic" style={{ width: "100%" }} />
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactMe;
