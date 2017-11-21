const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})


test('adds 1 + -2 to equal -1', () => {
  expect(sum(1, -2)).toBe(-1);
})

test('adds 0.1 + 0.3 to equal 0.4', () => {
  expect(sum(0.1, 0.3)).toBe(0.4);
})
