exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    //console.log('FASTFED HANDHSAKE FINISH?');
    //console.log(req.query);
    //console.log(req.state);
    //console.log(req.session)
    
    
    return res.prompt('fastfed-enable-application');
  }
  
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
