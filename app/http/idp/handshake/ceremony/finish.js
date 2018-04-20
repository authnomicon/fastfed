exports = module.exports = function(spawn, resume, prompt) {
  
  return {
    spawn: spawn,
    resume: resume,
    prompt: prompt
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed/handshake/finish';
exports['@require'] = [
  './finish/spawn',
  './finish/resume',
  './finish/prompt'
];
