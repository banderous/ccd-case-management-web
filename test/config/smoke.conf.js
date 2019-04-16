exports.config = {

  specs: [
    '../features/*.feature'
  ],

  exclude: [],

  directConnect: true,

  baseURL: '',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    'shardTestFiles': true,
    'maxInstances': 5,
    'acceptInsecureCerts': true,
    'marionette': false,
    'browserName': 'chrome',

    chromeOptions: { args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage', '--disable-setuid-sandbox', '--no-zygote '] },

    'proxy': {
      'proxyType': 'manual',
      'httpProxy': 'proxyout.reform.hmcts.net:8080',
      'sslProxy': 'proxyout.reform.hmcts.net:8080',
      'noProxy': ''
    },
  },

  cucumberOpts: {
    require: [
      '../stepDefinitions/*.js'
    ],
    tags: false,
    format: 'json:test/results/results.json',
    profile: false,
    'no-source': true,
    plugin: 'json:test/cucumber.json'
  },
  
   plugins: [{
        package: "protractor-screenshoter-plugin",
        screenshotPath: "./smoke-output",
        screenshotOnExpect: "failure+success",
        screenshotOnSpec: "failure+success",
        withLogs: true,
        writeReportFreq: "asap",
        clearFoldersBeforeTest: true
}],

  useAllAngular2AppRoots: true,

  SELENIUM_PROMISE_MANAGER: false,

  allScriptsTimeout: 60000
};
