exports = module.exports = function(store) {
  var uri = require('url');


  function redirect(req, res, next) {
    console.log('START: fastfed-enable-idp');
    console.log(req.state);
    console.log(req.locals);
    
    
    var url = uri.parse('/fastfed/setup/idp', true);
    delete url.search;
    //console.log(url);
    
    /*
    if (req.locals.state) {
      url.query.state = req.locals.state;
    }
    */
    url = uri.format(url);
    //console.log(url);
    
    res.redirect(url);
    
    /*
    var url = uri.parse(req.locals.receiveURI, true);
    console.log(url);
    
    url.query.provider_metadata_uri = req.locals.metadataURI;
    
    
    url = uri.format(url);
    console.log(url);
    
    res.redirect(url);
    */
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
