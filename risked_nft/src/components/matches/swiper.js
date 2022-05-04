import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MatchSwiper = ({matchLists}) => {

  return (
    <Fragment>
      <div className="match-swiper">
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {matchLists.map((item, i) => {
              return (
                <SwiperSlide className="swiper-slide-wrap" key={i}>
                  <div className="swiper-content">
                    <div className="swiper-card-detail">
                      <img src={item.img} alt="swiperimg" />
                      <div className="timing-main ms-3">
                        <p className="mb-0">{item.title}</p>
                        <span>{item.detail}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default MatchSwiper;
