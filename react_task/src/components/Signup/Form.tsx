import styled from 'styled-components';
import Button from '../common/Button';
import PasswordInputWithHints from './PasswordInputWithHints';
import EmailInputWithHints from './EmailInputWithHints';
import { useSignupForm } from './hooks';
import ApiError from './ApiError';

interface SubmitFormProps {
  onSuccess: () => void;
}

const SubmitForm: React.FC<SubmitFormProps> = ({ onSuccess }) => {
  const {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    apiError,
    isSubmitting,
  } = useSignupForm(onSuccess);

  return (
    <Form>
      <EmailInputWithHints
        value={email.value}
        errors={email.errors}
        onChange={onEmailChange}
        inputState={email.inputState}
      />
      <PasswordInputWithHints
        value={password.value}
        errors={password.errors}
        onChange={onPasswordChange}
        inputState={password.inputState}
        showHints={!apiError}
      />
      {apiError && <ApiError apiError={apiError} />}
      <Button type="submit" onClick={onSubmit} disabled={isSubmitting}>
        Sign up
      </Button>
    </Form>
  );
};

export default SubmitForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  button[type='submit'] {
    margin-top: 20px;
    align-self: center;
    width: 240px;

    @media (max-width: 240px) {
      width: auto;
    }
  }
`;
