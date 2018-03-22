// has start and finish

exports = module.exports = function(applicationPromptHandler, applicationDecisionHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/application', applicationPromptHandler);
  router.post('/application', applicationDecisionHandler);
  
  // TODO: consent for initiating FastFed and releasing tenant data
  //router.get('/handshake');
  //router.post('/handshake');
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/IdPConsentService'
];
exports['@path'] = '/fastfed/consent';
exports['@require'] = [
  './handlers/enable-application/prompt',
  './handlers/enable-application/decision'
];
