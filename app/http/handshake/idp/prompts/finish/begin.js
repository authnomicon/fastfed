exports = module.exports = function(store) {
  var uri = require('url');


  function redirect(req, res, next) {
    console.log('START FASTFED HANDSHAKE FINISH');
    console.log(req.locals);
    console.log(req.state);
    
    
    var url = uri.parse(req.locals.receiveURI, true);
    delete url.search;
    console.log(url);
    
    url.query.provider_metadata_uri = req.locals.metadataURI;
    
    
    url = uri.format(url);
    console.log(url);
    
    res.redirect(url);
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
