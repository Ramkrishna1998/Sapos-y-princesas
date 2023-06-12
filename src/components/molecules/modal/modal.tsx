// import cn from 'classnames';
// import { Link } from 'react-router-dom';
// import { Button } from '@components/atoms/Button';
// import Searchicon from '@resources/images/svg/search-icon.svg';
// import Toggleicon from '@resources/images/svg/toggle-icon.svg';
// import UserProfileIcon from '@resources/images/svg/user-profile.svg';
// import Styles from './header.module.scss';
// import Logo from './images/logo.png';

// export const Header = () => {
//   return (
//     <>
//       <div className={Styles.header}>
//         <div className='container_limit'>
//           <div className={Styles.menu_top}>
//             <div className={cn('d_flex_aligned', Styles.toggle_box)}>
//               <Button className='reset_btn'>
//                 <img alt='toggle design' className={Styles.toggle_icon} src={Toggleicon} />
//               </Button>
//               <Button className='reset_btn'>
//                 <img alt='search icon' className={Styles.search_Icon} src={Searchicon} />
//               </Button>
//             </div>
//             <Link to='#'>
//               <img alt='logo design' className={Styles.logo} src={Logo} />
//             </Link>
//             <div>
//               <img alt='user profile' className={Styles.header} src={UserProfileIcon} />
//             </div>
//           </div>
//         </div>
//         <nav>
//           <ul className={Styles.main_nav}>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>SUBCATEG1</Link>
//             </li>
//           </ul>
//         </nav>
//         <div className={cn(Styles.sub_nav, Styles.main_nav)}>
//           <ul className={Styles.main_nav}>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>Todas</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>Bebé 0-3</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>Infantil 3-6</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>Primaria 7-10</Link>
//             </li>
//             <li className={Styles.Sub_Category}>
//               <Link to='/'>Preadolescentes 11-13</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };
