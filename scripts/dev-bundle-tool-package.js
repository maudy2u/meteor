// This file contains a package.json for the dependencies of the command-line
// tool.

// We put this in a JS file so that it can contain comments. It is processed
// into a package.json file by generate-dev-bundle.sh.

var packageJson = {
  name: "meteor-dev-bundle-tool",
  // Version is not important but is needed to prevent warnings.
  version: "0.0.0",
  dependencies: {
    // Explicit dependency because we are replacing it with a bundled version
    // and we want to make sure there are no dependencies on a higher version
    npm: "3.10.2",
    "node-gyp": "3.3.1",
    "node-pre-gyp": "0.6.26",
    "meteor-babel": "0.11.7",
    "meteor-promise": "0.7.2",
    fibers: "https://github.com/4commerce-technologies-AG/node-fibers.git#v1.0.13-patch-arm64",
    promise: "7.1.1",
    // So that Babel 6 can emit require("babel-runtime/helpers/...") calls.
    "babel-runtime": "6.9.2",
    // For various ES2015 polyfills, such as Map and Set.
    "meteor-ecmascript-runtime": "0.2.6",
    // Not yet upgrading Underscore from 1.5.2 to 1.7.0 (which should be done
    // in the package too) because we should consider using lodash instead
    // (and there are backwards-incompatible changes either way).
    underscore: "1.5.2",
    "source-map-support": "https://github.com/meteor/node-source-map-support/tarball/1912478769d76e5df4c365e147f25896aee6375e",
    semver: "4.1.0",
    request: "2.47.0",
    fstream: "https://github.com/meteor/fstream/tarball/cf4ea6c175355cec7bee38311e170d08c4078a5d",
    tar: "1.0.2",
    kexec: "2.0.2",
    "source-map": "0.5.3",
    "browserstack-webdriver": "2.41.1",
    "node-inspector": "0.12.8",
    chalk: "0.5.1",
    sqlite3: "3.1.3",
    netroute: "1.0.2",
    "http-proxy": "1.11.1",
    "wordwrap": "0.0.2",
    "moment": "2.8.4",
    "rimraf": "2.4.3",
    // XXX: When we update this, see if it fixes this Github issue:
    // https://github.com/jgm/CommonMark/issues/276 . If it does, remove the
    // workaround from the tool.
    "commonmark": "0.15.0",
    escope: "3.2.0",
    // 2.4.0 (more or less, the package.json change isn't committed) plus our PR
    // https://github.com/williamwicks/node-eachline/pull/4
    eachline: "https://github.com/meteor/node-eachline/tarball/ff89722ff94e6b6a08652bf5f44c8fffea8a21da",
    pathwatcher: "6.7.0",
    runas: "3.1.1",
    'lru-cache': '2.6.4',
    'cordova-lib': "6.0.0",
    longjohn: '0.2.11'
  }
};

if (process.platform === 'win32') {
  // Remove dependencies that do not work on Windows
  delete packageJson.dependencies.netroute;
  delete packageJson.dependencies.kexec;
}

process.stdout.write(JSON.stringify(packageJson, null, 2) + '\n');
