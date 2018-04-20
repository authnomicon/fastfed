exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    return res.prompt('fastfed/setup/idp');
  }
  
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
