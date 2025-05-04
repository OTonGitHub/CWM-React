import R, { type ReactNode, PropsWithChildren } from 'react';

type AlertVariant = 'success' | 'info' | 'danger';

interface Props {
  children: ReactNode;
  variant?: AlertVariant;
  strong?: '';
}

const Alert: R.FC<Props> = ({
  children,
  strong,
  variant = 'info'

}: Readonly<PropsWithChildren<Props>>) => {
  return (
    <div
      className={`alert alert-${variant} alert-dismissible fade show`}
      role='alert'
    >
      {strong && (
        <strong>{strong}</strong>
      )}
      {children}
      <button
        type='button'
        className='btn-close'
        data-bs-dismiss='alert'
        aria-label='Close'
      ></button>
    </div>
  );
};

export default Alert;