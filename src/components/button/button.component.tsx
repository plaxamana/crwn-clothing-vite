import type { ComponentPropsWithoutRef } from 'react';
import './button.styles.scss';

interface ButtonTypes {
  google: string;
  inverted: string;
}

interface ButtonI extends ComponentPropsWithoutRef<'button'> {
  children: string;
  buttonType?: string;
}

const BUTTON_TYPE_CLASSES: ButtonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }: ButtonI) => {
  return (
    <button
      className={`${
        BUTTON_TYPE_CLASSES[buttonType as keyof ButtonTypes]
      } button-container`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
