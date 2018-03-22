// has recieve

exports = module.exports = function(receiveHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/receive', receiveHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/ApplicationHandshakeService'
];
exports['@path'] = '/fastfed/handshake';
exports['@require'] = [
  './handlers/receive'
];
