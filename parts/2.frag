    require(['main', 'views/jqm'], function(BlinkForms, Views) {
      BlinkForms._views = Views;
    });
  };

if (typeof define === "function" && define.amd) {
	define("BlinkForms", [
    'jquery',
    'jquerymobile',
    'rivets',
    'underscore',
    'backbone',
    'q'
  ], factory);
}}());

