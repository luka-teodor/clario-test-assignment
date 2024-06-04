import React, { MouseEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { HidePasswordIcon, ShowPasswordIcon } from '../icons';
import BaseInput, { BaseInputProps } from './BaseInput';
import { getIconColorFromInputState } from '../../../utils';

export type PasswordInputProps = Omit<BaseInputProps, 'type'>;

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const toggleVisibility = (e: MouseEvent<HTMLSpanElement>) => {
    // Prevent the input from losing focus
    e.preventDefault();

    // Focus the input when user toggles visibility but the input is not focused yet
    if (ref.current && ref.current !== document.activeElement) {
      ref.current.focus();
    }

    setIsVisible(!isVisible);
  };

  return (
    <Wrapper>
      <BaseInput {...props} type={isVisible ? 'text' : 'password'} ref={ref} />
      <IconWrapper onMouseDown={toggleVisibility}>
        {isVisible ? (
          <ShowPasswordIcon
            fillColor={getIconColorFromInputState(props.inputState)}
          />
        ) : (
          <HidePasswordIcon
            fillColor={getIconColorFromInputState(props.inputState)}
          />
        )}
      </IconWrapper>
    </Wrapper>
  );
};

export default PasswordInput;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    // ignore icon width since it's absolutely positioned
    flex: 1;
    // clear min width for small screens
    min-width: 0;
    // prevent browser features (e.g. Safari password manager) to overlap the icon
    padding-inline-end: 40px;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  inset-inline-end: 10px;
  width: 24px;
  height: 24px;
  z-index: 10;
  cursor: pointer;
  background-color: var(--color-bg-0);
`;
