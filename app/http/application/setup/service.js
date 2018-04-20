exports = module.exports = function(promptHandler, decisionHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/idp', promptHandler);
  router.post('/idp', decisionHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/ApplicationConsentService'
];
exports['@path'] = '/fastfed/setup';
exports['@require'] = [
  './handlers/prompt',
  './handlers/decision'
];
