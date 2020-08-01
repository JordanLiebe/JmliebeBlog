import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const AuthProvider: FC = ({ children }) => {
  const domain: string = process.env.REACT_APP_AUTH0_DOMAIN
    ? process.env.REACT_APP_AUTH0_DOMAIN
    : '';
  const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID
    ? process.env.REACT_APP_AUTH0_CLIENT_ID
    : '';

  const audience: string = process.env.REACT_APP_AUTH0_AUDIENCE
    ? process.env.REACT_APP_AUTH0_AUDIENCE
    : '';

  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audiense={audience}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProvider;
