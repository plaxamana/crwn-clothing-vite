import { useState } from 'react';

import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from 'utils/firebase/firebase.utils';

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

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // password and confirmPassword match
    if (password !== confirmPassword) {
      alert('Passwords must be matching');
      return;
    }

    try {
      // authenticate user with email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // create user doc from the return of createAuthUserWithEmailAndPassword
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form action='#' onSubmit={handleSubmit}>
        <label htmlFor='displayName'>Display Name</label>
        <input
          type='text'
          name='displayName'
          id='displayName'
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

        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
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
