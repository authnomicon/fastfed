exports = module.exports = function(authenticate, ceremony) {
  
  return ceremony('fastfed/setup/proceed',
    authenticate([ 'session' ])
  );
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
