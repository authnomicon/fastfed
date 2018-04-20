exports = module.exports = function(parse, authenticate, errorLogging, ceremony) {
  var path = require('path')
    , ejs = require('ejs')
  
  
  function process(req, res, next) {
    console.log('DECISION: fastfed-enable-application');
    console.log(req.body)
    console.log(req.state);
    
    // FIXME: this won't resume, because of lack of `prev`.  Need to check this condition
    //  in flowstate
    //req.state = req.state || { name: 'fastfed-enable-application' }
    // TODO: marshal consent in some sensible way.
    //req.state.consent = true;
    next();
  }
  
  function errorHandler(err, req, res, next) {
    console.log('DECISION-ERROR: fastfed-enable-application');
    console.log(err)
    next(err);
  }
  
  
  return [
    parse('application/x-www-form-urlencoded'),
    ceremony('fastfed-enable-application',
      authenticate([ 'session' ]),
      initialize(),
      process,
      errorLogging()
    )
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/parse',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
