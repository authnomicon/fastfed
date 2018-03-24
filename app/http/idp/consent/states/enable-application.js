exports = module.exports = function(begin) {
  
  return {
    begin: begin,
    resume: null
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/State';
exports['@name'] = 'fastfed-enable-application';
exports['@require'] = [
  './enable-application/begin'
];