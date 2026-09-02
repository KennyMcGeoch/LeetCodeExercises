/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.34MB Beats 100.00%
 */
var largestInteger = function(nums, k) {
    if (k === nums.length) return Math.max(...nums)
    if (nums[0] === nums[nums.length-1] && k > 1) return -1
    

    let first = nums[0]
    let last = nums[nums.length-1]
    if (k > 1){
        for (let i=1; i<nums.length-1; i++){
            if (nums[i] === first) first = -1
            else if (nums[i] === last) last = -1
        }        
        return Math.max(first,last)
    }
    let arr = new Array(51).fill(0)
    for (let i=0; i<nums.length; i++){
        arr[nums[i]]++
    }
    for (let i=50; i>-1; i--){
        if (arr[i] === 1) return i
    }

    return -1
    
};