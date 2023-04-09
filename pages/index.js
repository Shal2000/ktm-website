import { Box } from "@mui/material";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import HomePageHero from "../components/HomePageHero";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomePageHero />
      <AboutUs />
      <Mission />
      <Footer />
    </Box>
  );
}
