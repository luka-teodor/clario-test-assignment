import React from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';

export type TextInputProps = Omit<BaseInputProps, 'type'>;

const TextInput: React.FC<TextInputProps> = (props) => {
  return <BaseInput type="text" {...props} />;
};

export default TextInput;
