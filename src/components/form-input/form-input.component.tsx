import type { ComponentPropsWithoutRef } from 'react';
import { Group, FormInputLabel, Input } from './form-input.styles';

interface IFormInput extends ComponentPropsWithoutRef<'input'> {
  label: string;
  id: string;
}

export default function FormInput({ label, id, ...otherProps }: IFormInput) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel htmlFor={id} shrink={otherProps.value?.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
}
