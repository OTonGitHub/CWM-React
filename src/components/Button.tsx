import { type ReactNode } from 'react';

type ButtonVariants = 'primary' | 'info' | 'danger';

interface ButtonProps {
  children: ReactNode; // string better?
  variant?: ButtonVariants;
  onClick: () => void;
}

const Button = ({ children, variant = 'primary', onClick}: ButtonProps) => {
  return (
    <button type='button' className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
