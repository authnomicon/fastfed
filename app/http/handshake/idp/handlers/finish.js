exports = module.exports = function(md, flow, initialize, authenticate, errorLogging) {
  
  function process(req, res, next) {
    console.log('FASTFED HANDHSAKE FINISH?');
    console.log(req.query);
    console.log(req.state);
    console.log(req.session)
  }
  
  
  return flow('fastfed-handshake-finish',
    authenticate([ 'state', 'anonymous' ]),
    initialize(),
    process,
    errorLogging(),
  { required: true });
};

exports['@require'] = [
  '../../../../metadata/main',
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
