import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Page from '../common/Page';
import Title from '../common/Title';
import SignupForm from './Form';
import SubmitSuccessModal from './SuccessModal';
import starsBg from '../../assets/stars_bg.png';

const Signup: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSuccess = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <Page>
      <Background>
        <ContentWrapper>
          <Title text="Sign Up" />
          <SignupForm onSuccess={onSuccess} />
          <SubmitSuccessModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </ContentWrapper>
      </Background>
    </Page>
  );
};

export default Signup;

const Background = styled.div`
  height: 100%;
  background: url(${starsBg}) no-repeat;
  background-position: center 14px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 94px 30px 30px;
`;
