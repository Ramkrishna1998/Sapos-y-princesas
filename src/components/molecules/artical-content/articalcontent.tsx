/* eslint-disable react/prop-types */
import cn from 'classnames';
import CardImg from '@components/molecules/banner/images/Image.png';
import { getExtraClasses } from '@utils/common';
import { Advertisement } from '../advertisement';
import { Banner } from '../banner';
import { ImgCard } from '../img-card';
import { ProfileInfo } from '../profile-info';
import styles from './articalcontent.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const ArticleContent: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn(styles.artical, 'container', extraClasses)}>
        <div className={styles.artical_content}>
          <ProfileInfo />
          <div className={styles.content}>
            <p className='pt_2 pb_2'>
              Si deseas ver Intimidad, serie recomendada a partir de 16 años, con tus hijos e hijas
              adolescentes, puede dejarles un buen aprendizaje y generar un espacio de reflexión
              para dialogar acerca de la privacidad, la exposición en las redes sociales y las
              grabaciones íntimas en una época donde todo está digitalizado y puede mostrarse en
              Internet.
            </p>
            <Advertisement />
            <p className='pt_2 pb_2'>
              Si deseas ver Intimidad, serie recomendada a partir de 16 años, con tus hijos e hijas
              adolescentes, puede dejarles un buen aprendizaje y generar un espacio de reflexión
              para dialogar acerca de la privacidad, la exposición en las redes sociales y las
              grabaciones íntimas en una época donde todo está digitalizado y puede mostrarse en
              Internet.
            </p>
            <Advertisement />
          </div>
        </div>
      </div>
      <Banner
        bannerdesc=''
        bannertitle="	'Intimidad	' : las enseñanzas de una miniserie con problemáticas reales de la era digital"
        className='pb_2 pt_2'
        showbannerdesc={true}
        showbannertitle={true}
      />
      <div className={cn(styles.artical, 'container', extraClasses)}>
        <div className={styles.artical_content}>
          <article className='mb_22'>
            Quo vel veniam enim eaque vitae. Omnis explicabo odio officia voluptas sunt corrupti ut.
            At rerum impedit consequatur amet. Consequatur in facilis blanditiis harum vitae sed
            earum nisi.
          </article>
          <ImgCard
            className={styles.imgcard}
            imgcardtitle='Fuente: Sapos y Princesas'
            showspecialtag={false}
            showtitle={true}
            src={CardImg}
          />
          <p className='pt_2 pb_2'>
            Si deseas ver Intimidad, serie recomendada a partir de 16 años, con tus hijos e hijas
            adolescentes, puede dejarles un buen aprendizaje y generar un espacio de reflexión para
            dialogar acerca de la privacidad, la exposición en las redes sociales y las grabaciones
            íntimas en una época donde todo está digitalizado y puede mostrarse en Internet.
          </p>

          <h4>
            &apos;Intimidad &apos; : las enseñanzas de una miniserie con problemáticas reales de la
            era digital
          </h4>
          <p className='pt_2 pb_2'>
            Si deseas ver Intimidad, serie recomendada a partir de 16 años, con tus hijos e hijas
            adolescentes, puede dejarles un buen aprendizaje y generar un espacio de reflexión para
            dialogar acerca de la privacidad, la exposición en las redes sociales y las grabaciones
            íntimas en una época donde todo está digitalizado y puede mostrarse en Internet.
          </p>
        </div>
      </div>
    </>
  );
};
