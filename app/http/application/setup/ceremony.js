exports = module.exports = function(spawn) {
  
  return {
    spawn: spawn
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-enable-idp';
exports['@require'] = [
  './ceremony/spawn'
];
