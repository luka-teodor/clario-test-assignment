import React from 'react';
import styled from 'styled-components';
import InputFactory, { InputFactoryProps } from './InputFactory';

export enum HintState {
  info = 'info',
  success = 'success',
  error = 'error',
}

export type Hint<T = string> = {
  text: T;
  state: HintState;
};

type InputWithHintsProps = InputFactoryProps & {
  hints: { [name: string]: Hint };
};

const InputWithHints: React.FC<InputWithHintsProps> = ({ hints, ...props }) => {
  const hintsEntries = Object.entries(hints);

  return (
    <Wrapper>
      <InputFactory {...props} />
      {!!hintsEntries.length && (
        <HintsContainer>
          {hintsEntries.map(([name, hint]) => (
            <HintText key={name} type={hint.state}>
              {hint.text}
            </HintText>
          ))}
        </HintsContainer>
      )}
    </Wrapper>
  );
};

export default InputWithHints;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HintsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-start: 20px;
  gap: 4px;
`;

const HintText = styled.div<{ type: Hint['state'] }>`
  font-size: 13px;
  line-height: 18px;
  color: ${({ type }) => {
    switch (type) {
      case 'success':
        return 'var(--color-success-70)';
      case 'error':
        return 'var(--color-text-error)';
      case 'info':
      default:
        return 'var(--color-text-primary)';
    }
  }};
`;
