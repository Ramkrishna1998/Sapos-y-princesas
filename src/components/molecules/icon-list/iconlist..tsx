import cn from 'classnames';
import FacebookIcon from '@resources/images/svg/facebook.svg';
import IsntaIcon from '@resources/images/svg/instagram.svg';
import LikeIcon from '@resources/images/svg/like.svg';
import LinkedinIcon from '@resources/images/svg/linkedin.svg';
import RssIcon from '@resources/images/svg/rss.svg';
import ShareIcon from '@resources/images/svg/share.svg';
import TwitterIcon from '@resources/images/svg/twitter.svg';
import WhatsappIcon from '@resources/images/svg/whatsapp.svg';
import YoutubeIcon from '@resources/images/svg/youtube.svg';
import { getExtraClasses } from '@utils/common';
import styles from './iconlist.module.scss';

interface IinfoDetailsProps {
  className?: string;
  showInstaicon?: boolean;
  showLinkedinicon?: boolean;
  showfacebookicon?: boolean;
  showlikeicon?: boolean;
  showrssicon?: boolean;
  showshareicon?: boolean;
  showtwittericon?: boolean;
  showwhatsappicon?: boolean;
  showyoutubeicon?: boolean;
}
export const IconList: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, showwhatsappicon = false, showshareicon = false, showLinkedinicon = false,  showlikeicon = false, showyoutubeicon = false, showrssicon = false,  showfacebookicon = false, showtwittericon = false, showInstaicon = false } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.icon_list_container , extraClasses)}>
         {showfacebookicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={FacebookIcon} />
          </div>
        )}

        {showwhatsappicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={WhatsappIcon} />
          </div>
        )}
         {showshareicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={ShareIcon} />
          </div>
        )}
          {showyoutubeicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={YoutubeIcon} />
          </div>
        )}
          {showtwittericon && (
          <div className={styles.Icon_box}>
            <img alt='' src={TwitterIcon} />
          </div>
        )}
          {showInstaicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={IsntaIcon} />
          </div>
        )}
          {showLinkedinicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={LinkedinIcon} />
          </div>
        )}
         {showrssicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={RssIcon} />
          </div>
        )}
            {showlikeicon && (
          <div className={styles.Icon_box}>
            <img alt='' src={LikeIcon} />
          </div>
        )}
     
    </div>
  );
};
