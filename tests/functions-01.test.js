const {
  nameShuffle,
  isStrangePair,
  convertToDecimal,
  checkSameSum,
} = require('../src/functions-01');

test('nameShuffle', () => {
  expect(nameShuffle('John Doe')).toBe('Doe, John');
  expect(nameShuffle('John Doe')).not.toBe('John Doe');
  expect(nameShuffle('George Washington')).toEqual('Washington, George');
});

test('isStrangePair', () => {
  expect(isStrangePair('ratio', 'orator')).toEqual(true);
  expect(isStrangePair('sparkling', 'groups')).toEqual(true);
  expect(isStrangePair('mentee', 'eminem')).toEqual(true);
  expect(isStrangePair('eminem', 'mentee')).toEqual(true);
  expect(isStrangePair('puppy', 'puppies')).toEqual(false);
  expect(isStrangePair('puppies', 'puppy')).toEqual(false);
});

test('convertToDecimal', () => {
  expect(convertToDecimal('33%')).toBeCloseTo(0.33, 5);
  expect(convertToDecimal('100%')).toBeCloseTo(1, 5);
  expect(convertToDecimal('0%')).toBeCloseTo(0, 5);
  expect(convertToDecimal('56.73%')).toBeCloseTo(0.5673, 5);
});

test('checkSameSum', () => {
  expect(checkSameSum([1, 2, 3, 4], [4, 3, 2, 1])).toBe(true);
  expect(checkSameSum([1, 2, 3, 4], [4, 3, 2, 5])).toBe(false);
  expect(checkSameSum([1, 2, 3, 4], [4, 3, 2, 1, 1])).toBe(false);
  expect(checkSameSum([1, 2, 5, 4], [4, 3, 2, 1, 1, 1])).toBe(true);
  expect(checkSameSum([1, 2, -5, 4], [4, -3, -2, 1, 1, 1])).toBe(true);
  expect(checkSameSum([1, 2, -5, 4], [4, -3, 5])).toBe(false);
  expect(checkSameSum([-1, -2, -5, -4], [-12])).toBe(true);
});
