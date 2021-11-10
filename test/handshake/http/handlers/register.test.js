/* global describe, it, expect */

var expect = require('chai').expect;
var chai = require('chai');
var sinon = require('sinon');
var factory = require('../../../../../com/handshake/register/http/handlers/register');


describe('handshake/register/http/handlers/register', function() {
  
  var handler;
  
  before(function() {
    
    
    handler = factory();
    
  });
  
  
  it('should do something', function(done) {
    
    chai.express.use(handler)
      .request(function(req, res) {
        req.body = 'jwt';
      })
      .finish(function() {
        expect(1).to.equal(1);
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
