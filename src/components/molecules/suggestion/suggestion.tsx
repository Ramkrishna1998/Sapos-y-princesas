/* eslint-disable react/prop-types */
import cn from 'classnames';
import Pancardstyles from '@components/molecules/plans-cards/plancard.module.scss'
import { getExtraClasses } from '@utils/common';
import { PlanCard } from '../plans-cards';
import styles from './suggestion.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const Suggestion: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn( 'mb_2 mt_2 container', extraClasses)}>
    
        <h2 className='text_gray mb_22 '>Te puede interesar</h2>
        <div className={styles.col2}>
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
          <PlanCard className={cn(Pancardstyles.side_by_side, styles.card_aside)} />
      </div>
      </div>

    </>
  );
};
