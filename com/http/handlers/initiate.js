exports = module.exports = function(resolver, authenticate, state, csrfProtection, parse) {
  

  function fetchMetadata(req, res, next) {
    console.log(req.body);
    //res.redirect('/');
    
    resolver.resolveIDProvider(req.body.fastfed_url, function(err, idp) {
      if (err) { return next(err); }
      
      console.log(err);
      console.log(idp);
      
      // TODO: validate provider domain
      // https://openid.net/specs/fastfed-core-1_0-ID1.html#HandshakeApplicationProviderReadsIdentityProviderMetadata
      // https://openid.net/specs/fastfed-core-1_0-ID1.html#ProviderMetadataEndpointValidation
      
      // TODO: Verify compatibility
      
      // TODO: Obtain confirmation
      
      res.locals.idp = idp;
      next();
    });
    
  }
  
  function obtainConfirmation(req, res, next) {
    console.log('CONFIRM IT');
    console.log(res.locals.idp);
  }
  

  
  return [
    parse('application/x-www-form-urlencoded'),
    csrfProtection(),
    state(),
    //authenticate('www-form/password'), // TODO: authentication
    // TODO: authorization
    fetchMetadata,
    obtainConfirmation
  ];
};

exports['@require'] = [
  'http://i.authnomicon.org/fastfed/Resolver',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/parse'
];
