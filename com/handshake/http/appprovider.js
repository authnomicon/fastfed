exports = module.exports = function(registerHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/register', registerHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed';
exports['@require'] = [
  './handlers/receive'
];
