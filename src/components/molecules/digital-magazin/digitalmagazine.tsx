/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getExtraClasses } from '@utils/common';
import { AdvertisementCard } from '../advertisement-card';
import styles from './digitalmagazine.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const DigitalMagazine: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn( 'mb_2 pt_2 container', extraClasses)}>
      <h2 className='text_gray mb_22 mt_2'>Disfruta gratis de nuestras revistas digitales</h2>
        <Swiper
          navigation
          pagination
          className='plans_slider mb_2'
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={3}
          spaceBetween={8}
          breakpoints={{
            0: {
              slidesPerView: 1.7,
            },
            481: {
              slidesPerView: 2,
            },
            769: {
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
          <SwiperSlide>
            <AdvertisementCard />
          </SwiperSlide>
        </Swiper>
      </div>

    </>
  );
};
