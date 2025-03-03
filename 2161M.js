/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 * Runtime 42ms Beats 29.28%
 * Memory 91.41MB Beats 6.08%
 */
var pivotArray = function(nums, pivot) {
    let min = []
    let equal = []
    let max = []
    for (let i=0; i<nums.length; i++){
        if (nums[i] < pivot) min.push(nums[i])
        else if (nums[i] === pivot) equal.push(nums[i])
        else max.push(nums[i])
    }
    return min.concat(equal).concat(max)
};

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 * Runtime 13ms Beats 95.58%
 * Memory 84.08MB Beats 51.93%

 */
var pivotArray = function(nums, pivot) {
    let ans = new Array(nums.length)
    let curr = 0
    for (let i=0; i<nums.length; i++){
        if (nums[i] < pivot) ans[curr++] = nums[i]
    }
    for (let i=0; i<nums.length; i++){
        if (nums[i] === pivot) ans[curr++] = nums[i]
    }
    for (let i=0; i<nums.length; i++){
        if (nums[i] > pivot) ans[curr++] = nums[i]
    }
    return ans
};

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 * Runtime 29ms Beats 66.85%
 * Memory 84.42MB Beats 47.51%
 */
var pivotArray = function(nums, pivot) {
    return nums.sort((a,b)=> {
        if ((a < pivot && b < pivot) || (a === pivot && b === pivot) || (a > pivot && b > pivot)) return 0
        else if (a < pivot || b > pivot) return -1
        else if (b <= pivot && a > pivot) return 1
        else if (b < pivot && a === pivot) return 1
        else return 0
    })
};