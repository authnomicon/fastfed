exports = module.exports = function() {
  var Resolver = require('../../lib/instance-metadata/resolver');
  
  return new Resolver();
};

exports['@require'] = [];
