import { useState } from 'react';

import { createAuthUserWithEmailAndPassword } from 'utils/firebase/firebase.utils';

interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLButtonElement;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    
  }

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form action='#' onSubmit={() => {}}>
        <label htmlFor='display-name'>Display Name</label>
        <input
          type='text'
          name='display-name'
          id='display-name'
          onChange={handleChange}
          value={displayName}
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={email}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={handleChange}
          required
        />

        <label htmlFor='confirm-password'>Confirm Password</label>
        <input
          type='password'
          id='confirm-password'
          name='confirm-password'
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;
