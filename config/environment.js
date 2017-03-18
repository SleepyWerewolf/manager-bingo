/* eslint-env node */

module.exports = function(environment) {
  const {
    SURGE_API_KEY,
    SURGE_AUTH_DOMAIN,
    SURGE_DATABASE_URL,
    SURGE_STORAGE_BUCKET,
    SURGE_MESSAGING_SENDER
  } = process.env;

  const ENV = {
    modulePrefix: 'manager-bingo',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    firebase: {
      apiKey: SURGE_API_KEY,
      authDomain: SURGE_AUTH_DOMAIN,
      databaseURL: SURGE_DATABASE_URL,
      storageBucket: SURGE_STORAGE_BUCKET,
      messagingSenderId: SURGE_MESSAGING_SENDER
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
