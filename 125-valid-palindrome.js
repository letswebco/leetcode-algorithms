function isPalindrome(x) {
    // Initialize two arrays to hold the characters of the string in opposite directions
    let arrayOne = []
    let arrayTwo = []

    // Loop through the characters of the input string and add them to the first array
    for (let i = 0; i < x.length; i++) {
        arrayOne.push(x[i])
    }

    // Loop through the characters of the input string in reverse order and add them to the second array
    for (let i = x.length - 1; i >= 0; i--) {
        arrayTwo.push(x[i])
    }

    // Join the arrays into two separate strings and convert them to lowercase
    let firstString = arrayOne.join("").toLowerCase()
    let secondString = arrayTwo.join("").toLowerCase()

    // Remove any special characters from the two strings using regular expressions
    let sring1NoSpecChars = firstString.replace(/[^a-zA-Z0-9]/g, "")
    let sring2NoSpecChars = secondString.replace(/[^a-zA-Z0-9 ]/g, "")

    // Compare the two cleaned-up strings and return true if they are the same, false otherwise
    if (sring1NoSpecChars == sring2NoSpecChars) {
        return true
    } else {
        return false
    }
}

// Call the isPalindrome function with the input string "raRe, one "
isPalindrome("raRe, one ")
