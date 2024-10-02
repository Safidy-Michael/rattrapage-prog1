import { expect } from 'chai';
import { removeWords, getMostPopularPlaces } from '../src/functions.js';

describe('removeWords', function() {
  it('should remove specified words from the string', function() {
    const result = removeWords('Hello, ceci est un test', ['ceci', 'un']);
    expect(result).to.equal('Hello, est test');
  });
});

describe('removeWords', function() {
  it('should remove specified words from the string', function() {
    const result = removeWords('Hello Java', ['java']);
    expect(result).to.equal('Hello Java');
  });
});

describe('getMostPopularPlaces', function() {
  it('should return the two most popular places', function() {
    const result = getMostPopularPlaces('Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy');
    expect(result).to.equal('Itaosy Analamahitsy');
  });
})
