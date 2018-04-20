exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    var url = uri.parse('/fastfed/setup/proceed', true);
    delete url.search;
    
    url = uri.format(url);
    res.redirect(url);
  }


  return [
    redirect
  ];
};

exports['@require'] = [];
