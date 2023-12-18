/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 73 ms, faster than 69.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 * Memory Usage: 44.4 MB, less than 87.00% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0]*nums[1]) - (nums[nums.length-1]*nums[nums.length-2])
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 52 ms, faster than 97.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 * Memory Usage: 44.9 MB, less than 51.67% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 */
var maxProductDifference2 = function(nums) {
    let min = [nums[0],nums[1]].sort((a,b)=>a-b)
    let max = [nums[0],nums[1]].sort((a,b)=>b-a)
    for (let i=2; i<nums.length; i++){
        if (nums[i] < min[1]){
            min.pop()
            min.push(nums[i])
            min.sort((a,b)=>a-b)
        }
        if (nums[i] > max[1]){
            max.pop()
            max.push(nums[i])
            max.sort((a,b)=>b-a)
        }
    }
    return (max[0]*max[1]) - (min[0]*min[1])
    
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 45 ms, faster than 100.00% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 * Memory Usage: 44.3 MB, less than 91.13% of JavaScript online submissions for Maximum Product Difference Between Two Pairs.
 */
var maxProductDifference = function(nums) {
    let temp = []
    for (let i=0; i<4; i++){
        temp.push(nums[i])
    }
    temp.sort((a,b)=>a-b)
    
    let min = temp[0]
    let minS = temp[1]
    let maxS = temp[2]
    let max = temp[3]
    
    for (let i=4; i<nums.length; i++){
        if (nums[i] > maxS){
            if (nums[i] > max){
                maxS = max
                max = nums[i]
            }
            else maxS = nums[i]
        }
        else if (nums[i] < minS){
            if (nums[i] < min){
                minS = min
                min = nums[i]
            }
            else minS = nums[i]
        }
    }
    
    return (max * maxS) - (min * minS)
    
};