/* eslint-disable react/prop-types */
import cn from 'classnames';
import { Tag } from '@components/atoms/tags';
import LocaltionIcon from '@resources/images/svg/location.svg';
import searchbar from '@resources/images/svg/search-icon.svg'
import { getExtraClasses } from '@utils/common';
import styles from './findplans.module.scss';
import bannerImg from './images/planimg.png';


interface IinfoDetailsProps {
  className?: string;
}
export const FindPlans: React.FC<IinfoDetailsProps> = (props) => {
  // eslint-disable-next-line react/prop-types, @typescript-eslint/no-unsafe-assignment
  const {
    className,
  } = props;
  const extraClasses = getExtraClasses(styles, className);

  return (
    <div className={cn(styles.find_plan_banner, extraClasses)}>
      <img alt='banner-img' className={styles.find_plan_banner_img} src={bannerImg} />

      <div className={styles.find_plans}>
              <div className='banner_container '>
              <form>
                <div className={cn(styles.search_input, 'mb_2')}>
                  <img alt='' src={searchbar} className={styles.search_icon} />
                  <input
                    className='form_control'
                    placeholder='Busca tu provincia para disfrutar de los mejores planes'
                    type='email'
                  />
                </div>
              </form>
              <div className={cn(styles.tag_list, styles.tag_Dark, 'mt_2')}>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
            <Tag Showicon tagIcon={LocaltionIcon}>Madrid</Tag>
          </div>
              </div>
      </div>
    </div>
  );
};
