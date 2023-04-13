import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { colors } from "../../data/colors";

const CustomIconButton = ({ data }) => {
  return (
    <Box display="flex" alignItems="center">
      <Link href={data?.link}>
        <IconButton
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#FFF3CD",
            color: colors.black,
            boxShadow: "none",
            fontSize: "20px",
            "&:hover": {
              backgroundColor: "#FFF3CD",
              boxShadow: "none",
            },
          }}
        >
          {data?.icon}
        </IconButton>
      </Link>
      {data?.data && (
        <Typography
          fontSize={{ md: "16px", sm: "14px", xs: "13px" }}
          px={{ sm: 1, xs: "4px" }}
          sx={{
            cursor: "pointer",
          }}
        >
          {data?.data}
        </Typography>
      )}
    </Box>
  );
};

export default CustomIconButton;
