import { Typography, Box } from "@mui/material";
import Image from "next/image";
import { colors } from "../../data/colors";
import parse from "html-react-parser";

const ValueIcon = ({ text, icon }) => {
  return (
    <Box>
      <Box
        p={{ md: 2, xs: "12px" }}
        borderRadius="100%"
        bgcolor={colors.yellow}
        width={{ md: "80px", xs: "60px" }}
        height={{ md: "80px", xs: "60px" }}
        margin="auto"
      >
        <Box width="100%" height="100%" position="relative">
          <Image src={icon} alt={text} layout="fill" />
        </Box>
      </Box>
      <Typography
        mt={{ md: 2, xs: 1 }}
        fontSize={{ xl: 24, lg: 20, md: 18, sm: 16, xs: 14 }}
        fontWeight={500}
        color="white"
        textAlign="center"
      >
        {parse(text)}
      </Typography>
    </Box>
  );
};

export default ValueIcon;
