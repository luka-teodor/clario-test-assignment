import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import Button from '../common/Button';
import Title from '../common/Title';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Wrapper>
        <Title text="Success!" />
        <Button type="success" onClick={onClose}>
          OK
        </Button>
      </Wrapper>
    </Modal>
  );
};

export default SuccessModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-width: 300px;

  h1 {
    color: var(--color-text-success);
  }

  button {
    min-width: 150px;
  }
`;
