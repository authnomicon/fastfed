exports = module.exports = function() {
  var Resolver = require('../lib/resolver');
  
  return new Resolver();
};

exports['@implements'] = 'http://i.authnomicon.org/fastfed/Resolver';
exports['@require'] = [];
