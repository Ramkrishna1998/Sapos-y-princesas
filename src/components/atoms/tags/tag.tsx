import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import styles from './tag.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const Tag: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, children} = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.tag , extraClasses)}>
          <p>{children}</p>
    </div>
  );
};
