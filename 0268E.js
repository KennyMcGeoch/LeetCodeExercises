/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 158 ms, faster than 21.25% of JavaScript online submissions for Missing Number.
Memory Usage: 44.6 MB, less than 37.20% of JavaScript online submissions for Missing Number.
 */
 var missingNumber = function(nums) {

    let sortedNums = nums.sort(function(a, b){return a - b});

    for (i=0; i> -1; i++){
        if (sortedNums[i] !== i){
            return i
        }
    }

    return
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 73 ms, faster than 33.30% of JavaScript online submissions for Missing Number.
 * Memory Usage: 51.2 MB, less than 32.66% of JavaScript online submissions for Missing Number.
 */
var missingNumber = function(nums) {

    nums.sort((a,b)=>a-b)

    for (i=0; i> -1; i++){
        if (nums[i] !== i){
            return i
        }
    }
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 56 ms, faster than 75.42% of JavaScript online submissions for Missing Number.
 * Memory Usage: 51.3 MB, less than 27.97% of JavaScript online submissions for Missing Number.
 */
var missingNumber = function(nums) {

    let total = nums.reduce((a,b)=>a+b)
    return (nums.length) * ((nums.length+1)/2) - total
    
};
