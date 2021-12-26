import React from "react";
import { Box, HStack, IconButton } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";

import { reviews } from "../../../data/reviews";
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes

  return (
    <Box height={"600px"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {reviews.map((review) => (
          <Box key={review.name}>
            <ReviewCard review={review} />
          </Box>
        ))}
      </Slider>

      <HStack justify={"space-between"} mt={4} p={4}>
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="blue"
          rounded="full"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="blue"
          rounded="full"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>
      </HStack>
    </Box>
  );
}
