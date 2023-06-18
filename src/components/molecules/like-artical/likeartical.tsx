/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Button } from '@components/atoms/Button';
import Thumsdown from '@resources/images/svg/thumsdown.svg';
import Thumsup from '@resources/images/svg/thumsup.svg';
import { getExtraClasses } from '@utils/common';
import styles from './likeartical.module.scss';

interface IinfoDetailsProps {
  children?: any;
  className?: string;
}
export const LikeArtical: React.FC<IinfoDetailsProps> = (props) => {
  const { className } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <>
      <div className={cn(styles.articalLike, '', extraClasses)}>
                <h3 className='text_center'>¿Ha sido útil este artículo?</h3>
                <div className={styles.thums}>
                  <Button className={styles.thums_btn}>
                      <img alt='' src={Thumsup} />
                  </Button>
                  <Button className={styles.thums_btn}>
                        <img alt='' src={Thumsdown} />
                  </Button>
                </div>
      </div>
    </>
  );
};
