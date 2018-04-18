exports = module.exports = function(resume, finish) {
  
  return {
    launch: null,
    resume: resume,
    finish: finish
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receipt/resume',
  './receipt/finish'
];
