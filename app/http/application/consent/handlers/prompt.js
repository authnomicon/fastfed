exports = module.exports = function(flow, initialize, authenticate, errorLogging) {
  var path = require('path')
    , ejs = require('ejs')
  
  
  function render(req, res, next) {
    console.log('FASTFED CONSENT FOR IDP ENABLE?');
    console.log(req.query);
    console.log(req.state);
    
    
    // TODO: Load this based on query param
    res.locals.idp = { displayName: 'Foo' };
    
    res.render('fastfed/application/enable-idp', function(err, str) {
      if (err && err.view) {
        var view = path.resolve(__dirname, '../views/enable-idp.ejs');
        ejs.renderFile(view, res.locals, function(err, str) {
          if (err) { return next(err); }
          res.send(str);
        });
        return;
      } else if (err) {
        return next(err);
      }
      res.send(str);
    });
  }
  
  
  return flow('fastfed-consent-idp',
    authenticate([ 'session' ]),
    initialize(),
    render,
    errorLogging()
  );
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/state/flow',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];
