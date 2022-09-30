/**
 * @param {number} n - a positive integer
 * @return {number}
 * Runtime: 75 ms, faster than 87.62% of JavaScript online submissions for Number of 1 Bits.
Memory Usage: 42 MB, less than 95.63% of JavaScript online submissions for Number of 1 Bits.
 */
 var hammingWeight = function(n) {

    let nums = n.toString(2).split("")
    let count = 0
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] !== "0"){
            count++
        }
    }

    return count
    
};

hammingWeight(00000000000000000000000000001011)