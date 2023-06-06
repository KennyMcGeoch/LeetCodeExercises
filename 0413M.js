/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 50 ms, faster than 89.68% of JavaScript online submissions for Arithmetic Slices.
 * Memory Usage: 41.5 MB, less than 88.39% of JavaScript online submissions for Arithmetic Slices.
 */
var numberOfArithmeticSlices = function(nums) {
    let total = 0
    let gap 
    let count = 0
    let loops = nums.length
    
    for (let i=1; i<loops; i++){
        let temp = nums[i] - nums[i-1]
        if (temp === gap){
            total += count
            count++
        }
        else{
            count = 1
            gap = temp
        }
    }
    return total
    
};