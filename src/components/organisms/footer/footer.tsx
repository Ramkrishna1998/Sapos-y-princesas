import cn from 'classnames';
import { Link } from 'react-router-dom';
// import { Button } from '@components/atoms/Button';
// import Searchicon from '@resources/images/svg/search-icon.svg';
// import Toggleicon from '@resources/images/svg/toggle-icon.svg';
// import UserProfileIcon from '@resources/images/svg/user-profile.svg';
import { IconList } from '@components/molecules/icon-list';
import Styles from './footer.module.scss';
import Logo from './images/logo.png';
import PartnerOne from './images/partner1.png';
import partnerTwo from './images/partner2.png';

export const Footer = () => {
  return (
    <>
      <div className={cn(Styles.footer, 'pt_2 pb_2')}>
        <div className='container_limit'>
          <div className={cn(Styles.footer_desc_container, 'pt_2 pb_2')}>
            <img alt='logo' className={Styles.footer_logo} src={Logo} />
            <div className={Styles.footer_desc}>
              <p>
                {' '}
                Trabajamos por hacer un mundo mejor, ayudando a los padres a construir momentos
                inolvidables con sus hijos.
              </p>
            </div>
          </div>     
        </div>
        <div className={cn(Styles.footer_nav, 'pt_2 pb_2')}>
          <div className={cn('container_limit', Styles.footer_nav_container)}>
          <ul className={cn(Styles.contact_links, Styles.footer_links)}>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Revista</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Registrate</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Publicidad</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Quienes Somos</Link>
              </li>
            </ul>
            <ul className={cn(Styles.legal_links, Styles.footer_links, Styles.legal_links_desktop)}>
              <li className={Styles.Sub_Category}>
                <Link to='/'>FAQ</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Legal</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Politica de cookies</Link>
              </li>
                         </ul>
          </div>
      
          </div>
          <div className={cn(Styles.footer_partner_section, 'pt_2 pb_2')}>
          <IconList showfacebookicon showInstaicon showLinkedinicon showrssicon showshareicon showtwittericon showyoutubeicon className={cn(Styles.info_icon_list, Styles.info_icon_list_mobile)} />

          <div className={cn('container_limit')}>
          <ul className={cn(Styles.partner_links)}>
          <Link to='/'>
            <img src={PartnerOne}/>
          </Link>
          <Link to='/'>
            <img src={partnerTwo}/>
          </Link>
            </ul>
          </div>
      
          </div>
          <div className={cn(Styles.footer_contact, 'pt_2 pb_2')}>
          <ul className={cn(Styles.legal_links, Styles.footer_links, Styles.legal_links_mobile)}>
              <li className={Styles.Sub_Category}>
                <Link to='/'>FAQ</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Legal</Link>
              </li>
              <li className={Styles.Sub_Category}>
                <Link to='/'>Politica de cookies</Link>
              </li>
                         </ul>
            <div className={cn('container_limit', Styles.footer_nav_container)}>
               <div>
                <p>©2023 Sapos y Princesas S.L. Todos los derechos reservados</p>
                <p>Hecho con ❤️ desde 2005</p>
               </div>
               <IconList showfacebookicon showInstaicon showLinkedinicon showrssicon showshareicon showtwittericon showyoutubeicon className={cn(Styles.info_icon_list, Styles.info_icon_list_desktop)} />
            </div>
          </div>
      </div>
    </>
  );
};
