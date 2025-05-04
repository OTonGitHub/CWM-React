type ButtonType = 'primary' | 'info' | 'danger';

interface ButtonProps {
  children: string;
  variant?: ButtonType;
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