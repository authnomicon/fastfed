exports = module.exports = function(imd, md, ceremony, initialize, authenticate, errorLogging) {
  
  
  // TODO: Authenticate the admin?  What if this is a first deployment, and you want
  //      to use the IdP's accounts for login?
  
  
  function resolveIdP(req, res, next) {
    // TODO: query params
    
    //console.log('APP RECEIVE HANDSHAKE');
    //console.log(req.query);
    
    var metadataURI = req.query.provider_metadata_uri // or from body
      , instanceMetadataURI = req.query.instance_metadata_uri
      , state = req.query.state
    
    // TODO: Fetch the provider meta data URI
    // TODO: Fetch instance meatadata, using authz scheme, if necessary
    
    md.resolveIdP(metadataURI, function(err, provider) {
      if (err) { return next(err); }
      
      //req.state = req.state || { name: 'fastfed-handshake-receipt' };
      req.state.provider = provider;
      req.state.state = state;
      //console.log('RESOLVED PROVIDER');
      //console.log(provider)
      
      next();
    });
  }
  
  function providerAuthorization(req, res, next) {
    // TODO: Exchange OAuth initial_access_code, if applicable
    next();
  }
  
  function resolveIdPInstance(req, res, next) {
    //console.log('FASTFED HANDHSAKE FINISH?');
    //console.log(req.session.state);
    
    // TODO: query params
    
    var instanceMetadataURI = req.query.instance_metadata_uri // or from body
    
    imd.resolveIdP(instanceMetadataURI, function(err, idp) {
      if (err) { return next(err); }
      
      req.state.idp = idp;
      //console.log('RESOLVED INSTANCE');
      //console.log(idp)
      
      next();
    });
  }
  
  function go(req, res, next) {
    res.redirect('/ok');
  }
  
  return [
    go
  ];
  
  /*
  return ceremony('fastfed/handshake/receive',
    authenticate([ 'session', 'anonymous' ]),
    initialize(),
    resolveIdP,
    providerAuthorization,
    resolveIdPInstance,
    errorLogging(),
  { external: true });
  */
};

exports['@require'] = [
  '../../../../instance-metadata/main',
  '../../../../metadata/main',
  'http://i.bixbyjs.org/http/middleware/ceremony',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
