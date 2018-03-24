exports = module.exports = function(resume, finish) {
  
  return {
    begin: null,
    resume: resume,
    finish: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/State';
exports['@name'] = 'fastfed-handshake';
exports['@require'] = [
  './start/resume',
  './start/finish'
];
