import React from 'react';
import BaseButton, { BaseButtonProps } from './BaseButton';
import classNames from 'classnames';

export interface DefaultButtonProps extends Omit<BaseButtonProps, 'type'> {
  type?: 'default' | 'success' | 'error';
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
  children,
  type,
  className,
  ...props
}) => {
  const buttonClassName = classNames(className, {
    'btn-success': type === 'success',
    'btn-error': type === 'error',
    'btn-default': !type || type === 'default',
  });

  return (
    <BaseButton {...props} type="button" className={buttonClassName}>
      {children}
    </BaseButton>
  );
};

export default DefaultButton;
