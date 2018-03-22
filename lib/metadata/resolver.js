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


module.exports = Resolver;
