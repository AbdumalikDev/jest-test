const arrayProblem = require('./arrayProblem');

test('arrayProblem function exists', () => {
  expect(arrayProblem).toBeDefined();
});

test('Arr [1, 2, 1, 3, 4] return [2, 3, 4]', () => {
  expect(arrayProblem([1, 2, 1, 3, 4])).toEqual([2, 3, 4]);
});
