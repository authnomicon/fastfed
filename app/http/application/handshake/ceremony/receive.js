exports = module.exports = function(prompt, resume, exit) {
  
  return {
    prompt: prompt,
    resume: resume,
    exit: exit
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed-handshake-receipt';
exports['@require'] = [
  './receive/prompt',
  './receive/resume',
  './receive/exit'
];
