import { InputState } from './components/common/Input/BaseInput';
import { HintState } from './components/common/Input/InputWithHints';
import { EmailErrors } from './components/Signup/EmailInputWithHints';
import { PasswordErrors } from './components/Signup/PasswordInputWithHints';

/**
 * Validate password, return object with results
 * @param password password value
 * @param onlySuccess return only success, ignore errors
 * @returns object with errors and hasError boolean
 */
export const validatePassword = (
  password: string,
  onlySuccess = false,
): [PasswordErrors, boolean] => {
  const lengthError =
    password.length < 8 || password.length > 64 || password.includes(' ');
  const caseError = !/[a-z]/.test(password) || !/[A-Z]/.test(password);
  const digitError = !/\d/.test(password);
  const hasError = lengthError || caseError || digitError;

  if (onlySuccess) {
    return [
      {
        passwordLength: lengthError ? null : false,
        case: caseError ? null : false,
        digit: digitError ? null : false,
      },
      false,
    ];
  }

  return [
    {
      passwordLength: lengthError,
      case: caseError,
      digit: digitError,
    },
    hasError,
  ];
};

/**
 * Validate email. Return object with error or nothing
 * @param email email value
 * @returns object with errors and hasError boolean
 */
export const validateEmail = (email: string): [EmailErrors, boolean] => {
  const formatError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (formatError) {
    return [
      {
        format: true,
      },
      true,
    ];
  }

  return [{}, false];
};

/**
 * Get HintState based on error
 * @param error error state
 * @returns hint state
 */
export const getHintStateFromError = (error: boolean | null): HintState => {
  if (error === null) {
    return HintState.info;
  }

  return error ? HintState.error : HintState.success;
};

/**
 * Get icon color based on input state
 * @param inputState input state
 * @returns icon color
 */
export const getIconColorFromInputState = (inputState?: InputState) => {
  switch (inputState) {
    case InputState.success:
      return 'var(--color-icon-success)';
    case InputState.error:
      return 'var(--color-icon-error)';
    case InputState.default:
    default:
      return 'var(--color-icon-default)';
  }
};

export type SignupApiError = {
  email?: string;
  password?: string;
};

/**
 * Simulate form submit
 * @param delay simulate delay before submit
 */
export const submitForm = (delay = 0, error?: SignupApiError) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      error ? reject(error) : resolve();
    }, delay);
  });
