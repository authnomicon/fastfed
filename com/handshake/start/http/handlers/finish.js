exports = module.exports = function(imd, ceremony, initialize, authenticate, errorLogging) {
  
  function providerAuthorization(req, res, next) {
    // TODO: Exchange OAuth initial_access_code, if applicable
    next();
  }
  
  function resolveApplicationInstance(req, res, next) {
    // TODO: query params
    
    var instanceMetadataURI = req.query.instance_metadata_uri // or from body
    
    imd.resolveApplication(instanceMetadataURI, function(err, application) {
      if (err) { return next(err); }
      
      req.state.application = application;
      next();
    });
  }
  
  
  return ceremony('fastfed/handshake/finish',
    authenticate([ 'state', 'anonymous' ]),
    initialize(),
    providerAuthorization,
    resolveApplicationInstance,
    errorLogging(),
  { required: true });
};

exports['@require'] = [
  '../../../../instance-metadata/main',
  'http://i.bixbyjs.org/http/middleware/ceremony',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
