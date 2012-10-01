'use strict';

angular.module('app.i18n', [])
  .constant('defaultLang', 'en')
  .constant('translations', {
    en: {
      WAITING_FOR_LANTERN: 'Waiting for Lantern...',
      UNEXPECTED_STATE_TITLE: 'Unexpected State',
      UNEXPECTED_STATE_PROMPT: 'The application is in an unexpected state. You can try refreshing, restarting Lantern, or resetting your settings if it happens again.',
      RESET: 'Reset',
      REFRESH: 'Refresh',
      SETTINGS_UNLOCK_TITLE: 'Unlock Settings',
      SETTINGS_UNLOCK_PROMPT: 'Enter your Lantern password to unlock your settings.',
      PASSWORD: 'password',
      PASSWORD_CONFIRM: 'confirm password',
      CREATE: 'Create',
      PASSWORDS_MUST_MATCH: 'Passwords must match',
      PASSWORD_INVALID: 'Password invalid',
      UNLOCK: 'Unlock',
      SETTINGS_LOAD_FAILURE_TITLE: 'Couldn’t Load Settings',
      SETTINGS_LOAD_FAILURE_PROMPT: 'Your settings could not be loaded and may be corrupt. Choose Reset to make a backup and then start over, or choose Quit to try to resolve the problem later.', // XXX we currently don't back up settings before wiping them
      NOTIFY_LANTERN_DEVS: 'Notify Lantern developers',
      UNEXPECTED_ERROR: 'An unexpected error has occurred.',
      QUIT: 'Quit',
      PASSWORD_CREATE_TITLE: 'Create Password',
      PASSWORD_CREATE_PROMPT: 'Create your Lantern password so your information can be stored securely.',
      SETUP_WELCOME_TITLE: 'Welcome to Lantern',
      SETUP_WELCOME_PROMPT: 'Internet freedom for everyone.',
      GIVE_ACCESS: 'Give Access',
      GET_ACCESS: 'Get Access',
      SETUP_SIGNIN_TITLE: 'Sign in to Google Talk',
      SETUP_SIGNIN_PROMPT: 'Lantern works by connecting users around the world together in a peer-to-peer network. Signing into Google Talk allows you to connect through users you know and trust, and not just anyone.',
      SIGNIN_TIP_SECURE: 'Your Google password is sent over a secure connection and is used only to sign into Google Talk.',
      SIGNIN_TIP_SAVE_PASSWORD: 'Securely save your password in Lantern’s encrypted settings file.',
      SIGNIN_STATUS_SIGNING_IN: 'Signing in...',
      SIGNIN_STATUS_BAD_CREDENTIALS: 'Invalid user and password combination',
      SIGNIN_STATUS_NOT_AUTHORIZED: 'User does not have Lantern access.',
      GTALK_USERID: 'Google Talk userid',
      EMAIL_PLACEHOLDER: 'email@example.com',
      GTALK_PASSWORD: 'Google Talk password',
      SAVE_PASSWORD: 'Save password',
      PASSWORD_SAVED: 'password saved',
      START_OVER: 'Start over',
      SIGN_IN: 'Sign in',
      SIGNIN_DISCOVER_PROXIES_PROMPT: 'Lantern can connect to known proxies but will be unable to discover new ones until signed into Google Talk.'
    }
  });
