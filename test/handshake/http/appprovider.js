/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../../../com/handshake/register/http/service');


describe('handshake/register/http/service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/fastfed/register');
  });
  
  it('should create service', function() {
    function registerHandler() {};
  
    var service = factory(registerHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});
