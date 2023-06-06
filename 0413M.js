/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 49 ms, faster than 92.26% of JavaScript online submissions for Arithmetic Slices.
 * Memory Usage: 42.1 MB, less than 50.97% of JavaScript online submissions for Arithmetic Slices.
 */
var numberOfArithmeticSlices = function(nums) {
    let total = 0
    let gap 
    let count = 0
    let loops = nums.length
    
    for (let i=1; i<loops; i++){
        let temp = nums[i] - nums[i-1]
        if (temp === gap){
            if (count > 0) total += count
        count++
        }
        else{
            count = 1
            gap = temp
        }
    }
    return total
    
};