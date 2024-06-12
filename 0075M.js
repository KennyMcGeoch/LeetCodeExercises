/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 104 ms, faster than 37.15% of JavaScript online submissions for Sort Colors.
 * Memory Usage: 42.5 MB, less than 14.63% of JavaScript online submissions for Sort Colors.
 * Runtime: 47 ms, faster than 86.92% of JavaScript online submissions for Sort Colors.
 * Memory Usage: 48.3 MB, less than 93.90% of JavaScript online submissions for Sort Colors.
 */

// One line solution is nums.sort((a,b)=>a-b) but prohibited in exercise rules

var sortColors = function(nums) {

    let hash = {0:0, 1:0, 2:0}
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        hash[nums[i]]++
    }

    for (i=0; i<iterations; i++){
        if (hash[0] > 0){
            hash[0]--
            nums[i] = 0
        }
        else if(hash[1] > 0){
            hash[1]--
            nums[i] = 1
    }
    else nums[i] = 2
    }   
    
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 44 ms, faster than 93.49% of JavaScript online submissions for Sort Colors.
 * Memory Usage: 48.4 MB, less than 91.32% of JavaScript online submissions for Sort Colors.
 */
var sortColors = function(nums) {

    let hash = [0,0,0]
    let iterations = nums.length

    for (i=0; i<iterations; i++){
        hash[nums[i]]++
    }

    for (i=0; i<iterations; i++){
        if (hash[0] > 0){
            hash[0]--
            nums[i] = 0
        }
        else if(hash[1] > 0){
            hash[1]--
            nums[i] = 1
    }
    else nums[i] = 2
    }   
    
};