// has start and finish

exports = module.exports = function(startHandler, finishHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/start', startHandler);
  router.get('/finish', finishHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/IdPHandshakeService'
];
exports['@path'] = '/fastfed/handshake';
exports['@require'] = [
  './handlers/start',
  './handlers/finish'
];
