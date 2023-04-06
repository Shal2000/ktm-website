import { Box } from "@mui/material";
import { colors } from "../../data/colors";
import CustomButton from "../../components/CustomButton";
import Image from "next/image";
import { socialLinks } from "../../data";
import CustomIconButton from "../CustomIconButton";

const Navbar = () => {
  return (
    <Box
      px={{ lg: "50px", md: "30px", sm: "20px", xs: "20px" }}
      py={{ md: 1, xs: "20px" }}
      width="100%"
      zIndex={100}
      position="fixed"
    >
      <Box
        height={{ md: "80px", xs: "125px" }}
        borderBottom={`1px solid ${colors.gray}`}
        display="flex"
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="space-between"
      >
        <Box height="100%" width="100%">
          <Box
            position="relative"
            height={{ md: "70px", xs: "50px" }}
            width={{ xl: "170px", md: "160px", xs: "120px" }}
            mb={{ md: 0, xs: "4px" }}
          >
            <Image src="/assets/logo-sm.png" alt="logo" layout="fill" />
          </Box>
          <Box
            display={{ md: "none", xs: "flex" }}
            alignItems="center"
            gap={1}
            mt={{ md: 0, xs: 1 }}
          >
            {socialLinks?.map((item) => (
              <CustomIconButton
                key={item?.icon}
                icon={item?.icon}
                link={item?.link}
              />
            ))}
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column-reverse" }}
          alignItems="center"
          gap={3}
        >
          <Box display={{ md: "flex", xs: "none" }} alignItems="center" gap={3}>
            {socialLinks?.map((item) => (
              <CustomIconButton
                key={item?.icon}
                icon={item?.icon}
                link={item?.link}
              />
            ))}
          </Box>
          <CustomButton text="Subscribe" backgroundColor={colors.yellow} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
