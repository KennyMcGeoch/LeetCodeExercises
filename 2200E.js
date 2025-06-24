/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 * Runtime 1ms Beats 93.22%
 * Memory 57.25MB Beats 81.36%
 */
var findKDistantIndices = function(nums, key, k) {
    let ans = new Array(nums.length).fill(-1)
    let curr = 1
    for (let i=0; i<nums.length; i++){
        if (nums[i] === key) curr = k+1
        else curr--
        if (curr > 0) ans[i] = i
    }
    curr = 1
    for (let i=nums.length-1; i>-1; i--){
        if (nums[i] === key) curr = k+1
        else curr--
        if (curr > 0) ans[i] = i
    }

    return ans.filter((a)=> a > -1)
};

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 * Runtime 2ms Beats 88.14%
 * Memory 56.88MB Beats 88.14%
 */
var findKDistantIndices = function(nums, key, k) {
    let diff = new Array(nums.length+1).fill(0)
    let ans = []
    for (let i=0; i<nums.length; i++){
        if (nums[i] === key){
            diff[Math.max(0,i-k)]++
            diff[Math.min(nums.length,i+k+1)]--
        }
    }
    for (let i=0; i<diff.length; i++){
        if (i) diff[i] += diff[i-1]
        if (diff[i]) ans.push(i)
    }

    return ans
};