exports = module.exports = function(store) {
  var uri = require('url');


  function redirect(req, res, next) {
    console.log('START FASTFED HANDSHAKE FINISH');
    console.log(req.locals);
    console.log(req.state);
    
    
    var url = uri.parse(req.locals.receiveURI, true);
    console.log(url);
    
    url.query.provider_metadata_uri = req.locals.metadataURI;
    
    
    url = url.format();
    console.log(url);
    
    res.redirect(url);
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
