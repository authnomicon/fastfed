exports = module.exports = function(startHandler, finalizeHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/start', startHandler);
  router.get('/finalize', finalizeHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed';  // /fastfed/handshake/start?
exports['@require'] = [
  './handlers/start',
  './handlers/finalize'
];
