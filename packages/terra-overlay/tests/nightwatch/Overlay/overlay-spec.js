/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-overlay', done);
  },

  'Displays a default overlay': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/default`);
    browser.assert.elementPresent('.terra-Overlay');
    browser.assert.elementPresent('.terra-Overlay-content');
  },

  'Displays a fullscreen Overlay as the default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/default`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--fullscreen');
  },

  'Displays a default Overlay relative to the triggering container': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/container`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--container');
  },

  'Displays a Overlay with isScrollable prop': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/scrollable`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--scrollable');
  },

  'Triggers an onRequestClose on escape keydown': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('.terra-Overlay--fullscreen');
    browser.keys(browser.Keys.ESCAPE);
    browser.assert.elementNotPresent('.terra-Overlay--fullscreen');

    browser.click('#trigger_container');
    browser.assert.elementPresent('.terra-Overlay--container');
    browser.keys(browser.Keys.ESCAPE);
    browser.assert.elementNotPresent('.terra-Overlay--container');
  },

  'Triggers an onRequestClose on click inside of the Overlay': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('.terra-Overlay--fullscreen');
    browser.click('.terra-Overlay');
    browser.assert.elementNotPresent('.terra-Overlay--fullscreen');

    browser.click('#trigger_container');
    browser.assert.elementPresent('.terra-Overlay--container');
    browser.click('.terra-Overlay');
    browser.assert.elementNotPresent('.terra-Overlay--container');
  },

  'Background does not scroll when a fullscreen Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('.terra-Overlay--fullscreen');
    browser.expect.element('html').to.have.attribute('style').which.equals('overflow: hidden;');

    browser.click('.terra-Overlay');
    browser.assert.elementNotPresent('.terra-Overlay--fullscreen');
    browser.expect.element('html').to.have.attribute('style').which.equals('');
  },

  'Background can scroll when a Overlay relative to contianer is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('#trigger_container');
    browser.assert.elementPresent('.terra-Overlay--container');
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('.terra-Overlay');
    browser.assert.elementNotPresent('.terra-Overlay--container');
    browser.expect.element('html').to.have.attribute('style').which.equals('');
  },

  'Content under overlay is not clickable when Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/custom-content`);
    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('.terra-Overlay');
    browser.assert.containsText('#random_state', 'true');
    browser.click('#random_button');
    browser.assert.containsText('#random_state', 'true');
  },

  'Content outside of OverlayContainer is clickable when container Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/custom-content`);
    browser.click('#trigger_container');
    browser.assert.elementPresent('.terra-Overlay--container');
    browser.assert.containsText('#random_state', 'true');
    browser.click('#random_button');
    browser.assert.containsText('#random_state', 'false');
  },

  'Displays a Overlay with a light theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/light-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--light');
  },

  'Displays a Overlay with a dark theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/dark-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--dark');
  },

  'Displays a Overlay with a clear theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/clear-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--clear');
  },
};
