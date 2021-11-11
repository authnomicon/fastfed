exports = module.exports = function() {

  function respond(req, res, next) {
    var metadata = {
      identity_provider: {
        entity_id: 'https://tenant-12345.idp.example.com/',
        provider_domain: 'example.com',
        provider_contact_information: {
          organization: "Example Inc.",
          phone: "+1-800-555-5555",
          email: "support@example.com"
        },
        fastfed_handshake_start_uri: 'http://localhost:3000/fastfed/start'
      },
      application_provider: {
        entity_id: "https://tenant-67890.app.example.com/",
        fastfed_handshake_register_uri: "http://localhost:3000/fastfed/register"
      }
    };
    
    res.json(metadata);
  }
  

  
  return [
    respond
  ];
};

exports['@require'] = [
];
