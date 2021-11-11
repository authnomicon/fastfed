exports = module.exports = function(imd, md, ceremony, initialize, authenticate, errorLogging) {
  
  
  // TODO: Authenticate the admin?  What if this is a first deployment, and you want
  //      to use the IdP's accounts for login?
  
  function go(req, res, next) {
    res.redirect('/ok');
  }
  
  return [
    go
  ];
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
