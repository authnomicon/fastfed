exports = module.exports = function(flow, authenticate, errorLogging) {
  
  
  // TODO: if not authenticated, redirect to login url, with return_to
  //       parameter of this URL
  
  // Question: when the application does the fastfed oauth exchagne, what
  // client ID does it use?  Can it authenticate?  Should it do PKCE?
  
  function process(req, res, next) {
    // TODO: query params
    
    var providerMetadataURI = req.query.provider_metadata_uri // or from body
    // TODO: Fetch this metadata URI
    // TODO: enter a consent flow
    // TODO: Generate federation instance metadata
    // TODO: initiate a redirect to the application
  }
  
  return flow('fastfed-handshake',
    authenticate([ 'session', 'anonymous' ]),
    errorLogging(),
  { external: true });
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
