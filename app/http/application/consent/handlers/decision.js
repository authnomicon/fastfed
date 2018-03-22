exports = module.exports = function(parse, flow, initialize, authenticate, errorLogging) {
  var path = require('path')
    , ejs = require('ejs')
  
  
  function process(req, res, next) {
    console.log('DECISION: fastfed-enable-idp');
    console.log(req.body)
    console.log(req.state);
    
    // FIXME: this won't resume, because of lack of `prev`.  Need to check this condition
    //  in flowstate
    //req.state = req.state || { name: 'fastfed-consent-application' }
    // TODO: marshal consent in some sensible way.
    //req.state.consent = true;
    next();
  }
  
  
  return [
    parse('application/x-www-form-urlencoded'),
    flow('fastfed-enable-idp',
      authenticate([ 'session' ]),
      initialize(),
      process,
      errorLogging()
    )
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
