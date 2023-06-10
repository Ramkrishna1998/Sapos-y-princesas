import cn from 'classnames';
import { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { getExtraClasses } from '@utils/common.util';
import styles from './button.module.scss';

type ButtonClickEventType =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;
interface ICustomButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  element?: 'a' | 'button';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  ref?: any;
  removeHttps?: boolean;
  style?: CSSProperties | undefined;
  targetSelf?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

interface ICustomAnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  btnId?: string;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  element?: 'a' | 'button';
  href?: string;
  onClick?: (e: ButtonClickEventType) => any;
  removeHttps?: boolean;
  style?: CSSProperties | undefined;
  targetSelf?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<ICustomAnchorProps, ICustomButtonProps>(
  (
    {
      children,
      onClick,
      className,
      element,
      href,
      type = 'button',
      disabled = false,
      targetSelf = true,
      style,
      ...otherProps
    },
  ) => {
    const extraClasses = getExtraClasses(styles, className);
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
      </button>
    );
  },
);

export { Button };
