exports = module.exports = function() {
  
  function allow(req, res, next) {
    req.state.finished = true;
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

exports['@require'] = [];
