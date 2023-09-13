import type { ComponentPropsWithoutRef } from 'react';
import './form-input.styles.scss';

interface IFormInput extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

export default function FormInput({ label, id, ...otherProps }: IFormInput) {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          htmlFor={id}
          className={`${
            otherProps.value?.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
