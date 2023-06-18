/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import cn from 'classnames';
import { Button } from '@components/atoms/Button';
import ButtonStyle from '@components/atoms/Button/button.module.scss';
import HeadphoneIcon from '@resources/images/svg/headphone.svg';
import mailIcon from '@resources/images/svg/mail.svg';
import SaveIcon from '@resources/images/svg/save.svg';
import ShareIcon from '@resources/images/svg/share.svg';
import WhatsappIcon from '@resources/images/svg/whatsapp.svg';
import { getExtraClasses } from '@utils/common';
import Profilepic from './images/profile_photo.png';
import styles from './profileinfo.module.scss';

interface IimgCardProps {
  className?: string;
  profileTitleclassName?: string;
  profiledesc?: string;
  showprofiledesc?: boolean;
  showprofilquote?: boolean;
  showusericon?: boolean;
}
export const ProfileInfo: React.FC<IimgCardProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const { className, showusericon = true, profiledesc, showprofiledesc = false, showprofilquote = true, profileTitleclassName } = props;
  const extraClasses = getExtraClasses(styles, className);
  const profiletitleclasses = getExtraClasses(styles, profileTitleclassName);

  return (
    <div className={cn('profile_info_box', extraClasses)}>
      <div className={styles.profile_info_row}>
        <div className={styles.user_pic}>
          <img alt='' src={Profilepic} />
        </div>
        <div className={styles.Profile_user_info}>
          <h4 className={profiletitleclasses}>Sapos y Princesas</h4>
          {showprofilquote &&
            <span>Fecha de actualización: 16.02.23</span>
          }
          {showprofiledesc &&
            <span className='text_dark'>{profiledesc}</span>
          }
        </div>
      </div>

    {showusericon &&
        <div className={styles.icon_list}>
        <div className={styles.Icon_set}>
              <Button className={ButtonStyle.reset_btn}>
                    <img alt='' src={WhatsappIcon} />
              </Button>
              <Button className={ButtonStyle.reset_btn}>
                    <img alt='' src={ShareIcon} />
              </Button>
              <Button className={ButtonStyle.reset_btn}>
                    <img alt='' src={mailIcon} />
              </Button>
        </div>
        <div className={styles.Icon_set}>
        <Button className={ButtonStyle.reset_btn}>
                    <img alt='' src={SaveIcon} />
              </Button>
              <Button className={ButtonStyle.reset_btn}>
                    <img alt='' src={HeadphoneIcon} />
              </Button>
        </div>
    </div>
    }
     
    </div>
  );
};
