exports = module.exports = function(begin) {
  
  return {
    spawn: begin,
    resume: null
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-enable-application';
exports['@require'] = [
  './enable-application/begin'
];
