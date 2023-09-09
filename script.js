function firstNonRepeatedChar(str) {
 if (str.length === 0) {
    return null; // Return null for empty input
  }

  const charCount = {}; // Object to store character frequencies

  // Count the frequency of each character in the input
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
	  
  }

	
  return null; // Return null if all characters are repeated
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
