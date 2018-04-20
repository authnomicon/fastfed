exports = module.exports = function(authenticate, ceremony) {
  
  return ceremony('fastfed-enable-application',
    authenticate([ 'session' ])
  );
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
