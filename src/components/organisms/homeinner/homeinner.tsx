import cn from 'classnames';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@components/atoms/Button';
import ButtonStyles from '@components/atoms/Button/button.module.scss';
import { Tag } from '@components/atoms/tags';
import { Advertisement } from '@components/molecules/advertisement';
import { Banner } from '@components/molecules/banner';
import { Categories } from '@components/molecules/categories';
import { FindPlans } from '@components/molecules/find-plan';
import { PlanCard } from '@components/molecules/plans-cards';
import Pancardstyles from '@components/molecules/plans-cards/plancard.module.scss';
import { Tabview } from '@components/molecules/tab-view';
import GiftIcon from '@resources/images/svg/gift.svg';
import mic from '@resources/images/svg/mic.svg';
import RightArrow2 from '@resources/images/svg/rightarrow2.svg';
import { getExtraClasses } from '@utils/common';
import styles from './homeInner.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-datepicker/dist/react-datepicker.css';

interface IarticlesProps {
  children?: any;
  className?: string;
}
export const HomeInner: React.FC<IarticlesProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, children } = props;
  const extraClasses = getExtraClasses(styles, className);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className={extraClasses}>
      {children}
      <Advertisement />

      <section className={cn(styles.banner_slider , 'container_fluid')}>
        <div className='banner_container mt_2 mb_2'>
          <h2 className='mb_2'>Te recomendamos</h2>
        </div>
        <Banner bannertitlebottom="'Intimidad': las enseñanzas de una miniserie con problemáticas reales de la era digital" showbannertitlebottom={true} />
      </section>
      <section className='gray_container'>
        <div className='banner_container text_center'>
          <h3>Personaliza el contenido a la edad de tu hijo. </h3>
          <h3> ¿Qué rango de edad te interesa?</h3>
          <div className={cn(styles.tag_list, styles.tag_Dark, 'mt_2')}>
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
      </section>
      <section className='banner_container mt_2 mb_2'>
        <h2 className='text_gray text_center mb_22 mobile_h2 '>Últimos artículos destacados (BLOQUE DE 2)</h2>
        <div className={cn(styles.row_planes, 'colomns')}>
          <PlanCard className={styles.col_plans} showplancarddesc={false} />
          <PlanCard className={styles.col_plans} showplancarddesc={false} />
        </div>
      </section>
      <Advertisement />
      <section className={styles.find_plan}>
        <FindPlans />
      </section>
      <section className='banner_container mt_2 mb_2'>
        <h2 className='text_gray text_center mb_22 '>Planes destacados en España (BLOQUE DE 2)</h2>
        <div className={cn(styles.row_planes, 'colomns')}>
          <PlanCard className={styles.col_plans} showplancarddesc={true} showranks={true} />
          <PlanCard className={styles.col_plans} showplancarddesc={true} showranks={true} />
        </div>
      </section>
      <section className='gray_container pb_2 Pt_2'>
        <h2 className='text_gray mb_22 text_center'>Últimos artículos (BLOQUE DE 5)</h2>
        <div className='container_limit'>
          <div className={cn(styles.row_bloque, 'colomns mb_default')}>
            <PlanCard
              className={styles.col_bloque}
              plandescclassName={styles.card_bloque}
              showplancarddesc={false}
            />
            <PlanCard
              className={styles.col_bloque}
              plandescclassName={styles.card_bloque}
              showplancarddesc={false}
            />
            <PlanCard
              className={styles.col_bloque}
              plandescclassName={styles.card_bloque}
              showplancarddesc={false}
            />
            <PlanCard
              className={styles.col_bloque}
              plandescclassName={styles.card_bloque}
              showplancarddesc={false}
            />
            <PlanCard
              className={styles.col_bloque}
              plandescclassName={styles.card_bloque}
              showplancarddesc={false}
            />
          </div>
        </div>
      </section>
      <Advertisement />
      <section className='pt_2 pb_2 container'>
        <h2 className='text_gray mb_22 '>¿ Qué planes quieres hacer?</h2>
        <div className={styles.swiper_container}>
          <Tabview>
            <Swiper
              navigation
              pagination
              className='plans_slider mt_1'
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
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard showplancarddesc={false} />
              </SwiperSlide>
            </Swiper>
          </Tabview>
        </div>
      </section>
      <section className='pt_2 pb_2 container'>
        <h2 className='text_gray mb_22 '>Tu título aquí para 1/3 - 2/3</h2>
        <div className={styles.row_parts}>
              <div className={styles.col3}>
              <PlanCard showplancarddesc={false} />
              </div>
              <div className={styles.col9}>
              <PlanCard className={cn(Pancardstyles.side_by_side, Pancardstyles.desc_center, styles.card_aside)} showplancarddesc={false} />
              </div>
        </div>
      </section>

      <section className='gray_container'>
        <div className='container'>
          <div className={styles.subscribe_container}>
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
      </section>
      <Advertisement />
      <section className='gray_container pb_2 pt_2'>
        <div className='container'>
          <h3 className='text_center mb_2'>Descubre y disfruta de planes en tu ciudad</h3>
          <div className={cn(styles.tag_list, styles.tag_Dark, 'mt_2')}>
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
      </section>
      <section className='pt_2 pb_2 container'>
        <h2 className='text_gray mb_22 '>Los mejores planes para todos</h2>
        <div className={styles.swiper_container}>
          <Swiper
            navigation
            pagination
            className='plans_slider mt_1'
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
                slidesPerView: 4,
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
          <div className='text_center'>
            <Button showicon className={cn(ButtonStyles.btn_icon_with, 'mt_1')} Icon={RightArrow2}>
              Más planes inolvidables para disfrutar
            </Button>
          </div>
        </div>
      </section>
      <section className='pt_2 pb_2 container'>
        <h2 className='text_gray mb_22 '>Artículos que no debes perderte</h2>
        <div className={styles.swiper_container}>
          <Swiper
            navigation
            pagination
            className='plans_slider mt_1'
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
                slidesPerView: 4,
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
          <div className='text_center'>
            <Button showicon className={cn(ButtonStyles.btn_icon_with, 'mt_1')} Icon={RightArrow2}>
              Más planes inolvidables para disfrutar
            </Button>
          </div>
        </div>
      </section>
      <section className='mb_2 mt_2 container'>
        <h2 className='text_gray mb_22'>Te puede interesar</h2>
        <div className={styles.col2}>
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
        </div>
      </section>
      <Advertisement />
      <section className='mb_2 mt_2 container'>
        <h2 className='text_gray mb_22'>Tu título aquí (BLOQUE CUADRADO - nuevo)</h2>
        <div className={styles.grid_wrapped_cards}>
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
          <PlanCard className={styles.col_bloque_grid} showplancarddesc={false} />
        </div>
      </section>
      <section className='gray_container pt_2 pb_2'>
        <div className='container'>
          <h2 className='text_gray mb_22 '>Los mejores planes para todos</h2>
          <div className={styles.swiper_container}>
            <Swiper
              navigation
              pagination
              className='plans_slider mt_1'
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
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  fullwidthbottomtext='Juan Pérez'
                  showdesclabel= {false}
                  showplancarddesc={false}
                  Specials={mic}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
            </Swiper>
            <div className='text_center'>
              <Button
                showicon
                className={cn(ButtonStyles.btn_icon_with, 'mt_1')}
                Icon={RightArrow2}
              >
                Más planes inolvidables para disfrutar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='container pt_2 pb_2'>
        <div className='container'>
        <h2 className='text_gray mb_22 header_with_icon '><img alt=""  src={GiftIcon} />Sorteos en nuestra web</h2>
          <div className={styles.swiper_container}>
            <Swiper
              navigation
              pagination
              className='plans_slider mt_1'
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
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
              <SwiperSlide>
                <PlanCard
                  Specials={GiftIcon}
                  SpecialsIConClassName={styles.mic_bg}
                />
              </SwiperSlide>
            </Swiper>
            <div className='text_center'>
              <Button
                showicon
                className={cn(ButtonStyles.btn_icon_with, 'mt_1')}
                Icon={RightArrow2}
              >
                Más planes inolvidables para disfrutar
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Advertisement />
      <section className='gray_container pb_2 pt_2'>
        <div className='container'>
          <h3 className='text_center mb_2'>Cuándo quieres hacer planes</h3>
          <div className={cn(styles.tag_list, styles.tag_Dark, 'mt_2')}>
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
      </section>
      <section className='container_fluid pb_2 pt_2'>
      <div className='container_categories'>
      <h3 className='mb_22'>Descubre. Sorpréndete</h3>
              <Categories />
      </div>
    
      </section>
    </div>
  );
};
