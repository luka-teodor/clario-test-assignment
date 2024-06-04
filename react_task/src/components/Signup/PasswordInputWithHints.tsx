import React, { useMemo } from 'react';
import InputWithHints from '../common/Input/InputWithHints';
import { InputState } from '../common/Input/BaseInput';
import { getHintStateFromError } from '../../utils';

export enum PasswordHintsText {
  passwordLength = '8-64 characters (no spaces)',
  case = 'Uppercase and lowercase letters',
  digit = 'At least one digit',
}

export type PasswordErrors = {
  passwordLength: boolean | null;
  case: boolean | null;
  digit: boolean | null;
};

interface PasswordInputWithHintsProps {
  value: string;
  errors: PasswordErrors;
  onChange: (value: string) => void;
  inputState: InputState;
  showHints?: boolean;
}

const PasswordInputWithHints: React.FC<PasswordInputWithHintsProps> = ({
  value,
  errors,
  onChange,
  inputState,
  showHints = true,
}) => {
  const hints = useMemo(
    () => ({
      length: {
        state: getHintStateFromError(errors.passwordLength),
        text: PasswordHintsText.passwordLength,
      },
      case: {
        state: getHintStateFromError(errors.case),
        text: PasswordHintsText.case,
      },
      digit: {
        state: getHintStateFromError(errors.digit),
        text: PasswordHintsText.digit,
      },
    }),
    [errors],
  );

  return (
    <InputWithHints
      type="password"
      name="password"
      value={value}
      hints={showHints ? hints : {}}
      placeholder="Create your password"
      onChange={onChange}
      inputState={inputState}
    />
  );
};

export default PasswordInputWithHints;
