exports = module.exports = function(resume, finish) {
  
  return {
    resume: resume,
    exit: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receive/resume',
  './receive/finish'
];
