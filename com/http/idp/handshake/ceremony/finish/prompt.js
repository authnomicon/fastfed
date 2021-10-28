exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    return res.prompt('fastfed/setup/application');
  }
  
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
