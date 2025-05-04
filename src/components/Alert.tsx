import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type?: 'success' | 'info' | 'danger';
  strong?: string;
  onDismiss: () => void;
}

const Alert = ({ children, strong, onDismiss, type = 'info' }: Props) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
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
