import { Link } from 'react-router-dom';
import mainstyle from '@resources/css/custom.module.scss';
import Searchicon from '@resources/images/svg/search-icon.svg';
import Toggleicon from '@resources/images/svg/toggle-icon.svg';
import UserProfileIcon from '@resources/images/svg/user-profile.svg';
import Styles from './header.module.scss';
import Logo from './images/logo.png';

export const Header = () => {
  return (
    <>
      <div className={Styles.header}>
            <div className={mainstyle.container_limit}>
            <div className={Styles.menu_top}>
            <div className={mainstyle.d_flex_aligned}>
            <img alt='toggle design' className={Styles.toggle_icon} src={Toggleicon} />
                <img alt='search icon' className={Styles.search_Icon} src={Searchicon} />
            </div>
             <Link to='#'>
             <img alt='logo design' className={Styles.logo} src={Logo} />
             </Link>
             <div>
                  <img alt='user profile' className={Styles.header} src={UserProfileIcon} />
             </div>
      
          </div>
          <ul>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
              <li><Link to='/'>SUBCATEG1</Link></li>
             </ul>
            </div>
      </div>
    </>
  );
};


