import { type ReactNode } from 'react';

type AlertType = 'success' | 'info' | 'danger';

interface Props {
  children: ReactNode;
  variant?: AlertType;
  strong?: string;
  onDismiss: () => void;
}

const Alert = ({ children, strong, onDismiss, variant = 'info' }: Props) => {
  return (
    <div
      className={`alert alert-${variant} alert-dismissible fade show`}
      role='alert'
    >
      {strong && (
        <>
          <strong>{strong}</strong>
          <br />
        </>
      )}
      {children}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
        onClick={onDismiss}
      ></button>
    </div>
  );
};

export default Alert;
