exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    return res.prompt('fastfed-enable-application');
  }
  
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
