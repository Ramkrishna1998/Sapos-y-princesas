import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@components/atoms/Button';
import { Categories } from '@components/molecules/categories';
import Searchicon from '@resources/images/svg/search-icon.svg';
import Toggleicon from '@resources/images/svg/toggle-icon.svg';
import UserProfileIcon from '@resources/images/svg/user-profile.svg';
import Styles from './header.module.scss';
import LogoMobile from './images/logo-mobile.png';
import Logo from './images/logo.png';

export const Header = () => {
  return (
    <>
      <div className={Styles.header}>
        <div className='container_limit'>
          <div className={Styles.menu_top}>
            <div className={cn('d_flex_aligned', Styles.toggle_box)}>
              <Button className={cn(Styles.mobile_toggle, 'reset_btn')}>
                <img alt='toggle design' className={Styles.toggle_icon} src={Toggleicon} />
              </Button>
              <Button className='reset_btn'>
                <img alt='search icon' className={Styles.search_Icon} src={Searchicon} />
              </Button>
            </div>
            <Link className={Styles.desktop_logo} to='#'>
              <img alt='logo design' className={cn(Styles.logo)} src={Logo} />
            </Link>
            <Link className={Styles.mobile_logo} to='#'>
              <img alt='logo design' className={cn(Styles.logo)} src={LogoMobile} />
            </Link>
            <Button className='reset_btn'>
            <img alt='user profile' className={Styles.profile_button} src={UserProfileIcon} />
              </Button>
          </div>
        </div>
        <nav>
          <ul className={cn(Styles.main_nav, Styles.category_nav)}>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>SUBCATEG1</Link>
            </li>
          </ul>
          <section className={cn(Styles.header_category_box, 'pb_2 pt_2 container_fluid')}>
             <div className='container_categories'>
             <h1 className='mb_2'>La infancia vuela, conecta y actúa</h1>
                    <Categories />
             </div>
          </section>
        </nav>
        <div className={cn(Styles.sub_nav, Styles.main_nav)}>
          <ul className={Styles.main_nav}>
            <li className={Styles.Sub_Category}>
              <Link to='/'>Todas</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>Bebé 0-3</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>Infantil 3-6</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>Primaria 7-10</Link>
            </li>
            <li className={Styles.Sub_Category}>
              <Link to='/'>Preadolescentes 11-13</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
