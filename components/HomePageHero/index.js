import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { homepageContent } from "../../data/homepage";

const HomePageHero = () => {
  return (
    <Box
      margin="auto"
      maxWidth={{ xl: "90%", lg: "1400px", xs: "100%" }}
      paddingTop={{ md: "80px", xs: "125px" }}
      height={{ md: "100vh" }}
      display="flex"
      alignItems="center"
      gap={{ xl: 12, lg: 6, md: 2, sm: 2, xs: "10px" }}
      px={{ lg: 6, md: 4, sm: 2, xs: "10px" }}
    >
      <Box
        my={{ md: 0, xs: 4 }}
        position="relative"
        height={{
          xl: "700px",
          lg: "600px",
          md: "500px",
          sm: "330px",
          xs: "190px",
        }}
        width={{
          xl: "525px",
          lg: "450px",
          md: "375px",
          sm: "250px",
          xs: "150px",
        }}
        minWidth={{
          xl: "525px",
          lg: "450px",
          md: "375px",
          sm: "250px",
          xs: "150px",
        }}
      >
        <Image
          alt="hero-homepage"
          src="/assets/hero-homepage.png"
          layout="fill"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xl: 10, lg: 6, md: 4, sm: 2 }}
      >
        {/* <Typography
          fontSize={{
            xl: "50px",
            lg: "40px",
            md: "30px",
            sm: "24px",
            xs: "18px",
          }}
          fontWeight={800}
        >
          {homepageContent?.heroTagLine}
        </Typography> */}
        <Typography
          fontSize={{
            xl: "36px",
            lg: "28px",
            md: "22px",
            sm: "18px",
            xs: "16px",
          }}
          fontWeight={{ md: 800, xs: 600 }}
        >
          {homepageContent?.heroTagLine1}
        </Typography>
        <Typography
          fontSize={{
            xl: "36px",
            lg: "28px",
            md: "22px",
            sm: "18px",
            xs: "16px",
          }}
          fontWeight={{ md: 800, xs: 600 }}
          display={{ sm: "block", xs: "none" }}
        >
          {homepageContent?.heroTagLine2}
        </Typography>
        <Typography
          fontSize={{
            xl: "36px",
            lg: "28px",
            md: "22px",
            sm: "18px",
            xs: "16px",
          }}
          fontWeight={{ md: 800, xs: 600 }}
          display={{ md: "block", xs: "none" }}
        >
          {homepageContent?.heroTagLine3}
        </Typography>
        {/* <Typography
          fontSize={{
            xl: "36px",
            lg: "28px",
            md: "24px",
            sm: "18px",
            xs: "14px",
          }}
          fontWeight={600}
        >
          {homepageContent?.heroSummary1}
        </Typography>
        <Typography
          fontSize={{
            xl: "36px",
            lg: "28px",
            md: "24px",
            sm: "18px",
            xs: "14px",
          }}
          fontWeight={600}
        >
          {homepageContent?.heroSummary2}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default HomePageHero;
