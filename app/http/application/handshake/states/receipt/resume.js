exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    console.log('******* RESUME: fastfed-handshake-receipt');
    console.log(req.body)
    console.log(req.state);
    
    //console.log('RESUME FASTFED HANDSHAKE RECEIPT');
    //console.log(req.locals);
    //console.log(req.state);
    //console.log(req.yieldState);
    //console.log(req.session.state);
    //console.log(next)
    
    /*
    var url = uri.parse('/fastfed/handshake/finish', true);
    delete url.search;
    //console.log(url);
    
    if (req.state.state) {
      url.query.state = req.state.state;
    }
    url = uri.format(url);
    //console.log(url);
    
    res.redirect(url);
    */
    
    next();
    
    //res.completePrompt(url)
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
