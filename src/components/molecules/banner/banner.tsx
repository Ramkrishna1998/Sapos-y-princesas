/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImagecardCss from '@components/molecules/img-card/imgcard.module.scss';
import { getExtraClasses } from '@utils/common';
import { ImgCard } from '../img-card';
import styles from './banner.module.scss';
import addimg from './images/addimg.jpg';

import bannerImg from './images/Image.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';

interface IinfoDetailsProps {
  bannerdesc?: string;
  bannertitle?: string;
  bannertitlebottom?: string;
  children?: any;
  className?: string;
  showbannerdesc?: boolean;
  showbannertitle?: boolean;
  showsubtitle?: boolean;
  subtitle?: string;
}
export const Banner: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const {
    className,
    bannertitle,
    subtitle,
    bannerdesc,
    bannertitlebottom,
    showsubtitle = false,
    showbannertitle = false,
    showbannerdesc = false,
  } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.home_banner, extraClasses)}>
      <div className={styles.advertisement_sides}></div>
      <div className={styles.banner_main_wrapper}>
        <div className={styles.banner_container}>
          <div className={styles.banner_content}>
            {showsubtitle && (
              <h4
                className={cn(
                  'text_gray mono_header mb_22 text_center mobile_text_left',
                  styles.mono_header_content
                )}
              >
                {subtitle}
              </h4>
            )}
            {showbannertitle && <h2 className='mb_default'>{bannertitle}</h2>}
            {showbannerdesc && <p className='mb_default'>{bannerdesc}</p>}

            <Swiper
              navigation
              pagination
              className='plans_slider banner_slider mb_2 pagination_desktop'
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={0}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <ImgCard
                  cardimgClassName={styles.banner_img}
                  className={cn(ImagecardCss.basic_card, styles.basic_banner_img)}
                  imgcardtitle='Fuente: Sapos y Princesas'
                  showspecialtag={false}
                  src={bannerImg} 
                />
                <h2 className='mt_22'>{bannertitlebottom}</h2>
              </SwiperSlide>
              <SwiperSlide>
                <ImgCard
                   cardimgClassName={styles.banner_img}
                  className={cn(ImagecardCss.basic_card, styles.basic_banner_img)}
                  imgcardtitle='Fuente: Sapos y Princesas'
                  showspecialtag={false}
                  src={bannerImg}
                />
                <h2 className='mt_22'>{bannertitlebottom}</h2>
              </SwiperSlide>
              <SwiperSlide>
                <ImgCard
                   cardimgClassName={styles.banner_img}
                  className={cn(ImagecardCss.basic_card, styles.basic_banner_img)}
                  imgcardtitle='Fuente: Sapos y Princesas'
                  showspecialtag={false}
                  src={bannerImg}
                />
                <h2 className='mt_22'>{bannertitlebottom}</h2>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.add_banner}>
            <img alt='' src={addimg} />
          </div>
        </div>
      </div>
      <div className={styles.advertisement_sides}></div>
    </div>
  );
};
