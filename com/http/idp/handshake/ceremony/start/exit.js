exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    res.redirect('/app')
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
