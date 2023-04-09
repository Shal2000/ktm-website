import { Box, Typography } from "@mui/material";
import { colors } from "../../data/colors";
import { homepageContent } from "../../data/homepage";
import Title from "../Title";
import ValueIcon from "./ValueIcon";

const OurValues = () => {
  return (
    <Box bgcolor={colors.black}>
      <Box
        maxWidth={{ xl: "80%", lg: "1200px", md: "100%" }}
        py={{ xl: 16, lg: 12, md: 8, sm: 8, xs: 6 }}
        margin="auto"
        display="flex"
        flexDirection="column"
      >
        <Title
          text="Our Values"
          color={colors.yellow}
          textColor={colors.black}
          style="contain"
        />
        <Typography
          px={{ xl: 20, lg: 12, md: 8, sm: 6, xs: 2 }}
          py={{ xl: 6, lg: 6, md: 4, xs: 3 }}
          color="white"
          fontSize={{ xl: 28, lg: 24, md: 20, sm: 18, xs: 14 }}
          fontWeight={500}
          textAlign="center"
        >
          Our social enterprise&#39;s value include:
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          justifyContent="center"
          mt={{ lg: 2, xs: 1 }}
          px={{ sm: 0, xs: 1 }}
          gap={{ lg: 10, md: 6, sm: 4, xs: 5 }}
        >
          {homepageContent.values?.map((item) => (
            <ValueIcon key={item.text} icon={item.icon} text={item.text} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurValues;
