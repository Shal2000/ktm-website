import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../data/colors";

const CustomIconButton = ({ icon, link, text }) => {
  return (
    <Box>
      <Link href={link}>
        <IconButton
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#FFF3CD",
            color: colors.black,
            boxShadow: "none",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#FFF3CD",
              boxShadow: "none",
            },
          }}
        >
          {icon}
        </IconButton>
      </Link>
      <Typography>{text}</Typography>
    </Box>
  );
};

export default CustomIconButton;
