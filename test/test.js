const { expect } = require('chai');
const { removeWords, getMostPopularPlaces } = require('../src/functions');

describe('removeWords', function() {
    it('should remove specified words from the string', function() {
      const result = removeWords('Hello, ceci est un test', ['ceci', 'un']);
      expect(result).to.equal('Hello, est test');
    });
})

