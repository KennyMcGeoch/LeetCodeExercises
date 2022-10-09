/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 154 ms, faster than 43.04% of JavaScript online submissions for Contains Duplicate.
 * Memory Usage: 50.8 MB, less than 62.28% of JavaScript online submissions for Contains Duplicate.
 */

 var containsDuplicate = function(nums) {

    let numsSet = new Set(nums).size    
    if (nums.length === numsSet){return false}

    return true
    
};

//  Slower solution using sort and iteration
//  var containsDuplicate = function(nums) {

//     nums.sort()
//     let iterations = nums.length - 1

//     for (i=0; i<iterations; i++){
//         if(nums[i] === nums[i+1]){
//             return true
//         }
//     }

//     return false
    
// };