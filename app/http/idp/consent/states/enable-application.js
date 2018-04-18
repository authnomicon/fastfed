exports = module.exports = function(begin) {
  
  return {
    launch: begin,
    resume: null
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-enable-application';
exports['@require'] = [
  './enable-application/begin'
];
