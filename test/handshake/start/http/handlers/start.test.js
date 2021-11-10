/* global describe, it, expect */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../../../../com/handshake/start/http/handlers/start');


describe.only('handshake/start/http/handlers/start', function() {
  
  var handler;
  
  before(function() {
    
    var service = sinon.fake(function(req, res) {
      console.log('FAKE SERVICE');
      
      res.permit();
    });
    
    
    handler = factory(undefined, service);
    
  });
  
  
  it('should do something', function(done) {
    
    chai.express.use(handler)
      .request(function(req, res) {
        req.query = {
          app_metadata_uri: 'https://tenant-67890.app.example.com/fastfed/provider-metadata',
          expiration: '1475878357',
        };
      })
      .finish(function() {
        expect(1).to.equal(2);
        /*
        expect(this.req.session).to.deep.equal({
          user: {
            id: '248289761001',
            displayName: 'Jane Doe'
          },
          method: 'password'
        });
        
        expect(this.statusCode).to.equal(302);
        expect(this.getHeader('Location')).to.equal('/');
        */
        
        done();
      })
      .listen();
    
  });
  
});
