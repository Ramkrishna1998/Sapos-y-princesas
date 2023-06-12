import cn from 'classnames';
import { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { getExtraClasses } from '@utils/common';
import styles from './button.module.scss';

type ButtonClickEventType =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;
interface ICustomButtonProps extends React.HTMLProps<HTMLButtonElement> {
  Icon?: string;
  btnClassName?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  element?: 'a' | 'button';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  ref?: any;
  removeHttps?: boolean;
  showicon?: boolean;
  style?: CSSProperties | undefined;
  targetSelf?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ICustomAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  Icon?: string;
  btnClassName?: string;
  btnId?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  element?: 'a' | 'button';
  href?: string;
  onClick?: (e: ButtonClickEventType) => any;
  removeHttps?: boolean;
  showicon?: boolean;
  style?: CSSProperties | undefined;
  targetSelf?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<ICustomAnchorProps, ICustomButtonProps>(
  (
    {
      btnClassName,
      children,
      onClick,
      className,
      element,
      href,
      type = 'button',
      disabled = false,
      targetSelf = true,
      showicon = false,
      style,
      Icon,
      ...otherProps
    },
  ) => {
    const extraClasses = getExtraClasses(styles, className);
    const btnclasses = getExtraClasses(style, btnClassName)
    const handleOnClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
      if (typeof onClick === 'function') {
        onClick(e);
      }
    };

    if (element === 'a') {
      return (
        <Link
          // {...(otherProps as React.HTMLProps<HTMLAnchorElement>)}
          className={cn(styles.btn, extraClasses)}
          style={style}
          target={!targetSelf ? '_blank' : '_self'}
          to={href ?? ''}
          onClick={handleOnClick}
        >
          {children}
          {showicon &&
         <img className={cn(styles.btn_Icon, btnclasses)} src={Icon} alt='btn icon' />
       }
        </Link>
      );
    }

    return (
      <button
        {...(otherProps as React.HTMLProps<HTMLButtonElement>)}
        className={cn(styles.btn, extraClasses)}
        disabled={disabled}
        style={style}
        type={type}
        onClick={handleOnClick}
      >
        {children}
       {showicon &&
         <img className={cn(styles.btn_Icon, btnclasses)} src={Icon} alt='btn icon' />
       }
      </button>
    );
  },
);

export { Button };
