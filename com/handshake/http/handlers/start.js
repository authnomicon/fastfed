exports = module.exports = function(service, resolver, authenticate, state) {
  var Request = require('../../../../lib/request')
    , Response = require('../../../../lib/response');
  
  
  // TODO: if not authenticated, redirect to login url, with return_to
  //       parameter of this URL
  
  // Question: when the application does the fastfed oauth exchagne, what
  // client ID does it use?  Can it authenticate?  Should it do PKCE?
  
  function resolveApplication(req, res, next) {
    //console.log('FASTFED HANDHSAKE START?');
    
    // TODO: query params
    
    var metadataURI = req.query.app_metadata_uri;
    var expiration = req.query.expiration;
    // or from body
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
  
  function fetchMetadata(req, res, next) {
    resolver.resolveAppProvider(req.query.app_metadata_uri, function(err, appProvider) {
      if (err) { return next(err); }
      
      console.log('FETCHED APP');
      console.log(err);
      console.log(appProvider);
      
      // TODO: Verify compatibility
      
      
      res.locals.appProvider = appProvider;
      next();
    });
  }
  
  
  function evaluate(req, res, next) {
    console.log('EVALUATING FAST FED START');
    console.log(req.query)
    console.log(req.state);
    
    // TODO: Add app metadata to azreq
    var zreq = new Request(res.locals.appProvider, req.user)
      , zres = new Response();
      
    function onprompt(name, options) {
      // TODO: Replace this with prompts.dispatch(name,...)
      var prompt = prompts.get(name);
      if (!prompt) { return next(new Error("Unknown prompt '" + name + "'")); }
    
      // FIXME: Merge rather than overwrite
      res.locals = options || {};
      prompt(req, res, next);
    }
      
      
    function ondecision(result, scope) {
      console.log('DECISION!');
      console.log(result)
      
      // TODO: send registration request, display status page to user
      // POST to app providers fastfed_handshake_register_uri
      
      //res.redirect('/status')
    }
      
    zres.once('decision', ondecision);
      
    service(zreq, zres);
  }
  
  
  // http://127.0.0.1:8080/fastfed/handshake/start?provider_metadata_uri=foo
  
  return [
    //authenticate([ 'session', 'anonymous' ]),
    //resolveApplication,
    state(),
    fetchMetadata,
    evaluate
  ];
};

exports['@require'] = [
  'http://i.authnomicon.org/fastfed/AuthorizationService',
  'http://i.authnomicon.org/fastfed/Resolver',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state'
];
