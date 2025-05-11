import { type ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

type AlertConfig = {
  icon: ReactNode;
  alertVariant: string;
  buttonVariant: string;
};

const alertVariants: Record<AlertVariant, AlertConfig> = {
  // <Key (type?), Type>
  info: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    alertVariant: 'alert-info',
    buttonVariant: 'btn-info',
  },
  success: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    alertVariant: 'alert-success',
    buttonVariant: 'btn-success',
  },
  warning: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        />
      </svg>
    ),
    alertVariant: 'alert-warning',
    buttonVariant: 'btn-warning',
  },
  error: {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    alertVariant: 'alert-error',
    buttonVariant: 'btn-error',
  },
};

interface Props {
  children: ReactNode;
  variant?: AlertVariant;
  heading?: string;
  onDismiss: () => void;
}

const Alert = ({ children, heading, onDismiss, variant = 'info' }: Props) => {
  const { icon, alertVariant, buttonVariant } = alertVariants[variant];

  return (
    <div
      role='alert'
      className={`alert ${alertVariant} alert-soft sm:alert-horizontal alert-vertical`}
    >
      {icon}

      <div>
        {heading && <h3 className='font-bold'>{heading}</h3>}
        <div className='text-xs'>{children}</div>
      </div>

      <button
        className={`btn ${buttonVariant} btn-sm btn-outline`}
        onClick={onDismiss}
      >
        Dismiss
      </button>
    </div>
  );
};

export default Alert;
