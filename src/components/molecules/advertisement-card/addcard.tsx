import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import styles from './addcard.module.scss';
import CardImg from './images/advertisement-banner.png';


interface IimgCardProps {
  className?: string;
  imgcardtitle?: string;
  showspecialtag?: boolean;
  src?: string;
}
export const AdvertisementCard: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.add_card_box, extraClasses)}>
        <div className={styles.add_card_img}>
        <img src={CardImg} alt=''/>
        </div>
        <div className={styles.add_description}>
         <h4>Especial Viajes Abril 2023</h4>
        </div>
    </div>
  );
};
