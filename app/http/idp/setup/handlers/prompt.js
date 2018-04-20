exports = module.exports = function(ceremony, initialize, authenticate, errorLogging) {
  var path = require('path')
    , ejs = require('ejs')
  
  
  function render(req, res, next) {
    //console.log('FASTFED CONSENT FOR APP ENABLE?');
    //console.log(req.query);
    //console.log(req.state);
    
    
    // TODO: Load this based on query param
    res.locals.application = { displayName: 'Foo' };
    
    res.render('fastfed/setup/application', function(err, str) {
      if (err && err.view) {
        var view = path.resolve(__dirname, '../views/prompt.ejs');
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
  
  
  return ceremony('fastfed-enable-application',
    authenticate([ 'session' ]),
    initialize(),
    render,
    errorLogging()
  );
};

exports['@require'] = [
  'http://i.bixbyjs.org/http/middleware/ceremony',
  'http://i.bixbyjs.org/http/middleware/initialize',
  'http://i.bixbyjs.org/http/middleware/authenticate',
  'http://i.bixbyjs.org/http/middleware/errorLogging'
];