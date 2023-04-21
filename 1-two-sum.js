// This function takes an array of integers and a target sum as input
function twoSum(nums, target) {
    // Loop through the array with a variable i
    for (let i = 0; i < nums.length; i++) {
        // Loop through the array again with a variable j
        for (let j = 0; j < nums.length; j++) {
            // If the sum of the current elements at i and j equals the target and i and j are not the same index
            if (nums[i] + nums[j] == target && i != j) {
                // Return an array with the indices i and j
                return [i, j];
            }
        }
    }
}

// Call the function with an array and target sum, and print the output to the console
console.log(twoSum([1, 2, 3, 4], 5)); // [0, 3]




 

 

 