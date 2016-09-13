require('babel-register')();
var fs = require('fs');
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

const myLibrary = fs.readFileSync(require.resolve(__dirname +"/placesAPI.js"), { encoding: "utf-8" });

const scriptEl = document.createElement("script");
scriptEl.textContent = myLibrary;
window.document.body.textContent = myLibrary


Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
