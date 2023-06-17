/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import cn from 'classnames';
import SpecialsIcon from '@resources/images/svg/star-filled.svg';
import { getExtraClasses } from '@utils/common';
import styles from './imgcard.module.scss';

interface IimgCardProps {
  Specials?: any;
  SpecialsIConClassName?: string;
  bottomrightcontent?: string;
  cardimgClassName?: string;
  className?: string;
  fullwidthbottomtext?: string,
  imgcardtitle?: string;
  showfullwidthbottomtext?: boolean;
  showspecialtag?: boolean;
  showtitle?: boolean;
  src?: string;
  toprightcontent?: string;
}
export const ImgCard: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, src, imgcardtitle, showspecialtag = true, cardimgClassName, showtitle= true, toprightcontent, bottomrightcontent, Specials= SpecialsIcon, SpecialsIConClassName, fullwidthbottomtext, showfullwidthbottomtext= false } = props;
  const extraClasses = getExtraClasses(styles, className);
  const cardimgClasses = getExtraClasses(styles, cardimgClassName);
  const Specialsclasses = getExtraClasses(styles, SpecialsIConClassName)

  return (
    <div className={cn('img_card_box', extraClasses)}>
      <div className={styles.Img_box}>
       <div className={styles.img_container}>
       <img alt={imgcardtitle} className={cn(styles.card_Img, cardimgClasses)} src={src} />
       </div>
        {showspecialtag && 
         <div className={cn(styles.specials, Specialsclasses)}>
         <img alt='special image' src={Specials} />
       </div>
        }
       <span className={cn(styles.overlay_content, styles.top_right)}>{toprightcontent}</span>
       <span className={cn(styles.overlay_content, styles.bottom_right)}>{bottomrightcontent}</span>
      {showfullwidthbottomtext &&
         <span className={cn(styles.full_Bottom_text, '')}>{fullwidthbottomtext}</span>
      }
       
      </div>
      {showtitle && 
         <p className={cn('text_gray' , styles.card_title)}>{imgcardtitle}</p>
        }
     
    </div>
  );
};
