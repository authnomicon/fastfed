exports = module.exports = function(server) {
  
  // http://lists.openid.net/pipermail/openid-specs-fastfed/Week-of-Mon-20170424/000073.html
  // http://lists.openid.net/pipermail/openid-specs-fastfed/attachments/20170430/ce22951d/attachment-0001.pdf
  
  // http://openid.net/specs/fastfed-1_0-00.html
  
  // TODO: Move this to
  var config = {
    identity_provider: {},
    application_provider: {}
  };
  
  
  
  
  function respond(req, res) {
    res.json(config);
  }
  
  // GET /.well-known/fastfed-discovery
  return [ respond ];
};

exports['@require'] = [];
