exports = module.exports = function() {
  var uri = require('url');


  function enableFederation(req, res, next) {
    console.log('RESUME: fastfed-handshake-finish');
    console.log(req.body)
    console.log(req.state);
    
    //console.log('RESUME FINISH HANDSHAKE');
    //console.log(req.locals);
    //console.log(req.state);
    //console.log(req.yieldState);
    //console.log(req.session.state);
    //console.log(next)
    
    next();
    
    //res.completePrompt(next);
  }

  return [
    enableFederation
  ];
};

exports['@require'] = [];