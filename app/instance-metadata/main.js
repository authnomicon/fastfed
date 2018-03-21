exports = module.exports = function(resolver) {
  var api = {};
  
  api.resolveApplication = function(uri, options, cb) {
    if (typeof options == 'function') {
      cb = options;
      options = undefined;
    }
    options = options || {};
    
    resolver.resolve(uri, function(err, config) {
      if (err) { return cb(err); }
      return cb(null, config.application);
    });
  };
  
  return api;
};

exports['@implements'] = 'http://schemas.authnomicon.org/js/fastfed/instance-metadata';
exports['@singleton'] = true;
exports['@require'] = [
  './resolver'
];
