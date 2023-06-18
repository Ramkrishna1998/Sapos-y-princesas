/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Tag } from '@components/atoms/tags';
import { getExtraClasses } from '@utils/common';
import styles from './taglist.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const TagList: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn(styles.tagList, '', extraClasses)}>
               <Tag>Películas y series</Tag>
               <Tag>Cine y TV</Tag>
               <Tag>Netflix </Tag>
               <Tag>Redes sociales</Tag>
               <Tag>Igualdad</Tag>
               <Tag>Seguridad</Tag>
               <Tag>Talleres para ninos</Tag>
               <Tag>Cat</Tag>
               <Tag>Cat</Tag>
      </div>
    </>
  );
};
