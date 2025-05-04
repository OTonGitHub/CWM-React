interface ButtonProps {
  children: string;
  type?: 'primary' | 'info' | 'danger';
  onClick: () => void;
}

const Button = ({ children, type = 'primary', onClick}: ButtonProps) => {
  return (
    <button type='button' className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;