exports = module.exports = function(redirectHandler) {
  var express = require('express');
  var router = new express.Router();
  
  router.get('/', redirectHandler);
  
  return router;
};

exports['@implements'] = [
  'http://i.bixbyjs.org/http/Service',
  'http://schemas.authnomicon.org/js/http/fastfed/ProviderMetadataService'
];
exports['@path'] = '/fastfed/provider-metadata';
exports['@require'] = [ './handlers/redirect' ];
