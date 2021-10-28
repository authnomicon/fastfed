exports = module.exports = function(spawn, prompt) {
  
  return {
    spawn: spawn,
    prompt: prompt
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Prompt';
exports['@name'] = 'fastfed/setup/consent';
exports['@require'] = [
  './consent/spawn',
  './consent/prompt'
];
