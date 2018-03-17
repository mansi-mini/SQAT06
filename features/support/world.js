const { setWorldConstructor } = require('cucumber')
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
const webdriverio = require('webdriverio');
const options = { desiredCapabilities: { browserName: 'chrome' } };

class CustomWorld {
  constructor() {
    this.browser = webdriverio.remote(options);
  }

  goToWebsite() {
    return this.browser.init().url('https://duckduckgo.com/');
  }

  randomUsers() {
    return Math.random().toString(36).substring(7);
  }
}


setWorldConstructor(CustomWorld)

