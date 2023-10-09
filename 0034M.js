/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 110 ms, faster than 23.31% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 * Memory Usage: 42.3 MB, less than 81.19% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */
 var searchRange = function(nums, target) {
    
    let firstVal = nums.findIndex((a)=> a === target)
    
    if (firstVal === -1) return [-1,-1]
    
    let iterations = nums.length -1
    
    for (i=firstVal; i<iterations; i++){
        if (nums[i] !== nums[i+1]) return [firstVal, i]
    }
    
    return [firstVal, iterations]    
};

var searchRange2 = function(nums, target) {
    
    return [nums.indexOf(target), nums.lastIndexOf(target)]    
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Runtime: 46 ms, faster than 87.61% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 * Memory Usage: 42.5 MB, less than 55.69% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */
var searchRange3 = function(nums, target) {
    
    let first = true
    let second = true
    
    if (nums[0] > target)return [-1,-1]
    else if (nums[0] === target) first = false
    let last = nums.length-1
    if (nums[last] < target)return [-1,-1]
    else if (nums[last] === target) second = false
    
    let solution = [0, last]
    let min = 0
    let max = last
    let temp

    if (first){
        while (min !== max){
            temp = Math.floor((min+max)/2)
            if (nums[temp] >= target) max = temp
            else {
                min = temp
                if (nums[min] < target)min++
            }
        }
        if (nums[min] === target)solution[0] = min
        else return [-1,-1]        
    }
    if (second){
        min = solution[0]
        max = solution[1]
        while (min !== max){
            temp = Math.floor((min+max)/2) + 1
            if (nums[temp] > target) max = temp-1
            else if (nums[max] === target) min = max
            else {
                min = temp
            }
        }
        solution[1] = max
        
    }
    
    return solution
};