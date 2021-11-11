var fetch = require('node-fetch');
var mapObj = require('map-obj');


function Resolver() {
}

Resolver.prototype.resolve = function(url, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  
  //console.log('Fetching provider metadata: ' + uri);
  
  fetch(url)
    .then(function(response) {
      console.log(response.status);
      console.log(response.headers);
      
      if (response.status !== 200) {
        // TODO: Improve this with error codes
        throw new Error('no fastfed metadata');
      }
      
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      
      var obj = mapObj(json, mapper(METADATA));

      
      return cb(null, obj);
    })
    .catch(function(error) {
      return cb(error);
    })
  
  
  /*
  var self = this;
  process.nextTick(function() {
    var meta = {};
    meta.idp = {};
    meta.idp.displayName = 'IdMee';
    
    meta.application = {};
    meta.application.displayName = 'Foo';
    
    return cb(null, meta);
  });
  */
};

Resolver.prototype.resolveIDProvider = function(url, options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};
  
  this.resolve(url, function(err, md) {
    if (err) { return cb(err); }
    return cb(null, md.idProvider);
  });
};


module.exports = Resolver;



function mapper(map) {
  return function(k, v) {
    var x = map[k];
    if (!x) { return mapObj.mapObjectSkip; }
    if (typeof x === 'string') {
      return [ x, v ];
    }
    return [ x.key, x.map(v) ]
  }
}

var METADATA = {
  identity_provider: {
    key: 'idProvider',
    map: function(v) {
      return mapObj(v, mapper(IDENTITY_PROVIDER))
    }
  }
}

var IDENTITY_PROVIDER = {
  entity_id: 'id',
  fastfed_handshake_start_uri: 'handshakeStartURL'
}
