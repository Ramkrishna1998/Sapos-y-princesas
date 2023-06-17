/* eslint-disable react/prop-types */
import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import styles from './tab.module.scss';


interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const Tabview: React.FC<IinfoDetailsProps> = (props) => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    children,
    className,
  } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.tabbed_area, extraClasses)}>
      <ul className={cn(styles.tabs, styles.group)}>
        <li><a className={styles.active} href="#box-one">En casa</a></li>
        <li><a href="#box-two">Fuera de casa</a></li>
    </ul>
    <div className={styles.box_wrap}>
    <div id="box_one">
       {children}
      </div>

      {/* <div id="box_two">
         box two content 
      </div> */}
    </div>
    </div>
  );
};
