import { ReactNode } from 'react';

interface ModalProps {
  id: string;
  open: boolean;
  heading?: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ id, open, heading, onClose, children }: ModalProps) => {
  return (
    <dialog id={id} className='modal' open={open}>
      <div className='modal-box'>
        <form method='dialog'>
          <button
            onClick={onClose}
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </button>
        </form>
        {heading && <h3 className='font-bold text-lg'>{heading}</h3>}
        <p className='py-4'>{children}</p>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
