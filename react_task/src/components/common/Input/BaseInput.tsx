import {
  ChangeEvent,
  InputHTMLAttributes,
  ForwardRefRenderFunction,
  forwardRef,
} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

export enum InputState {
  default = 'default',
  error = 'error',
  success = 'success',
}

export interface BaseInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void;
  inputState?: InputState;
}

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, BaseInputProps> = (
  { onChange, inputState, className, ...props },
  ref,
) => {
  const inputClassName = classNames(className, {
    'inpt-default': !inputState || inputState === InputState.default,
    'inpt-success': inputState === InputState.success,
    'inpt-error': inputState === InputState.error,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input
      {...props}
      onChange={handleChange}
      ref={ref}
      className={inputClassName}
    />
  );
};

export default forwardRef(BaseInput);

const Input = styled.input`
  max-width: 315px;
  padding: 10px 20px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  background-color: var(--color-bg-0);

  &::placeholder {
    user-select: none;
  }

  &.inpt-default {
    color: var(--color-text-primary);
    border-color: var(--color-border-default);

    &::placeholder {
      color: var(--color-text-secondary);
    }

    &:focus {
      border-color: var(--color-border-focused);

      &::placeholder {
        color: var(--color-text-primary);
      }
    }
  }

  // Workaround for autofill styles
  &:-webkit-autofill,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:active,
  &:-internal-autofill-selected {
    background-color: var(--color-bg-0) !important;
    box-shadow: 0 0 0 30px var(--color-bg-0) inset !important;

    color: var(--color-text-primary) !important;
    -webkit-text-fill-color: var(--color-text-primary) !important;
  }

  &.inpt-error {
    color: var(--color-text-error);
    border-color: var(--color-border-error);

    &:focus {
      border-color: var(--color-border-error);
    }

    &::placeholder {
      color: var(--color-text-error);
    }

    // Workaround for autofill styles
    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:active,
    &:-internal-autofill-selected {
      color: var(--color-text-error) !important;
      -webkit-text-fill-color: var(--color-text-error) !important;
    }
  }

  &.inpt-success {
    color: var(--color-text-success);
    border-color: var(--color-border-success);

    &:focus {
      border-color: var(--color-border-success);
    }

    &::placeholder {
      color: var(--color-text-success);
    }

    // Workaround for autofill styles
    &:-webkit-autofill,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:active,
    &:-internal-autofill-selected {
      color: var(--color-text-success) !important;
      -webkit-text-fill-color: var(--color-text-success) !important;
    }
  }
`;
