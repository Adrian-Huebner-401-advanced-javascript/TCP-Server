'use strict';

jest.mock('fs');
const app = require('../app');

describe('Tests our app file library', () => {
  it('Can read a file', () => {
    return app.readFile('test.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy;
      });
  });
  it('Can write to a file', () => {
    return app.writeFile('test.txt', Buffer.from('test'))
      .then(results => {
        expect(results).toBeUndefined();
      })
  })
})