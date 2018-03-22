exports = module.exports = function(begin) {
  
  return {
    begin: begin,
    resume: null
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/Prompt';
exports['@name'] = 'fastfed-consent-application';
exports['@require'] = [
  './application/begin'
];
