exports = module.exports = function(resume, exit) {
  
  return {
    resume: resume,
    exit: exit
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receive/resume',
  './receive/exit'
];
