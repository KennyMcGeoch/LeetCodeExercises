/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 186 ms, faster than 16.54% of JavaScript online submissions for Move Zeroes.
 * Memory Usage: 47.6 MB, less than 6.63% of JavaScript online submissions for Move Zeroes.
 */
 var moveZeroes = function(nums) {

    let iterations = nums.length

    for (i=0; i<iterations; i++){
        if (nums[i] === 0){
            nums.splice([i],1)
            nums.push(0)
            iterations--
            i--
        }
    }

    return
    
};

moveZeroes([0,1,0,3,12])