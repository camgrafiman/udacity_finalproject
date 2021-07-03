import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    {/* This provider saves us the auth state from our users and provides us methods to login / logout users. and a hook named auth0 */}
    <Auth0Provider
      domain="dev-x-camgrafiman.eu.auth0.com"
      clientId="5ZS8KXmgybaB3cgBGJ9KhXZuyomuTvnR"
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
        <App />
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

