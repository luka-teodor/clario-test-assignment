import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return <TitleWrapper>{text}</TitleWrapper>;
};

const TitleWrapper = styled.h1`
  margin: 0;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-align: center;
  user-select: none;
`;

export default Title;
