exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    var url = uri.parse(req.locals.receiveURI, true);
    delete url.search;
    url.query.provider_metadata_uri = req.locals.metadataURI;
    url.query.instance_metadata_uri = req.locals.instanceMetadataURI;
    
    // TODO: Put instance ID in state?
    
    req.state.touch();
    
    url = uri.format(url);
    res.redirect(url);
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
