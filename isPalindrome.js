// Validate a Palindrome
// if palindrome return true if not false
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
const isPalindrome = (str) => {
  const reverseStr = str.toLowerCase().split('').reverse().join('');

  return reverseStr === str.toLowerCase();
};

module.exports = isPalindrome;
