exports = module.exports = function(metadataHandler) {
  var express = require('express');
  
  var router = new express.Router();
  router.get('/', metadataHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed/provider-metadata';
exports['@require'] = [
  './handlers/metadata',
];
