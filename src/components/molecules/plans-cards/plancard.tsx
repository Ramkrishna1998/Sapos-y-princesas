import cn from 'classnames';
import CalenderIcon from '@resources/images/svg/calender-clock.svg';
import LocationIcon from '@resources/images/svg/location.svg';
import { getExtraClasses } from '@utils/common';
import { ImgCard } from '../img-card';
import CardImg from './images/placard.png';
import styles from './plancard.module.scss';


interface IimgCardProps {
  className?: string;
  imgcardtitle?: string;
  showspecialtag?: boolean;
  src?: string;
}
export const PlanCard: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.plan_card_box, extraClasses)}>
        <ImgCard bottomrightcontent='desde €20.50'  cardimgClassName={styles.card_img_Fix} className={styles.imgcard} showspecialtag={true} showtitle={false} src={CardImg} toprightcontent='3 a 6 aÑos
' />
        <div className={styles.plan_description}>
          <span>RETOS en la educación</span>
          <h4>Preparando el camino de la escuela infantil al cole de los mayores</h4>
          <div className={styles.plan_info_list}>
                <div className={styles.plan_info}>
                <img src={LocationIcon} alt='' />
               <span>Pedralba, Valencia</span>
                </div>
                <div className={styles.plan_info}>
                <img src={CalenderIcon} alt='' />
               <span>14 y 15 de Junio</span>
                </div>
          </div>
        </div>
    </div>
  );
};
