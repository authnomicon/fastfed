exports = module.exports = function(md, initialize, authenticate, errorLogging, ceremony) {
  
  
  // TODO: if not authenticated, redirect to login url, with return_to
  //       parameter of this URL
  
  // Question: when the application does the fastfed oauth exchagne, what
  // client ID does it use?  Can it authenticate?  Should it do PKCE?
  
  function resolveApplication(req, res, next) {
    //console.log('FASTFED HANDHSAKE START?');
    
    // TODO: query params
    
    var metadataURI = req.query.provider_metadata_uri // or from body
    // TODO: Fetch this metadata URI
    // TODO: enter a consent flow
    // TODO: Generate federation instance metadata
    // TODO: initiate a redirect to the application
    
    md.resolveApplication(metadataURI, function(err, provider) {
      if (err) { return next(err); }
      //req.state.provider = provider;
      next();
    });
  }
  
  
  // http://127.0.0.1:8080/fastfed/handshake/start?provider_metadata_uri=foo
  
  return ceremony('fastfed/handshake/start',
    authenticate([ 'session', 'anonymous' ]),
    initialize(),
    resolveApplication,
    errorLogging(),
  { external: true });
};

exports['@require'] = [
  '../../../../metadata/main',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
