import React, {
  PropsWithChildren,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import styled from 'styled-components';

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {}

const BaseButton: ForwardRefRenderFunction<
  HTMLButtonElement,
  BaseButtonProps
> = ({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      {children}
    </Button>
  );
};

export default forwardRef(BaseButton);

const Button = styled.button`
  padding: 15px 32px;
  box-sizing: border-box;
  line-height: 14px;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid;
  border-radius: 30px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;
  user-select: none;

  &.btn-default {
    background: var(--color-bg-0);
    border-color: var(--color-border-default);
    color: var(--color-text-primary);

    &:hover {
      border-color: var(--color-border-focused);
    }
  }
  &.btn-submit {
    background: var(--gradient-primary);
    border-color: var(--color-border-default);
    color: var(--color-text-0);
  }
  &.btn-success {
    background: var(--color-success);
    border-color: var(--color-success);
    color: var(--color-text-0);
  }
  &.btn-error {
    background: var(--color-error);
    border-color: var(--color-error);
    color: var(--color-text-0);
  }
`;
