/* global describe, it */

var expect = require('chai').expect;


describe('@authnomicon/fastfed', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('org.authnomicon/fastfed');
      
      expect(json.assembly.components).to.have.length(7);
      expect(json.assembly.components).to.include('http/consent/idp/service');
      expect(json.assembly.components).to.include('http/consent/idp/prompts/application');
      expect(json.assembly.components).to.include('http/consent/application/prompts/idp');
      expect(json.assembly.components).to.include('http/handshake/idp/service');
      expect(json.assembly.components).to.include('http/handshake/idp/prompts/start');
      expect(json.assembly.components).to.include('http/handshake/idp/prompts/finish');
      expect(json.assembly.components).to.include('http/handshake/application/service');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
