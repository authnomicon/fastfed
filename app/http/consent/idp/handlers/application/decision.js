exports = module.exports = function(parse, flow, initialize, authenticate, errorLogging) {
  var path = require('path')
    , ejs = require('ejs')
  
  
  function render(req, res, next) {
    console.log('FASTFED CONSENT FOR APP ENABLE POST?');
    console.log(req.query);
    console.log(req.body);
    console.log(req.state);
  }
  
  
  return [
    parse('application/x-www-form-urlencoded'),
    flow('fastfed-consent-application',
      authenticate([ 'session' ]),
      initialize(),
      render,
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
