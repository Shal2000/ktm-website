import { Box, Typography } from "@mui/material";
import { homepageContent } from "../../data/homepage";
import Title from "../Title";

const AboutUs = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/assets/aboutus-homepage.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        maxWidth={{ xl: "80%", lg: "1200px", md: "100%" }}
        py={{ xl: 16, lg: 12, md: 8, sm: 8, xs: 6 }}
        margin="auto"
      >
        <Title
          style="contain"
          color="black"
          text="About Us"
          textColor="white"
        />
        <Box
          px={{ xl: 20, lg: 12, md: 8, sm: 6, xs: 2 }}
          pt={{ xl: 8, lg: 8, md: 6, xs: 4 }}
          display="flex"
          flexDirection="column"
          gap={{ xl: 8, lg: 4, md: 4, xs: 3 }}
        >
          {homepageContent?.aboutUs.map((item, index) => (
            <Typography
              fontSize={{ xl: 28, lg: 24, md: 20, sm: 18, xs: 14 }}
              fontWeight={500}
              key={index}
              textAlign="center"
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
