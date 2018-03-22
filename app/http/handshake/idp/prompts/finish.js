exports = module.exports = function(begin, resume) {
  
  return {
    begin: begin,
    resume: resume
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/Prompt';
exports['@name'] = 'fastfed-handshake-finish';
exports['@require'] = [
  './finish/begin',
  './finish/resume'
];
