const isPalindrome = require('./isPalindrome');

// isPalindrome function exists
test('isPalindrome function exists', () => {
  expect(isPalindrome).toBeDefined();
});

// Checking racecar for palindrome and return true
test("isPalindrome('racecar') return true", () => {
  expect(isPalindrome('racecar')).toBeTruthy();
});

// Checking hello for palindrome and return false
test("isPalindrome('hello') return false", () => {
  expect(isPalindrome('hello')).toBeFalsy();
});
