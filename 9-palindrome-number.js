 
function isPalindrome(x) {
    // Check if the input number is negative
    if (x < 0) {
        // If the input number is negative, it cannot be a palindrome, so return false
        return false;
    }

    // Convert the input number to a string
    let y = x.toString();  

    // Initialize two arrays to store the characters of the string
    let firstArray = [];
    let secondArray = [];

    // Loop through the string from left to right
    for (let i = 0; i < y.length; i++) {
        // Add each character to the first array
        firstArray.push(y[i]);
    }

    // Loop through the string from right to left
    for (let i = y.length - 1; i >= 0; i--) {
        // Add each character to the second array
        secondArray.push(y[i]);
    }

    // Join the characters in both arrays into two strings
    let firstString = firstArray.join("");
    let secondString = secondArray.join("");

    // Compare the two strings
    if (firstString === secondString) {
        // If the strings are the same, the input number is a palindrome, so return true
        return true;
    } else {
        // If the strings are not the same, the input number is not a palindrome, so return false
        return false;
    }
}
