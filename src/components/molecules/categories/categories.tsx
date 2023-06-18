import cn from 'classnames';
import airplanIcon from '@resources/images/svg/airplane.svg';
import carftIcon from '@resources/images/svg/Crafts.svg';
import DiamondIcon from '@resources/images/svg/diamond.svg'
import giftIcon from '@resources/images/svg/gift.svg';
import MagazineIcon from '@resources/images/svg/Magazine.svg';
import RecipeIcon from '@resources/images/svg/Recipes.svg';
import specialMenuIcon from '@resources/images/svg/specialsmenu.svg';
import SummerIcon from '@resources/images/svg/summer.svg';
import tripsIcon from '@resources/images/svg/trips.svg';
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
              <img alt='' src={SummerIcon} />
              <p>Verano</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={MagazineIcon} />
              <p>Revista</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={DiamondIcon} />
              <p>Planes</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={carftIcon} />
              <p>Manualidades</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={RecipeIcon} />
              <p>Recetas</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={airplanIcon} />
              <p>En casa</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={giftIcon} />
              <p>Artículos</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={tripsIcon} />
              <p>Viajes</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={specialMenuIcon} />
              <p>Especiales</p>
          </div>
          <div className={styles.Category}>
              <img alt='' src={specialMenuIcon} />
              <p>Sorteos</p>
          </div>
    </div>
  );
};
