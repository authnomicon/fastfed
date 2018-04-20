exports = module.exports = function(spawn, resume) {
  
  return {
    spawn: spawn,
    resume: resume
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-finish';
exports['@require'] = [
  './finish/spawn',
  './finish/resume'
];
