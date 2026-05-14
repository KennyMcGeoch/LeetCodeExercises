/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 1ms Beats 72.92%
 * Memory 55.95MB Beats 70.83%
 */
var isGood = function(nums) {
    nums.sort((a,b)=>a-b)
    for (let i=1; i<nums.length; i++){
        if (nums[i-1] !== i) return false
    }
    return nums[nums.length-1] === nums.length-1
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 1ms Beats 72.92%
 * Memory 55.38MB Beats 93.75%
 */
var isGood = function(nums) {
    let hash = new Set()
    let max = nums.length-1
    let count = 0

    for (let i=0; i<nums.length; i++){
        if (nums[i] > max) return false
        if (nums[i] === max){
            if (count++ === 2) return false
        }
        else{
            if (hash.has(nums[i])) return false
            else hash.add(nums[i])
        }
    }

    return count === 2 && hash.size === nums.length-2
};

/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 54.89MB Beats 97.92%
 */
var isGood = function(nums) {
    let hash = new Set(nums)
    if (hash.size !== nums.length-1) return false
    let max = nums.length-1
    let count = 0

    for (let i=0; i<nums.length; i++){
        if (nums[i] > max) return false
        if (nums[i] === max){
            if (count++ === 2) return false
        }
    }

    return count === 2
};