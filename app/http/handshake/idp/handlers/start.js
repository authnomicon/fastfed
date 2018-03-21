exports = module.exports = function(md, flow, initialize, authenticate, errorLogging) {
  
  
  // TODO: if not authenticated, redirect to login url, with return_to
  //       parameter of this URL
  
  // Question: when the application does the fastfed oauth exchagne, what
  // client ID does it use?  Can it authenticate?  Should it do PKCE?
  
  function resolveApplication(req, res, next) {
    console.log('FASTFED HANDHSAKE START?');
    
    // TODO: query params
    
    var providerMetadataURI = req.query.provider_metadata_uri // or from body
    // TODO: Fetch this metadata URI
    // TODO: enter a consent flow
    // TODO: Generate federation instance metadata
    // TODO: initiate a redirect to the application
    
    md.resolveApplication(providerMetadataURI, function(err, app) {
      if (err) { return next(err); }
      
      req.state.app = app;
      next();
    });
  }
  
  function obtainConsent(req, res, next) {
    console.log('GET CONSENT: ');
    console.log(req.locals.app);
    console.log(req.state);
    
    res.prompt('fastfed-handshake-receipt');
    
    //res.redirect('/fastfed/handshake/');
  }
  
  
  return flow('fastfed-handshake',
    authenticate([ 'session', 'anonymous' ]),
    initialize(),
    resolveApplication,
    obtainConsent,
    errorLogging(),
  { external: true });
};

exports['@require'] = [
  '../../../../metadata/main',
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
