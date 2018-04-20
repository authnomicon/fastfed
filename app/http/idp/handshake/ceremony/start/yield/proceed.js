exports = module.exports = function() {
  
  function allow(req, res, next) {
    req.state.allow = true;
    return next();
  }
  
  function cancelErrorHandler(err, req, res, next) {
    // TODO:
    return next(err);
  }
  
  
  return [
    allow,
    cancelErrorHandler
  ];
};

exports['@implements'] = 'http://i.bixbyjs.org/http/ceremony/Yield';
exports['@result'] = 'fastfed/setup/proceed';
exports['@state'] = 'fastfed/handshake/start';
exports['@require'] = [];
