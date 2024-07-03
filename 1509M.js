/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 130 ms, faster than 8.33% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Memory Usage: 56.9 MB, less than 97.92% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Runtime: 119 ms, faster than 54.17% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * veMemory Usage: 58.4 MB, less than 50.00% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 */
var minDifference = function(nums) {
    
    if (nums.length < 5) return 0
    nums.sort((a,b)=>a-b)
    if (nums.length === 5) return Math.min(nums[1]-nums[0], nums[4]-nums[3], nums[3]-nums[2], nums[2] - nums[1])
    return Math.min(nums[nums.length-1]-nums[3], nums[nums.length-2]-nums[2], nums[nums.length-3]-nums[1], nums[nums.length-4] - nums[0])
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 69 ms, faster than 95.83% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Memory Usage: 58.3 MB, less than 52.08% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 */
var minDifference = function(nums) {
    
    if (nums.length < 5) return 0
    
    if (nums.length === 5){
        nums.sort((a,b)=>a-b)
        return Math.min(nums[1]-nums[0], nums[4]-nums[3], nums[3]-nums[2], nums[2] - nums[1])
    }
    
    let min = new Array(4).fill(Infinity)
    let max = new Array(4).fill(0)
    
    for (let i=0; i<nums.length; i++){
        let minVal = nums[i]
        let maxVal = nums[i]
        if (minVal < min[0]){
            min[3] = min[2]
            min[2] = min[1]
            min[1] = min[0]
            min[0] = minVal
        }
        else if (minVal < min[1]){
            min[3] = min[2]
            min[2] = min[1]
            min[1] = minVal
        }
        else if (minVal < min[2]){
            min[3] = min[2]
            min[2] = minVal
        }
        else if (minVal < min[3]) min[3] = minVal
        
        if (maxVal > max[0]){
            max[3] = max[2]
            max[2] = max[1]
            max[1] = max[0]
            max[0] = maxVal
        }
        else if (maxVal > max[1]){
            max[3] = max[2]
            max[2] = max[1]
            max[1] = maxVal
        }
        else if (maxVal > max[2]){
            max[3] = max[2]
            max[2] = maxVal
        }
        else if (maxVal > max[3]) max[3] = maxVal
        
    }
        
        return Math.min(max[3]-min[0],max[2]-min[1],max[1]-min[2],max[0]-min[3])
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 58 ms, faster than 100.00% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Memory Usage: 58.2 MB, less than 52.08% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Runtime: 75 ms, faster than 93.75% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 * Memory Usage: 55.7 MB, less than 97.92% of JavaScript online submissions for Minimum Difference Between Largest and Smallest Value in Three Moves.
 */
var minDifference = function(nums) {
    
    if (nums.length < 5) return 0
    
    if (nums.length === 5){
        nums.sort((a,b)=>a-b)
        return Math.min(nums[1]-nums[0], nums[4]-nums[3], nums[3]-nums[2], nums[2] - nums[1])
    }
    
    let min = new Array(4).fill(Infinity)
    let max = new Array(4).fill(0)
    
    for (let i=0; i<nums.length; i++){

        if (nums[i] < min[0]){
            min[3] = min[2]
            min[2] = min[1]
            min[1] = min[0]
            min[0] = nums[i]
        }
        else if (nums[i] < min[1]){
            min[3] = min[2]
            min[2] = min[1]
            min[1] = nums[i]
        }
        else if (nums[i] < min[2]){
            min[3] = min[2]
            min[2] = nums[i]
        }
        else if (nums[i] < min[3]) min[3] = nums[i]
        
        if (nums[i] > max[0]){
            max[3] = max[2]
            max[2] = max[1]
            max[1] = max[0]
            max[0] = nums[i]
        }
        else if (nums[i] > max[1]){
            max[3] = max[2]
            max[2] = max[1]
            max[1] = nums[i]
        }
        else if (nums[i] > max[2]){
            max[3] = max[2]
            max[2] = nums[i]
        }
        else if (nums[i] > max[3]) max[3] = nums[i]
        
    }
        
        return Math.min(max[3]-min[0],max[2]-min[1],max[1]-min[2],max[0]-min[3])
    
};