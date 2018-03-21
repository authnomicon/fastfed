exports = module.exports = function(store) {
  var qs = require('querystring');


  function redirect(req, res, next) {
    console.log('START FASTFED HANDSHAKE RECEIPT');
    console.log(req.locals);
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
