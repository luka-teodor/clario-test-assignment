import React from 'react';
import { SignupApiError } from '../../utils';
import styled from 'styled-components';

interface ApiErrorProps {
  apiError: SignupApiError;
}

const ApiError: React.FC<ApiErrorProps> = ({ apiError }) => {
  const errorMessages = `${apiError.email ?? ''} ${apiError.password ?? ''}`
    .trim()
    .split('.');

  return (
    <Wrapper>
      {errorMessages.map((message) => (
        <Message key={message}>{`${message}.`}</Message>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 62px;
`;

const Message = styled.span`
  font-size: 13px;
  line-height: 18px;
  color: var(--color-text-error);
  text-align: center;
`;

export default ApiError;
