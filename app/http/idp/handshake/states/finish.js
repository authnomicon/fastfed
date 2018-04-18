exports = module.exports = function(begin, resume) {
  
  return {
    launch: begin,
    resume: resume
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-finish';
exports['@require'] = [
  './finish/begin',
  './finish/resume'
];
