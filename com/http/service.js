exports = module.exports = function(promptHandler, verifyHandler) {
  var express = require('express');
  
  var router = new express.Router();
  // TODO: Move the prompt to a more generic, less protocol centric endpoint
  router.get('/', promptHandler);
  //router.post('/', verifyHandler);
  
  return router;
};

exports['@implements'] = 'http://i.bixbyjs.org/http/Service';
exports['@path'] = '/fastfed/initiate';
exports['@require'] = [
  './handlers/prompt'
];
