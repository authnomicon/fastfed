exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    console.log('RESUME: fastfed-handshake');
    console.log(req.body)
    console.log(req.state);
    
    //console.log('START FASTFED HANDSHAKE RESUME');
    //console.log(req.locals);
    //console.log(req.state);
    //console.log(req.yieldState);
    //console.log(req.session.state);
    //console.log(next)
    
    //res.redirect('/app')
    next();
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
