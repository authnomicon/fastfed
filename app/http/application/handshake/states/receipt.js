exports = module.exports = function(resume, finish) {
  
  return {
    begin: null,
    resume: resume,
    finish: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/State';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receipt/resume',
  './receipt/finish'
];
