import cn from 'classnames';
import CalenderIcon from '@resources/images/svg/calender-clock.svg';
import LocationIcon from '@resources/images/svg/location.svg';
import StarIcon from '@resources/images/svg/star-outlined.svg';
import { getExtraClasses } from '@utils/common';
import { ImgCard } from '../img-card';
import CardImg from './images/placard.png';
import styles from './plancard.module.scss';

interface IimgCardProps {
  Specials?: string;
  SpecialsIConClassName?:string;
  className?: string;
  fullwidthbottomtext?: string,
  imgcardtitle?: string;
  plandescclassName?: string;
  showdesclabel?: boolean;
  showplancarddesc?: boolean;
  showplantitle?: boolean;
  showranks?: boolean;
  showspecialtag?: boolean;
  src?: string;
}
export const PlanCard: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, showplancarddesc = true, showplantitle = true, showranks = false, plandescclassName, Specials, SpecialsIConClassName, fullwidthbottomtext, showdesclabel = true  } = props;
  const extraClasses = getExtraClasses(styles, className);
  const plandescclass = getExtraClasses(styles, plandescclassName);
  const SpecialsIConClass = getExtraClasses(styles, SpecialsIConClassName )

  return (
    <div className={cn(styles.plan_card_box, extraClasses)}>
      <ImgCard
        bottomrightcontent='desde €20.50'
        cardimgClassName={styles.card_img_Fix}
        className={styles.imgcard}
        fullwidthbottomtext={fullwidthbottomtext}
        showfullwidthbottomtext={true}
        showspecialtag={true}
        showtitle={false}
        Specials={Specials}
        SpecialsIConClassName={SpecialsIConClass}
        src={CardImg}
        toprightcontent='3 a 6 aÑos'
      />
      <div className={cn(styles.plan_description, plandescclass)}>
        <div className={styles.desc_sub_rates}>
       {showdesclabel &&
         <span className={styles.desc_label}>RETOS en la educación</span>
       }
        {showranks && (
           <div className={styles.ranks}>
           <img alt='' src={StarIcon} />
           <span>3.0/5 (125)</span>
         </div>
        )}
        </div>
        {showplantitle && (
          <h4>Preparando el camino de la escuela infantil al cole de los mayores</h4>
          )}
        {showplancarddesc && (
          <div className={styles.plan_info_list}>
            <div className={styles.plan_info}>
              <img alt='' src={LocationIcon} />
              <span>Pedralba, Valencia</span>
            </div>
            <div className={styles.plan_info}>
              <img alt='' src={CalenderIcon} />
              <span>14 y 15 de Junio</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
