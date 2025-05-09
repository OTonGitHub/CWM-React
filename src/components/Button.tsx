type ButtonVariant = 'primary' | 'info' | 'error';

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  info: 'btn-info',
  error: 'btn-error',
};

interface ButtonProps {
  children: string;
  variant?: ButtonVariant;
  onClick: () => void;
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  const buttonVariant = variant ? buttonVariants[variant] : ''; // Default to empty string if variant is not provided

  return (
    <button
      type='button'
      className={`btn btn-soft ${variant && buttonVariant}`.trimEnd()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
