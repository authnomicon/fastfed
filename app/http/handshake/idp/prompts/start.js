exports = module.exports = function(resume) {
  
  return {
    begin: null,
    resume: resume
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/Prompt';
exports['@name'] = 'fastfed-handshake';
exports['@require'] = [
  './start/resume'
];
