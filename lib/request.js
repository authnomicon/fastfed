var EventEmitter = require('events').EventEmitter;
var util = require('util');


function Request(appProvider, user) {
  EventEmitter.call(this);
  this.appProvider =
  this.applicationProvider = appProvider;
  this.user = user;
}

util.inherits(Request, EventEmitter);


module.exports = Request;
