import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { homepageContent } from "../../data/homepage";
import CarouselItem from "./CarouselItem";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <Box margin="auto" width={{ md: "70%", sm: "80%", xs: "90%" }}>
      <Swiper
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        centeredSlides={true}
      >
        {homepageContent?.helpingHandList?.map((data, index) => (
          <SwiperSlide key={data}>
            <CarouselItem {...{ data, index }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
