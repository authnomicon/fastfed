exports = module.exports = function(resume, finish) {
  
  return {
    spawn: null,
    resume: resume,
    exit: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receipt/resume',
  './receipt/finish'
];
