function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(str) {
  // Convert to lowercase
  str = str.toLowerCase();

  // Reverse the string
  const reversedStr = str.split('').reverse().join('');

  // Compare with the original string
  return str === reversedStr;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
