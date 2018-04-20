exports = module.exports = function(resume, finish) {
  
  return {
    spawn: null,
    resume: resume,
    exit: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake';
exports['@require'] = [
  './start/resume',
  './start/finish'
];
