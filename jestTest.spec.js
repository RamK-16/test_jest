const { expect, test } = require('@jest/globals');
const opposite = require('./task.spec/OposNumber')
const removeChar = require('./task.spec/RemoveChar');
const repeatStr = require('./task.spec/repeatStr');
const func4 = require("./task.spec/sumOfPos")

describe('Get OPPOSITE number', () => {
  test('get negative number from positive number', () => {
    expect(opposite(17)).toBe(-17);
    expect(opposite(2)).toBeTruthy();
    expect(opposite(152)).toBeLessThan(0);
    expect(opposite(23)).not.toBeNaN;
    expect(opposite(23)).not.toBeNull;
    expect(opposite(23)).not.toBeUndefined;
  });
  test('get positive number from negative number', () => {
    expect(opposite(-17)).toBe(17);
    expect(opposite(2)).toBeTruthy();
    expect(opposite(-152)).toBeGreaterThan(0);
    expect(opposite(-23)).not.toBeNaN;
    expect(opposite(-23)).not.toBeNull;
    expect(opposite(-23)).not.toBeUndefined;
  });
  test('get 0 from 0', () => {
    expect(opposite(0)).toBe(0);
    expect(opposite(0)).not.toBeTruthy();
    expect(opposite(0)).not.toBeNaN;
    expect(opposite(0)).not.toBeNull;
    expect(opposite(0)).not.toBeUndefined;
  });
});
describe('Remove First and Last Character', () => {
  test('Remove First and Last Character', () => {
    expect(removeChar('abcd')).toBe('bc');
    expect(removeChar('Remove First and Last Character')).toBe('emove First and Last Characte');
  })
  test('Another checks', () => {
    expect(removeChar('abcd')).not.toBeNaN;
    expect(removeChar('abcd')).not.toBeNull;
    expect(removeChar('abcd')).not.toBeUndefined;
  })
});
describe('String repeat', () => {
  test('String repeat', () => {
    expect(repeatStr(4, 'abcd')).toBe('abcdabcdabcdabcd');
    expect(repeatStr(2, 'artist')).toBe('artistartist');
  })
  test('Another checks', () => {
    expect(repeatStr(2, 'abcd')).not.toBeNaN;
    expect(repeatStr(1, 'abcd')).not.toBeNull;
    expect(repeatStr(5, 'abcd')).not.toBeUndefined;
  })
});

describe('Sum of positive', () => {
  test('Sum of positive', () => {
    expect(func4([4, -8, -9, 1, 2])).toBe(7);
    expect(func4([4, -8, -9, 1, 2, 9, 1])).toBeGreaterThan(16);
  })
  test('Sum of positive, if 0 positive', () => {
    expect(func4([-8, -9])).toBe(0);
    expect(func4([-4, -8, -9, -1, -2, -9, -1])).toBeGreaterThan(-1);
    expect(func4([-4, -8, -9, -1, -2, -9, -1])).toBeLessThan(1);
  })
  test('Another checks', () => {
    expect(func4([4, -8, -9, 1, 2])).not.toBeNaN;
    expect(func4([4, -8, -9, 1, 2])).not.toBeNull;
    expect(func4([4, -8, -9, 1, 2])).not.toBeUndefined;
  })
});
