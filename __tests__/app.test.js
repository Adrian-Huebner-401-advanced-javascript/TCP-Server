'use strict';

jest.mock('fs');
const file = require('../app');

describe('Tests our app file library', () => {
  it('Can read a file', () => {
    return file.readFile('test.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy;
      });
  });
  it('Can write to a file', () => {
    return file.writeFile('test.txt', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      })
  })
})