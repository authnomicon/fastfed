exports = module.exports = function(startHandler, finishHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/start', startHandler);
  router.get('/finish', finishHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed/start';  // /fastfed/handshake/start?
exports['@require'] = [
  './handlers/start',
  './handlers/finish'
];
