import { useState } from 'react';
import './sign-up-form.styles.scss';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from 'utils/firebase/firebase.utils';

import FormInput from 'components/form-input/form-input.component';
import Button from 'components/button/button.component';

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
      if (e.code === 'auth/email-already-in-use') {
        alert('Cannot create user.  Email already in use');
      }
      console.log(e);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form action='#' onSubmit={handleSubmit}>
        <FormInput
          id='displayName'
          label='Display Name'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          id='email'
          label='Email'
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          id='password'
          label='Password'
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />

        <FormInput
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
