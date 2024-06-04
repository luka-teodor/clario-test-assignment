import React from 'react';
import InputWithHints, { Hint } from '../common/Input/InputWithHints';
import { InputState } from '../common/Input/BaseInput';

export enum EmailHintsText {
  format = 'Wrong email format',
}

export type EmailErrors = {
  format?: boolean | null;
};

interface EmailInputWithHintsProps {
  value: string;
  errors: EmailErrors;
  onChange: (value: string) => void;
  inputState: InputState;
}

const EmailInputWithHints: React.FC<EmailInputWithHintsProps> = ({
  value,
  errors,
  onChange,
  inputState,
}) => {
  const hints: Record<string, Hint> = {};

  // TODO the requirements are not clear, so I'm not sure if I should implement this
  // if (errors.format) {
  //   hints.format = {
  //     state: getHintStateFromError(errors.format),
  //     text: EmailHintsText.format,
  //   };
  // }

  return (
    <InputWithHints
      type="email"
      name="email"
      value={value}
      hints={hints}
      placeholder="Your Email"
      onChange={onChange}
      inputState={inputState}
    />
  );
};

export default EmailInputWithHints;
