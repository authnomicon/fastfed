exports = module.exports = function(resolver, authenticate, state, csrfProtection, parse) {
  

  function go(req, res, next) {
    console.log(req.body);
    //res.redirect('/');
    
    resolver.resolveIDProvider(req.body.fastfed_url, function(err, idp) {
      if (err) { return next(err); }
      
      console.log(err);
      console.log(idp);
      
    });
    
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
  'http://i.authnomicon.org/fastfed/Resolver',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/parse'
];
