import { useState } from 'react';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from 'utils/firebase/firebase.utils';

import FormInput from 'components/form-input/form-input.component';
import Button, {
  BUTTON_TYPE_CLASSES,
} from 'components/button/button.component';

interface IFormFields {
  email: string;
  password: string;
}

const defaultFormFields: IFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState<IFormFields>(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLButtonElement;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !email) {
      alert('Email or password cannot be empty');
      return;
    }

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form action='#' onSubmit={handleSubmit}>
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

        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
