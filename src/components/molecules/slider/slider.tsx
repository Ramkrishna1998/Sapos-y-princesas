/* eslint-disable react/prop-types */

import { ReactElement } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import '@resources/css/libs/custom-swiper.scss';


interface ISlider extends SwiperProps {
  className?: string;
  slides: (Slide: typeof SwiperSlide) => ReactElement[];
}

export const Slider: React.FC<ISlider> = ({ slides, className, ...props }) => (
  <Swiper modules={[Autoplay, Pagination, Navigation]} {...props} className={className}>
    {slides(SwiperSlide)}
  </Swiper>
);
