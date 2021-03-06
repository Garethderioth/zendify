/* global __AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__ */
import Auth0Lock from 'auth0-lock';

const options = {
  allowSignUp: false,
  autoclose: true,
  auth: {
    redirect: false,
  },
};

const auth0Lock = new Auth0Lock(__AUTH0_CLIENT_ID__, __AUTH0_DOMAIN__, options);

export default auth0Lock;
