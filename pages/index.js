import { Box } from "@mui/material";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HomePageHero from "../components/HomePageHero";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import OurMotto from "../components/OurMotto";
import OurValues from "../components/OurValues";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomePageHero />
      <AboutUs />
      <Mission />
      <OurValues />
      <OurMotto />
      <Footer />
    </Box>
  );
}
