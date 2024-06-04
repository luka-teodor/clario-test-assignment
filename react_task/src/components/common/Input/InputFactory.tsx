import React from 'react';
import TextInput, { TextInputProps } from './TextInput';
import PasswordInput, { PasswordInputProps } from './PasswordInput';

interface TextProps extends TextInputProps {
  type?: 'text' | 'email';
}

interface PasswordProps extends PasswordInputProps {
  type: 'password';
}

export type InputFactoryProps = TextProps | PasswordProps;

const InputFactory: React.FC<InputFactoryProps> = (props) => {
  switch (props.type) {
    case 'password':
      return <PasswordInput {...props} />;
    case 'text':
    case 'email':
    default:
      return <TextInput {...props} />;
  }
};

export default InputFactory;
