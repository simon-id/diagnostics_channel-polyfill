'use strict';

const path = require('path');
const child_process = require('child_process');

// Copied from node core
const tests = [
  'test-diagnostics-channel-has-subscribers.js',
  // Not including this one because it tests http server channels and AsyncLocalStorage
  // test-diagnostics-channel-http-server-start.js
  'test-diagnostics-channel-object-channel-pub-sub.js',
  'test-diagnostics-channel-safe-subscriber-errors.js',
  'test-diagnostics-channel-symbol-named.js',
];

for (const test of tests) {
  const filePath = path.join(__dirname, 'core', test);

  try {
    child_process.execSync(`node ${filePath}`, { timeout: 1e3 });
  } catch (err) { // eslint-disable-line no-unused-vars
    process.exit(1);
  }
}
