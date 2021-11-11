exports = module.exports = function(whitelist, authenticate, state, csrfProtection, parse) {
  

  function start(req, res, next) {
    console.log(req.body);
    console.log(req.state);
    
    whitelist.add(req.state.idp, function(err) {
      if (err) { return next(err); }
      console.log('ADDED');
    })
    
  }
  

  
  return [
    parse('application/x-www-form-urlencoded'),
    csrfProtection(),
    state(),
    //authenticate('www-form/password'), // TODO: authentication
    // TODO: authorization
    start
  ];
};

exports['@require'] = [
  'http://i.authnomicon.org/fastfed/WhitelistService',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/parse'
];
