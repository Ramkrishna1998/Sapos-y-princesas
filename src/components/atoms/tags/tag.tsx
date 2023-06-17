import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import styles from './tag.module.scss';

interface IinfoDetailsProps {
  Showicon?: boolean;
  children?: any;
  className?: string;
  tagIcon?: string;
}
export const Tag: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, children, tagIcon, Showicon = false} = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.tag , extraClasses)}>
        {Showicon &&
          <img alt='' className={styles.icon_tag} src={tagIcon} />
        }
          <p>{children}</p>
    </div>
  );
};
