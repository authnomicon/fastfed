exports = module.exports = function(prompt, resume, exit, yieldConsent, yieldFinish) {
  
  return {
    prompt: prompt,
    resume: resume,
    exit: exit
    yield: {
      'fastfed/setup/consent': yieldConsent
      'fastfed/handshake/finish': yieldFinish
    }
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed/handshake/start';
exports['@require'] = [
  './start/prompt',
  './start/resume',
  './start/exit',
  './start/yield/consent',
  './start/yield/finish'
];
