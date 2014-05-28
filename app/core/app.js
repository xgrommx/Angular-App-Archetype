/*global angular: true */
require('angular');
require('angular-ui-route');
require('angular-resource');

var app = angular.module('app', ['ui.router', 'ngResource']);

module.exports = app;