/*global describe, it*/

import {expect} from 'chai';
import fns from '../functions';

describe('Modules - Functions', () => {

  describe('stringToArray', () => {

    it('returns an array from a comma separated list', () => {
      var result = fns.stringToArray('123,456');
      expect(result).to.eql([ '123', '456' ]);
    });

    it('returns an array from a semi-colon list', () => {
      var result = fns.stringToArray('123;456');
      expect(result).to.eql([ '123', '456' ]);
    });

    it('returns an array from a new line list', () => {
      var result = fns.stringToArray('123\n456');
      expect(result).to.eql([ '123', '456' ]);
    });

    it('removes white space', () => {
      var result = fns.stringToArray('  123   ,   456');
      expect(result).to.eql([ '123', '456' ]);
    });

    it('removes empty values', () => {
      var result = fns.stringToArray('  123   ,,   456');
      expect(result).to.eql([ '123', '456' ]);
    });

    it('removes duplicates', () => {
      var result = fns.stringToArray('123, 123');
      expect(result).to.eql([ '123' ]);
    });

  });

  describe('join', () => {

    it('joins the array with a separator', () => {
      var result = fns.join(',', [1, 2]);
      expect(result).to.equal('1,2');
    });

    it('turns \\r in a real newline char', () => {
      var result = fns.join('\\r', [1, 2]);
      expect(result).to.equal('1\r2');
    });

    it('turns \\r\\r in a real newline chars', () => {
      var result = fns.join('\\r\\r', [1, 2]);
      expect(result).to.equal('1\r\r2');
    });

    it('returns a warning if there is no separator', () => {
      var result = fns.join('', [1, 2]);
      expect(result).to.equal('Please provide a separator. (\\r for newlines)');
    });

    it('doesnt returns a warning if there is no separator but array is empty', () => {
      var result = fns.join('', []);
      expect(result).to.equal('');
    });

  });

});
