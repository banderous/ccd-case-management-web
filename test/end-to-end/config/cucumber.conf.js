exports.config = {

  specs: [
    '../features/*.feature'
  ],

  exclude: [],

  directConnect: true,

  baseURL: '',

  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'shardTestFiles': true,
    'maxInstances': 1,
    'acceptInsecureCerts': true,
    'marionette': false,
    'browserName': 'chrome'
  },

  cucumberOpts: {
    require: [
      '../features/stepDefinitions/login.js'
    ],
    tags: false,
    format: 'pretty',
    profile: false,
    'no-source': true
  },

  useAllAngular2AppRoots: true,

};