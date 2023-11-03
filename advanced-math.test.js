const math = require('./advanced-math');

test('adds 1 to any number', () => {
  expect(math.addOne(2)).toBe(3);
  expect(math.addOne(4)).toBe(5);
  expect(math.addOne(-1)).toBe(0);
  expect(math.addOne(0)).toBe(1);
});
