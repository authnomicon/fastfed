/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../../../../com/handshake/start/http/service');


describe('handshake/start/http/service', function() {
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/http/Service');
    expect(factory['@path']).to.equal('/fastfed/start');
  });
  
  it('should create service', function() {
    function startHandler() {};
    function finishHandler() {};
  
    var service = factory(startHandler, finishHandler);
    
    expect(service).to.be.a('function');
    expect(service.length).to.equal(3);
  });
  
});
