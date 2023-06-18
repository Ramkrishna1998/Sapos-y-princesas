/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Button } from '@components/atoms/Button';
import buttonstyle from '@components/atoms/Button/button.module.scss';
import previous from '@resources/images/svg/leftarrow.svg';
import Stash from '@resources/images/svg/stash.svg';
import Thumsdown from '@resources/images/svg/thumsdown.svg';
import Thumsup from '@resources/images/svg/thumsup.svg';
import { getExtraClasses } from '@utils/common';
import { ProfileInfo } from '../profile-info';
import styles from './comments.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const Commentsmodal: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn(styles.comment_box, extraClasses)}>
        <div className={styles.comment_title}>
          <span>
            <img alt='' src={previous} /> Puy du Fou Espana. Dia completo de...
          </span>
        </div>
        <div className={styles.comment_info}>
          <h3 className='text_gray mt_22 mb_22'>Comentarios: 1</h3>
          <ProfileInfo
            profiledesc='16.02.23'
            showprofiledesc={true}
            showprofilquote={false}
            showrating={true}
            showusericon={false}
          />
          <div className={styles.comment_content}>
            <p>
              Si deseas ver Intimidad, serie recomendada a partir de 16 años, con tus hijos e hijas
              adolescentes, puede dejarles un buen aprendizaje y generar un espacio de reflexión
              para dialogar acerca de la privacidad, la exposición en las redes sociales y las
              grabaciones íntimas en una época donde todo está digitalizado y puede mostrarse en
              Internet.
            </p>
          </div>
          <div className={styles.btn_block}>
            <Button className={styles.button_fullwidth}>Responder</Button>
            <div className={styles.btn_thums}>
              <Button className={cn(buttonstyle.btn_invert, '')}>
                <img alt='' src={Thumsup} />
              </Button>
              <Button className={cn(buttonstyle.btn_invert, '')}>
                <img alt='' src={Thumsdown} />
              </Button>
            </div>
            <div>
              <Button className={cn(buttonstyle.btn_invert, '')}>
                <img alt='' src={Stash} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
