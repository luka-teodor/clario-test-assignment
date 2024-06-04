import { FC, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay className="modal-overlay" onClick={onClose}>
      <Content className="modal-content">{children}</Content>
    </Overlay>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  inset-inline-start: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  padding: 20px;
  border-radius: 10px;
  background-color: var(--color-bg-0);
`;
