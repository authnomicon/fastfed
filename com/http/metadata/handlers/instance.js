exports = module.exports = function(server) {
  
  var config = {
    application_provider_instance: {}
  };
  
  
  
  
  function respond(req, res) {
    res.json(config);
  }
  
  // GET /.well-known/fastfed-discovery
  return [ respond ];
};

exports['@require'] = [];
