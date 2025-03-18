import { Button as HeadlessButton } from '@headlessui/react';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'danger' | 'outlined';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  return (
    <HeadlessButton
      {...props}
      className={classNames(
        className,
        'py-2 px-4 rounded-lg font-semibold transition-colors outline-none shadow-xs',
        {
          'h-10 bg-success text-white hover:bg-success/90':
            variant === 'primary',
          'h-10 border border-success text-success bg-white hover:bg-green-50':
            variant === 'secondary',
          'text-text hover:text-green-300': variant === 'text',
          'h-10 bg-error text-white hover:bg-error/90': variant === 'danger',
          'h-10 bg-transparent border border-grey-200 text-grey-600 hover:bg-white/90':
            variant === 'outlined',
        }
      )}
    >
      {children}
    </HeadlessButton>
  );
};

export default Button;
