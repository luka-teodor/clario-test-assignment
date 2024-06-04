import { useState } from 'react';
import {
  SignupApiError,
  submitForm,
  validateEmail,
  validatePassword,
} from '../../utils';
import { InputState } from '../common/Input/BaseInput';
import { EmailErrors } from './EmailInputWithHints';
import { PasswordErrors } from './PasswordInputWithHints';

type SignupInputState<T> = {
  value: string;
  errors: T;
  inputState: InputState;
};

/**
 * Custom hook for Signup form
 * @param onSuccess callback on successful form submit
 * @returns object with form state and handlers
 */
export const useSignupForm = (onSuccess: () => void) => {
  const [email, setEmail] = useState<SignupInputState<EmailErrors>>({
    value: '',
    errors: {},
    inputState: InputState.default,
  });
  const [password, setPassword] = useState<SignupInputState<PasswordErrors>>({
    value: '',
    errors: {
      passwordLength: null,
      case: null,
      digit: null,
    },
    inputState: InputState.default,
  });
  const [apiError, setApiError] = useState<SignupApiError | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // prevent defalut form submit
    e.preventDefault();

    // validate with errors
    const [passwordErrors, hasPasswordError] = validatePassword(password.value);
    const [emailErrors, hasEmailError] = validateEmail(email.value);

    if (hasPasswordError || hasEmailError) {
      setEmail((prev) => ({
        ...prev,
        errors: emailErrors,
        inputState: hasEmailError ? InputState.error : InputState.success,
      }));
      setPassword((prev) => ({
        ...prev,
        errors: passwordErrors,
        inputState: hasPasswordError ? InputState.error : InputState.success,
      }));
      return;
    } else {
      setEmail((prev) => ({
        ...prev,
        inputState: InputState.success,
      }));
      setPassword((prev) => ({
        ...prev,
        inputState: InputState.success,
      }));
    }

    try {
      setIsSubmitting(true);

      // simulate form submit
      await submitForm(0);

      // simulate form submit with error
      // await submitForm(1000, {
      //   password:
      //     "This password doesn't look right. Please try again or reset it now.",
      // });

      onSuccess();
      // just for nicer look. in real world it's redundant since we redirect
      setApiError(null);
    } catch (e) {
      const { email, password } = e as SignupApiError;

      email && setEmail((prev) => ({ ...prev, inputState: InputState.error }));
      password &&
        setPassword((prev) => ({ ...prev, inputState: InputState.error }));
      setApiError(e as SignupApiError);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Password requires instant validation, but without errors
  const onPasswordChange = (v: string) => {
    const [errors] = validatePassword(v, true);
    setPassword({
      value: v,
      errors,
      inputState: InputState.default,
    });
  };

  // Email requires late validation
  const onEmailChange = (v: string) => {
    setEmail((prev) => {
      let { errors } = prev;

      // clear errors if user starts typing after late validation error
      if (prev.inputState === InputState.error) {
        errors = {};
      }

      return { value: v, errors, inputState: InputState.default };
    });
  };

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    apiError,
    isSubmitting,
  };
};
