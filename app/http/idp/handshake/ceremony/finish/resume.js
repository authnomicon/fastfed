exports = module.exports = function() {
  var uri = require('url');


  function enableFederation(req, res, next) {
    next();
  }

  return [
    enableFederation
  ];
};

exports['@require'] = [];
