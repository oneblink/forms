/**
 * A consistant, promise based API for accessing
 * Media (Audio and Video)
 * @module bmMedia
 */
define(function (require) {
  'use strict';

  // TODO: Support for MediaDevices functionality
  // if (typeof MediaDevices !== 'undefined'){
  //   return;
  // }

  return require('forms/helpers/get-user-media-helper');
});
