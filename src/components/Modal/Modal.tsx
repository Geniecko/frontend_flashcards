import { FC, MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow } from './Modal.style';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeOnOutsideClick: boolean;
  handleOnClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, isOpen, handleOnClose, closeOnOutsideClick }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const previousActiveElement = useRef<Element | null>(null);

  const handleOutsideClick = (event: MouseEvent<HTMLElement>) => {
    const { current } = modalRef;
    const { target } = event;

    if (closeOnOutsideClick && target === current) {
      handleOnClose();
    }
  };

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }

    const { current: modal } = modalRef;

    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modal.showModal();
    } else if (previousActiveElement.current) {
      modal.close();
      (previousActiveElement.current as HTMLElement)?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const { current: modal } = modalRef;

    modal?.addEventListener('cancel', (event) => {
      event.preventDefault();
      handleOnClose();
    });

    return () => {
      modal?.removeEventListener('cancel', (event) => {
        event.preventDefault();
        handleOnClose();
      });
    };
  }, [handleOnClose]);

  return createPortal(
    <ModalWindow ref={modalRef} onClick={handleOutsideClick}>
      {children}
    </ModalWindow>,
    document.body,
  );
};

export default Modal;
