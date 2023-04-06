import { Button } from "@mui/material";
import { colors } from "../../data/colors";

const CustomButton = ({ text, backgroundColor }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: backgroundColor,
        boxShadow: "none",
        color: colors.black,
        textTransform: "unset",
        fontSize: { md: "16px", xs: "14px" },
        fontWeight: 500,
        px: { md: 3, xs: 2 },
        "&:hover": {
          backgroundColor: backgroundColor,
          boxShadow: "none",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
