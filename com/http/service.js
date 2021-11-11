exports = module.exports = function(promptHandler, initiateHandler, informHandler, confirmHandler) {
  var express = require('express');
  
  var router = new express.Router();
  // TODO: Move the prompt to a more generic, less protocol centric endpoint
  router.get('/', promptHandler);
  router.post('/', initiateHandler);
  
  router.get('/confirm', informHandler);
  router.post('/confirm', confirmHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed/initiate';
exports['@require'] = [
  './handlers/prompt',
  './handlers/initiate',
  './handlers/inform',
  './handlers/confirm'
];
