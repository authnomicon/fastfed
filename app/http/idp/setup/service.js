exports = module.exports = function(applicationPromptHandler, applicationDecisionHandler,
                                    consentPromptHandler, consentDecisionHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/application', applicationPromptHandler);
  router.post('/application', applicationDecisionHandler);
  
  router.get('/consent', consentPromptHandler);
  router.post('/consent', consentDecisionHandler);
  
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
  './handlers/consent/prompt',
  './handlers/consent/decision'
];
