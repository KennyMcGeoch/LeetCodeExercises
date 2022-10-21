/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Runtime: 115 ms, faster than 16.13% of JavaScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 42.3 MB, less than 42.55% of JavaScript online submissions for Search in Rotated Sorted Array.
 */
 var search = function(nums, target) {

    let min = 0
    let max = nums.length-1
    let pivot = nums[0]
    let iteration = Math.ceil(max/2)
    
    if (max === 0 && pivot !== target) return -1
    if (pivot === target) return 0

    while (min !== max){
        if (nums[iteration] === target) return iteration
        else if (nums[iteration] > pivot){
            if (nums[iteration] > target && target > pivot){
                max = iteration
            }
            else{
                min = iteration + 1
            }
        }
        else if (nums[iteration] < pivot){
            if (nums[iteration] < target && target < pivot){
                min = iteration
            }
            else{
                max = iteration - 1
            }
        }
        prevIteration = iteration
        iteration = min + Math.ceil((max-min)/2)
        if (prevIteration === iteration) break
    }
     
     if (nums[max] === target) return max
     if (nums[min] === target) return min

    return -1    
};