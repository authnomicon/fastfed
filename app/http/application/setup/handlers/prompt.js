exports = module.exports = function(authenticate, ceremony) {
  
  // TODO: exit error handling.
  return ceremony('fastfed/setup/idp',
    authenticate([ 'session' ])
  );
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/ceremony'
];
