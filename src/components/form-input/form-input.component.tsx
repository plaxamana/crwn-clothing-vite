import type { ComponentPropsWithoutRef } from 'react';
import './form-input.styles.scss';

interface FormInputI extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

export default function FormInput({ label, id, ...otherProps }: FormInputI) {
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
