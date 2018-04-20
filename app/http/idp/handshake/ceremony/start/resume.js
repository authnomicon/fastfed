exports = module.exports = function() {
  var uri = require('url');


  function prompt(req, res, next) {
    console.log('HANDSHAKE START RESUME #####');
    
    res.prompt(next);
    //next();
  }


  return [
    prompt
  ];
};

exports['@require'] = [];
