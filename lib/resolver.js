function Resolver() {
}

Resolver.prototype.resolve = function(uri, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  
  //console.log('Fetching provider metadata: ' + uri);
  
  var self = this;
  process.nextTick(function() {
    var meta = {};
    meta.idp = {};
    meta.idp.displayName = 'IdMee';
    
    meta.application = {};
    meta.application.displayName = 'Foo';
    
    return cb(null, meta);
  });
};

/*
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
*/


module.exports = Resolver;
