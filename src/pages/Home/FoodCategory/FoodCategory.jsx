// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import { Pagination } from "swiper";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const FoodCategory = () => {
  return (
    <section>
      {/* Title page heading Section title */}
      <SectionTitle
        smallHeading="---From 11:00am to 10:00pm---"
        largeHeading="ORDER ONLINE"
      ></SectionTitle>
      {/*  */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-5"
      >
        <SwiperSlide>
          <img src={slide1} alt="img no fund" />
          <h1
            className="uppercase fwb-o
      text-center -mt-20 text-4xl text-white"
          >
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="img no fund" />
          <h1
            className="uppercase fwb-o
      text-center -mt-20 text-4xl text-white"
          >
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="img no fund" />
          <h1
            className="uppercase fwb-o
      text-center -mt-20 text-4xl text-white"
          >
            pizzas
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="img no fund" />

          <h1
            className="uppercase fwb-o
      text-center -mt-20 text-4xl text-white"
          >
            desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="img no fund" />
          <h1
            className="uppercase fwb-o
      text-center -mt-20 text-4xl text-white"
          >
            Drinks
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategory;
