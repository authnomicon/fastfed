/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../../com/handshake/http/idprovider');


describe('handshake/start/http/service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/fastfed');
  });
  
  it('should create service', function() {
    function startHandler() {};
    function finalizeHandler() {};
  
    var service = factory(startHandler, finalizeHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});
