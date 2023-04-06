import { Box } from "@mui/material";
import HomePageHero from "../components/HomePageHero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box>
        <HomePageHero />
      </Box>
    </Box>
  );
}
