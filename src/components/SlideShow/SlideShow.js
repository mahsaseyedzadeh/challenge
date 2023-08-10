'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import  styles from './slideShow.module.scss';
import SwiperCard from "@/components/SwiperCard";

const slideShow = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        pagination
        onSwiper={(swiper) => {
          swiper.update();
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000
        }}
        loop={true}
        slidesPerView={"auto"}
        spaceBetween={16}
      >
        {[...Array(5)].map((key, index) =>(
          <SwiperSlide key={index}>
            <SwiperCard/>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>

  )
}
export default slideShow