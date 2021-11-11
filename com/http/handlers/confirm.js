exports = module.exports = function(whitelist, authenticate, state, csrfProtection, parse) {
  var uri = require('url');
  

  function whitelistIDProvider(req, res, next) {
    console.log(req.body);
    console.log(req.state);
    
    whitelist.add(req.state.idp, function(err) {
      if (err) { return next(err); }
      console.log('ADDED');
      next();
    })
    
  }
  
  function startHandshake(req, res, next) {
    //console.log()
  
    var idp = req.state.idp;
  
    var l = uri.parse(idp.handshakeStartURL, true);
    delete l.search;
    l.query.app_metadata_uri = 'http://localhost:3000/fastfed/provider-metadata';
    res.redirect(uri.format(l));
  }

  
  return [
    parse('application/x-www-form-urlencoded'),
    csrfProtection(),
    state(),
    //authenticate('www-form/password'), // TODO: authentication
    // TODO: authorization
    whitelistIDProvider,
    startHandshake
  ];
};

exports['@require'] = [
  'http://i.authnomicon.org/fastfed/WhitelistService',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/state',
  'http://i.bixbyjs.org/http/middleware/csrfProtection',
  'http://i.bixbyjs.org/http/middleware/parse'
];
