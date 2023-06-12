import cn from 'classnames';
import { getExtraClasses } from '@utils/common';
import { IconList } from '../icon-list';
import styles from './infodetails.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
  infoDetailListtitle?: string;
  infotitle?: string;
  showinfotitle?: boolean;
  src?: string;
}
export const InfoDetailList: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, infotitle , showinfotitle = false , infoDetailListtitle, src, children } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn('info_details_box', extraClasses)}>
        {showinfotitle && <div className={styles.title_info_details}> <h2 className={cn(styles.info_details, 'text_gray')}>{infotitle}</h2>
        <IconList className={styles.info_icon_list} showlikeicon={true} showshareicon={true} showwhatsappicon={true} /></div> }

        <ul className={styles.info_list}>
          {/* <li>
              <div className={styles.Img_box}>
              <img className={styles.card_Img} src={src} />
              </div>
              <span>{infoDetailListtitle}</span>
          </li> */}
          {children}
          
        </ul>
    </div>
  );
};
