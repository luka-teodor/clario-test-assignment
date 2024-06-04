import { MouseEvent, MouseEventHandler, useRef } from 'react';
import BaseButton, { BaseButtonProps } from './BaseButton';

export interface SubmitButtonProps
  extends Omit<BaseButtonProps, 'type' | 'onClick'> {
  onClick?: (
    event: MouseEvent<HTMLButtonElement>,
    form: HTMLFormElement,
  ) => void;
}

/**
 * Submit button can work with both regular form submission and custom behaviour.
 * In order to use custom behaviour, add preventDefault() in onClick handler.
 * @param props SubmitButtonProps
 * @returns Submit button component
 */
const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const ref = useRef<HTMLButtonElement>(null);

  // Just an example of using refs. In real world scenario it could be redundant.
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    // Example of custom onClick handler payload for submit button
    if (props.onClick && ref?.current?.form) {
      props.onClick(e, ref.current.form);
    }
  };

  return (
    <BaseButton
      {...props}
      onClick={onClick}
      type="submit"
      ref={ref}
      className="btn-submit"
    />
  );
};

export default SubmitButton;
