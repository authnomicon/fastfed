exports = module.exports = function(flow, authenticate, errorLogging) {
  
  
  
  function process(req, res, next) {
    // TODO: query params
    
    var providerMetadataURI = req.query.provider_metadata_uri // or from body
      , instanceMetadataURI = req.query.instance_metadata_uri
      , state = req.query.state
    
    // TODO: Fetch the provider meta data URI
    // TODO: Fetch instance meatadata, using authz scheme, if necessary
  }
  
  return flow('fastfed-handshake-receipt',
    authenticate([ 'session', 'anonymous' ]),
    errorLogging(),
  { external: true });
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
