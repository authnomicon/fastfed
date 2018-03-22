/* global describe, it */

var expect = require('chai').expect;


describe('@authnomicon/fastfed', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('org.authnomicon/fastfed');
      
      expect(json.assembly.components).to.have.length(8);
      expect(json.assembly.components).to.include('http/idp/handshake/service');
      expect(json.assembly.components).to.include('http/idp/handshake/prompts/start');
      expect(json.assembly.components).to.include('http/idp/handshake/prompts/finish');
      expect(json.assembly.components).to.include('http/idp/consent/service');
      expect(json.assembly.components).to.include('http/idp/consent/prompts/application');
      expect(json.assembly.components).to.include('http/application/handshake/service');
      expect(json.assembly.components).to.include('http/application/consent/service');
      expect(json.assembly.components).to.include('http/application/consent/prompts/idp');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
