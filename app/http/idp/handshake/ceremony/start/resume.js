exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    next();
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
