exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    //console.log('GET CONSENT: ');
    //console.log(req.locals.app);
    //console.log(req.state);
    
    
    var options = {
      receiveURI: 'http://127.0.0.1:8080/fastfed/handshake/receive',
      //receiveURI: 'http://www.example.com/fastfed/handshake/receive',
      metadataURI: 'https://idp.example.com/fastfed/provider-metadata'
    }
    
    res.prompt('fastfed-handshake-finish', options);
    
    //res.redirect('/fastfed/handshake/');
  }
  
  
  // http://127.0.0.1:8080/fastfed/handshake/start?provider_metadata_uri=foo
  
  return [
    obtainConsent
  ];
};

exports['@require'] = [];
