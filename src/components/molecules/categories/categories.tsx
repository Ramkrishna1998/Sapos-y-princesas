import cn from 'classnames';
import CalenderIcon from '@resources/images/svg/calender-clock.svg';
import { getExtraClasses } from '@utils/common';
import styles from './categories.module.scss';

interface IimgCardProps {
  className?: string;
  src?: string;
}
export const Categories: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);


  return (
    <div className={cn(styles.categories_box, extraClasses)}>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Verano</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Revista</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Planes</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Manualidades</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Recetas</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>En casa</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Artículos</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Viajes</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Especiales</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={CalenderIcon} />
              <p>Sorteos</p>
          </div>
    </div>
  );
};
