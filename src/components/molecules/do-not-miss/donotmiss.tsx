/* eslint-disable react/prop-types */
import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import { PlanCard } from '../plans-cards';
import styles from './donotmiss.module.scss';


interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const DonotMiss: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn( 'mb_2 pt_2 container', extraClasses)}>
      <h2 className='text_gray mb_22'>Disfruta gratis de nuestras revistas digitales</h2>

      <div className={cn(styles.row_planes, 'colomns mb_2')}>
          <PlanCard className={styles.col_plans} />
          <PlanCard className={styles.col_plans} />
          <PlanCard className={styles.col_plans} />
        </div>
      </div>

    </>
  );
};
