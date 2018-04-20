exports = module.exports = function(applicationPromptHandler, applicationDecisionHandler,
                                    proceedPromptHandler, proceedDecisionHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/application', applicationPromptHandler);
  router.post('/application', applicationDecisionHandler);
  
  router.get('/proceed', proceedPromptHandler);
  router.post('/proceed', proceedDecisionHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/IdPConsentService'
];
exports['@path'] = '/fastfed/setup';
exports['@require'] = [
  './handlers/application/prompt',
  './handlers/application/decision',
  './handlers/proceed/prompt',
  './handlers/proceed/decision'
];
