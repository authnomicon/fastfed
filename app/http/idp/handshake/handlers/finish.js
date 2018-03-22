exports = module.exports = function(imd, flow, initialize, authenticate, errorLogging) {
  
  function providerAuthorization(req, res, next) {
    // TODO: Exchange OAuth initial_access_code, if applicable
    next();
  }
  
  function resolveApplicationInstance(req, res, next) {
    console.log('FASTFED HANDHSAKE FINISH?');
    console.log(req.session.state);
    
    // TODO: query params
    
    var instanceMetadataURI = req.query.instance_metadata_uri // or from body
    
    imd.resolveApplication(instanceMetadataURI, function(err, application) {
      if (err) { return next(err); }
      
      req.state.application = application;
      next();
    });
  }
  
  
  function obtainConsent(req, res, next) {
    console.log('FASTFED HANDHSAKE FINISH?');
    console.log(req.query);
    console.log(req.state);
    console.log(req.session)
    
    
    return res.prompt('fastfed-enable-application');
    
    next();
  }
  
  
  return flow('fastfed-handshake-finish',
    authenticate([ 'state', 'anonymous' ]),
    initialize(),
    providerAuthorization,
    resolveApplicationInstance,
    obtainConsent,
    errorLogging(),
  { required: true });
};

exports['@require'] = [
  '../../../../instance-metadata/main',
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
