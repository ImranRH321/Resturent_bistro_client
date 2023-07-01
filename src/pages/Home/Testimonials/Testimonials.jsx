import React from "react";
import { useState, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [rating, setRating] = useState(0) // Initial value
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviewsData(data);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        smallHeading={"---What Our Clients Say---"}
        largeHeading={"TESTIMONIALS"}
      ></SectionTitle>
      {/* <h1>TEst Miya {reviewsData.length} </h1>  */}
      <section className="mx-3 mt-0">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide>
              <div className="flex flex-col  items-center justify-center m-16">
               <h1><Rating style={{ maxWidth: 250 }} value={review?.rating} onChange={setRating} /></h1>
                <p className="">{review.details}</p>
                <h2 className="text-3xl mt-4 mb-0 fw-bolder text-yellow-600">{review.name}</h2>
              </div>
              ;
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
