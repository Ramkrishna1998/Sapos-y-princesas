import cn from 'classnames';
import Starfilled from '@resources/images/svg/star-filled-black.svg';
import Staroutlined from '@resources/images/svg/start-outlined-black.svg';
import { getExtraClasses } from '@utils/common';
import styles from './rating.module.scss';

interface IinfoDetailsProps {
  className?: string;
}
export const Rating: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.rating_container , extraClasses)}>
      <div className={styles.rate_box}>
            <img alt='' src={Starfilled} />
          </div>
          <div className={styles.Icon_box}>
            <img alt='' src={Starfilled} />
          </div>
          <div className={styles.Icon_box}>
            <img alt='' src={Staroutlined} />
          </div>
          <div className={styles.Icon_box}>
            <img alt='' src={Staroutlined} />
          </div>
          <div className={styles.Icon_box}>
            <img alt='' src={Staroutlined} />
          </div>
    </div>
  );
};
