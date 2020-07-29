import React, { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignInPage: FC = () => {
  const { loginWithRedirect } = useAuth0();
  loginWithRedirect();
  return <div>Signing In...</div>;
};

export default SignInPage;
