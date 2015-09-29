/**
 * getUserMedia helper
 * @module bmMedia/getUserMedia
 * @see  module:bmMedia
 */
define(function () {
  'use strict';

  var browserFn = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

  // all this for phantomjs.
  if (browserFn) {
    browserFn = browserFn.bind(navigator);
  } else {
    browserFn = function () {
      throw new TypeError('Unable to use navigator.getUserMedia as it is not available');
    };
  }

  function bmUserMedia () {}

  /**
   * Gets a media Stream
   * @param  {Object} constraints - A [MediaStreamConstraints]{@link http://w3c.github.io/mediacapture-main/getusermedia.html#mediastreamconstraints} Object
   * @return {Promise(MediaStream)}  - A [MediaStream]{@link http://w3c.github.io/mediacapture-main/getusermedia.html#idl-def-MediaStream} object
   */
  bmUserMedia.getMedia = function (constraints) {
    return new Promise(function (resolve, reject) {
      browserFn(constraints, function (mediaStream) {
        resolve(mediaStream);
      }, function (err) {
        reject(err);
      });
    });
  };

  /**
   * Gets a list of devices from the browser/OS
   * @return {Promise(Array)} A Promise resolved with an array of devices
   */
  bmUserMedia.getDevices = function () {
    return new Promise(function (resolve, reject) {
      if (typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.getSources !== 'undefined') {
        return MediaStreamTrack.getSources(function (sources) {
          resolve(sources);
        });
      }

      resolve([]);
    });
  };

  /**
   * returns access to the built in `navigator.getUserMedia`,
   * which is bound to _navigator_
   * @return {function}
   */
  bmUserMedia.getBuiltinFn = function () {
    return browserFn;
  };

  return bmUserMedia;
});
