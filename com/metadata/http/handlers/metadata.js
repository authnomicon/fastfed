exports = module.exports = function() {
  

  function respond(req, res, next) {
    var metadata = { foo: 'bar' };
    
    res.json(metadata);
  }
  

  
  return [
    respond
  ];
};

exports['@require'] = [
];
