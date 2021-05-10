const isPalindrome = require('./isPalindrome');

test('isPalindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

test("isPalindrome('racecar') return true", () => {
  expect(isPalindrome('racecar')).toBeTruthy();
});
