import cn from 'classnames';
import Specials from '@resources/images/svg/specials.svg';
import { getExtraClasses } from '@utils/common';
import styles from './imgcard.module.scss';

interface IimgCardProps {
  bottomrightcontent?: string;
  cardimgClassName?: string;
  className?: string;
  imgcardtitle?: string;
  showspecialtag?: boolean;
  showtitle?: boolean;
  src?: string;
  toprightcontent?: string;
}
export const ImgCard: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, src, imgcardtitle, showspecialtag = true, cardimgClassName, showtitle= true, toprightcontent, bottomrightcontent } = props;
  const extraClasses = getExtraClasses(styles, className);
  const cardimgClasses = getExtraClasses(styles, cardimgClassName);

  return (
    <div className={cn('img_card_box', extraClasses)}>
      <div className={styles.Img_box}>
        <img alt={imgcardtitle} className={cn(styles.card_Img, cardimgClasses)} src={src} />
        {showspecialtag && 
         <div className={styles.specials}>
         <img alt='special image' src={Specials} />
       </div>
        }
       <span className={cn(styles.overlay_content, styles.top_right)}>{toprightcontent}</span>
       <span className={cn(styles.overlay_content, styles.bottom_right)}>{bottomrightcontent}</span>
       
      </div>
      {showtitle && 
         <p className={cn('text_gray' , styles.card_title)}>{imgcardtitle}</p>
        }
     
    </div>
  );
};
