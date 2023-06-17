import cn from 'classnames';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@components/atoms/Button';
import ButtonStyles from '@components/atoms/Button/button.module.scss';
import { Tag } from '@components/atoms/tags';
import { Advertisement } from '@components/molecules/advertisement';
import { AdvertisementCard } from '@components/molecules/advertisement-card';
import { ImgCard } from '@components/molecules/img-card';
import ImagecardCss from '@components/molecules/img-card/imgcard.module.scss';
import { InfoDetailList } from '@components/molecules/info-details';
import infodetailstyles from '@components/molecules/info-details/infodetails.module.scss';
// import { Slider } from '@components/molecules/slider';
import { PlanCard } from '@components/molecules/plans-cards';
import Pancardstyles from '@components/molecules/plans-cards/plancard.module.scss';
import CalenderIcon from '@resources/images/svg/calender-clock.svg';
import ClockIcon from '@resources/images/svg/clock.svg';
import Downarrow from '@resources/images/svg/downarrow.svg';
import Location from '@resources/images/svg/location.svg';
import Money from '@resources/images/svg/money.svg';
import People from '@resources/images/svg/people.svg';
import Percentage from '@resources/images/svg/percentage.svg';
import RightArrow1 from '@resources/images/svg/rightarrow1.svg';
import RightArrow2Black from '@resources/images/svg/rightarrow2-black.svg';
import RightArrow2 from '@resources/images/svg/rightarrow2.svg';
import StarOutlined from '@resources/images/svg/star-outline.svg';
import { getExtraClasses } from '@utils/common';
// import { Footer } from '../footer';
import styles from './article.module.scss';
// import ArticleData from './data';
import Img1 from './images/artical1_img.png';
import Img2 from './images/artical2_img.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';

interface IarticlesProps {
  children?: any;
  className?: string;
}
export const Article: React.FC<IarticlesProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, children } = props;
  const extraClasses = getExtraClasses(styles, className);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={extraClasses}>
      {children}
      <div className='pt_2 container'>
        <div className='m_auto btn_with_Title mb_22'>
          <h2 className='text_gray'>Planes en</h2>
          <Button showicon className={cn(ButtonStyles.btn_icon_with, '')} Icon={Downarrow}>
            Santa Cruz de Tenerife
          </Button>
        </div>
        <h4
          className={cn(
            'text_gray mono_header mb_22 text_center mobile_text_left',
            styles.mono_header_content
          )}
        >
          ESPECtáculos • teatro
        </h4>
        <h1 className={cn('text_center m_auto mb_2 mobile_text_left', styles.main_header)}>
          Puy du Fou España. Día completo de emociones conociendo nuestra historia
        </h1>
        <div className={styles.basic_banner_Card}>
          <ImgCard
            className={cn(ImagecardCss.basic_card, styles.basic_banner_img)}
            imgcardtitle='Fuente: Sapos y Princesas'
            src={Img1}
          />
          <div className={cn(styles.basic_banner_details, 'container_article')}>
            <InfoDetailList className='mb_2'>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={Location} />
                </div>
                <span>Teatro Calderón, Madrid</span>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={People} />{' '}
                </div>
                <span>De 7 a 10 años</span>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={StarOutlined} />{' '}
                </div>
                <span>3.0/5 (125)</span>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={Money} />{' '}
                </div>
                <span>Desde 25,00€ </span>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={Percentage} />{' '}
                </div>
                <span>Con descuento</span>
              </li>
            </InfoDetailList>
          </div>
        </div>
        <div className='container_article'>
          <p className='mt_2 mb_2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <ImgCard
            className={cn(ImagecardCss.basic_card, styles.basic_banner_img)}
            imgcardtitle='Fuente: Sapos y Princesas'
            src={Img2}
          />

          <h2 className='mt_22 mb_22'>
            H2: &apos;Intimidad&apos;: las enseñanzas de una miniserie con problemáticas reales de
            la era digital
          </h2>
          <p className='mb_2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>

      <Advertisement />
      <div className='container'>
        <div className='container_article'>
          <p className='mt_2 mb_22'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <h3 className='h3-v2 mb_2'>
            &apos;Intimidad&apos;: las enseñanzas de una miniserie con problemáticas reales de la
            era digital
          </h3>
        </div>
      </div>

      <div className='gray_container pt_2 pb_2'>
        <div className='container'>
          <div className='container_article'>
            <InfoDetailList infotitle='Info práctica' showinfotitle={true}>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={CalenderIcon} />
                </div>
                <div>
                  <span>Fecha: Del 27/09/2022 al 28/05/2023 </span>
                  <span>Hora: L - V 18:00, S 15:00, D: 11:00</span>
                  <span>Cerrado el día 1 diciembre, 2 enero.</span>
                  <Link to='/'>Consultar fechas</Link>
                </div>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={Money} />{' '}
                </div>
                <span>Precio: De 25,00€ a 75,00€</span>
              </li>
              <li>
                <div className={infodetailstyles.Img_box}>
                  <img className={infodetailstyles.card_Img} src={People} />{' '}
                </div>
                <span>Edad: +7</span>
              </li>
            </InfoDetailList>
            <Button showicon className={cn(ButtonStyles.btn_icon_aprat, 'mt_1')} Icon={RightArrow2}>
              Comprar entradas
            </Button>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='container_article'>
          <InfoDetailList className='pt_2 pb_2'>
            <li>
              <div className={infodetailstyles.Img_box}>
                <img className={infodetailstyles.card_Img} src={Location} />
              </div>
              <div>
                <span>
                  <strong>Lugar </strong>
                </span>
                <span>Teatro Calderón</span>
                <span>C. de Atocha, 18, 28012 Madrid</span>
                <span>91.429.40.85</span>
                <span>www.musicalmatilda.es</span>
                <div className='mt_22'>
                  <strong className={infodetailstyles.location}>
                    Cómo llegar{' '}
                    <img className={infodetailstyles.title_img} src={RightArrow2Black} />
                  </strong>
                  <span>
                    Metro: Goya (L2, L4), Principe de Vergara (L2, L9) Autobus: 2, 15, 21, 26, 29,
                    30, 43, 52, 53, 56, 61, 63, 71, 143, 146, 152, 156, 215, E2, E3, E4, E5, C1, C2,
                    N3, N5, N7
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className={infodetailstyles.Img_box}>
                <img className={infodetailstyles.card_Img} src={ClockIcon} />
              </div>
              <span>2 horas y 45 minutos aprox (descanso incluido)</span>
            </li>
            <li>
              <div className={infodetailstyles.Img_box}>
                <img className={infodetailstyles.card_Img} src={ClockIcon} />
              </div>
              <h5 className={infodetailstyles.monolist}>
                CON CARRITO • ACompañados • grupos • CAT4 • CAT5
              </h5>
            </li>
          </InfoDetailList>
          <Button
            showicon
            className={cn(ButtonStyles.btn_icon_aprat, 'mt_2 mb_2')}
            Icon={RightArrow1}
          >
            Comentarios (65)
          </Button>
          <div className={cn(styles.tag_list, 'mt_2 mb_2')}>
            <Tag>Rutas y Excursiones</Tag>
            <Tag>Rural</Tag>
            <Tag>Rural It</Tag>
            <Tag>Rural It</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>Talleres para ninos</Tag>
            <Tag>Rural It</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>3 a 7 años</Tag>
          </div>
        </div>
      </div>
      <Advertisement />
      <div className='pt_2 pb_2 container'>
        <h2 className='text_gray mb_22'>Consultar fechas</h2>
        <div> 
        <DatePicker
          inline
          monthsShown={3}
          selected={startDate}
          onChange={(date) => setStartDate(date as Date)}
        />
        </div>
      </div>
      <div className='pt_2 container'>
        <h2 className='text_gray mb_22'>Planes similares</h2>
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
            <PlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <PlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <PlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <PlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <PlanCard />
          </SwiperSlide>
          <SwiperSlide>
            <PlanCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <Advertisement />
      <div className='gray_container'>
        <div className='container'>
          <div className='container_article'>
            <h3 className='text_center mb_22'>
              Sé el primero en enterarte de nuestras últimas noticias, artículos y ofertas
              exclusivas
            </h3>
            <form>
              <div className={styles.form_element}>
                <div className='form_group'>
                  <input
                    className='form_control text_center'
                    placeholder='ejemplo@mail.com'
                    type='email'
                  />
                </div>
                <Button>Quiero suscribirme</Button>
              </div>
            </form>
            <small className='text_gray text_center mt_22'>
              Al registrarme, acepto los Términos de Uso de Sapos y Princesas (incluido el
              procedimientos de resolución de disputas); mi información será utilizada como descrito
              en el Aviso de Privacidad
            </small>
          </div>
        </div>
      </div>

      <div className='mb_2 mt_2 container'>
        <h2 className='text_gray mb_22'>Te puede interesar</h2>
        <div className={styles.col2}>
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
        </div>
      </div>
      <div className='gray_container'>
        <div className='container_article'>
          <h3 className='text_center'>
            Ajusta el contenido a la edad de tu hijo. ¿Qué rango de edad te interesa?
          </h3>
          <div className={cn(styles.tag_list, styles.tag_Dark, 'mt_2 mb_2')}>
            <Tag>Rutas y Excursiones</Tag>
            <Tag>Rural</Tag>
            <Tag>Rural It</Tag>
            <Tag>Rural It</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>Talleres para ninos</Tag>
            <Tag>Rural It</Tag>
            <Tag>Semana Santa</Tag>
            <Tag>3 a 7 años</Tag>
          </div>
        </div>
      </div>
      <Advertisement />
      <div className='mt_2 container'>
        <h2 className='text_gray mb_22'>Planes similares</h2>
        <div className={cn(styles.row_planes, 'colomns mb_2')}>
          <PlanCard className={styles.col_plans} />
          <PlanCard className={styles.col_plans} />
          <PlanCard className={styles.col_plans} />
        </div>

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
      <Advertisement />
      {/* <Footer /> */}
    </div>
  );
};
