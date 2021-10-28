exports = module.exports = function() {
  var uri = require('url');


  function redirect(req, res, next) {
    var url = uri.parse('/fastfed/handshake/finish', true);
    delete url.search;
    //console.log(url);
    
    if (req.state.state) {
      url.query.state = req.state.state;
    }
    url = uri.format(url);
    //console.log(url);
    
    res.redirect(url);
    
    //res.completePrompt(url)
  }

  return [
    redirect
  ];
};

exports['@require'] = [];
