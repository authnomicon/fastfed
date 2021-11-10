exports = module.exports = function(authenticate, state, csrfProtection, parse) {
  

  function go(req, res, next) {
    console.log(req.body);
    //res.redirect('/');
  }
  

  
  return [
    parse('application/x-www-form-urlencoded'),
    csrfProtection(),
    state(),
    //authenticate('www-form/password'), // TODO: authentication
    // TODO: authorization
    go
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/parse'
];
