/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Button } from '@components/atoms/Button';
import { getExtraClasses } from '@utils/common';
import styles from './subscription.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const Subscritpion: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn( 'gray_container', extraClasses)}>
        <div className='container'>
          <div className='container_article'>
            <h3 className='text_center mb_22'>
              Sé el primero en enterarte de nuestras últimas noticias, artículos y ofertas
              exclusivas
            </h3>
            <form>
              <div className={styles.form_element}>
                <div className='form_group'>
                  <input
                    className='form_control text_center'
                    placeholder='ejemplo@mail.com'
                    type='email'
                  />
                </div>
                <Button>Quiero suscribirme</Button>
              </div>
            </form>
            <small className='text_gray text_center mt_22'>
              Al registrarme, acepto los Términos de Uso de Sapos y Princesas (incluido el
              procedimientos de resolución de disputas); mi información será utilizada como descrito
              en el Aviso de Privacidad
            </small>
          </div>
        </div>
      </div>

    </>
  );
};
