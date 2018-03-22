exports = module.exports = function(resume) {
  
  return {
    begin: null,
    resume: resume
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/state/State';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receipt/resume'
];
