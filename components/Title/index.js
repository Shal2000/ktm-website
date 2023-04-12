import { Box, Typography } from "@mui/material";

const Title = ({ style, color, text, textColor }) => {
  return (
    <Box>
      {style == "contain" ? (
        <Box>
          <Box
            color={textColor}
            bgcolor={color}
            width="fit-content"
            px={{ md: 4, xs: 3 }}
            py={1}
            margin="auto"
            borderRadius={{ md: "10px", xs: "7px" }}
            // border={`2px solid ${textColor}`}
          >
            <Typography
              fontSize={{ lg: 30, md: 28, sm: 24, xs: 16 }}
              fontWeight={600}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography
          fontSize={{ lg: 30, md: 28, sm: 24, xs: 16 }}
          fontWeight={600}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Title;
