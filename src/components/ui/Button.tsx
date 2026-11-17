import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { cx } from '../../lib/helpers';

export type ButtonVariant =
  | 'primary'
  | 'dark'
  | 'light'
  | 'outline-dark'
  | 'outline-light'
  | 'ghost';

export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface LinkButtonProps extends BaseButtonProps {
  to?: LinkProps['to'];
  state?: unknown;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  'aria-label'?: string;
}

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  return cx(
    'btn',
    `btn--${variant}`,
    size !== 'md' && `btn--${size}`,
    className,
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={getButtonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function LinkButton({
  variant = 'primary',
  size = 'md',
  className,
  to,
  state,
  href,
  target,
  rel,
  children,
  onClick,
  ...rest
}: LinkButtonProps) {
  const classes = getButtonClasses(variant, size, className);

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to ?? '/'} state={state} className={classes} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
