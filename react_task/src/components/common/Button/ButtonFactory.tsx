import React from 'react';
import SubmitButton, { SubmitButtonProps } from './SubmitButton';
import DefaultButton, { DefaultButtonProps } from './DefaultButton';

interface SubmitProps extends SubmitButtonProps {
  type: 'submit';
}

interface DefaultProps extends DefaultButtonProps {
  type?: 'default' | 'success' | 'error';
}

type ButtonFactoryProps = SubmitProps | DefaultProps;

/**
 * Get button component based on type.
 * Just a simple example how to return components with different prop types and be type safe.
 * In this case the Submit button supports different onClick callback
 * @param props ButtonFactoryProps
 * @returns Button component based on type
 */
const ButtonFactory: React.FC<ButtonFactoryProps> = (props) => {
  switch (props.type) {
    case 'submit':
      return <SubmitButton {...props} />;
    case 'default':
    case 'success':
    case 'error':
    default:
      return <DefaultButton {...props} />;
  }
};

export default ButtonFactory;
