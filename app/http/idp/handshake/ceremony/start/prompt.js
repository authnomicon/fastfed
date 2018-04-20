exports = module.exports = function() {
  
  function obtainConsent(req, res, next) {
    console.log('HANDSHAKE START OBTAIN CONSENT?');
    console.log(req.state);
    console.log(req.yieldState);
    
    if (req.state.allow == true) { return next(); }
    return res.prompt('fastfed/setup/proceed');
  }
  
  function issueReceipt(req, res, next) {
    if (req.state.finished == true) { return next(); }
    
    var options = {
      receiveURI: 'http://127.0.0.1:8080/fastfed/handshake/receive',
      //receiveURI: 'http://www.example.com/fastfed/handshake/receive',
      metadataURI: 'https://idp.example.com/fastfed/provider-metadata',
      instanceMetadataURI: 'https://tenant12345.example.com/fastfed/instance-metadata'
    }
    res.prompt('fastfed/handshake/finish', options);
  }
  
  
  return [
    obtainConsent,
    issueReceipt
  ];
};

exports['@require'] = [];
