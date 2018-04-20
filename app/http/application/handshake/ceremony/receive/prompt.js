exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    return res.prompt('fastfed-enable-idp');
  }
  
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
