exports = module.exports = function(begin) {
  
  return {
    begin: begin,
    resume: null
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/Prompt';
exports['@name'] = 'fastfed-enable-idp';
exports['@require'] = [
  './enable-idp/begin'
];