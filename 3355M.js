/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 * Runtime 18ms Beats 85.29%
 * Memory 96.94MB Beats 47.06%
 */
var isZeroArray = function(nums, queries) {
    let diff = new Array(nums.length).fill(0)
    for (let i=0; i<queries.length; i++){
        diff[queries[i][0]]++
        diff[queries[i][1]+1]--
    }
    let curr = 0
    for (let i=0; i<nums.length; i++){
        curr += diff[i]
        if (curr < nums[i]) return false
    }

    return true
};

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 * Runtime 9ms Beats 97.06%
 * Memory 92.40MB Beats 99.02%
 */
var isZeroArray = function(nums, queries) {
    let diff = new Array(nums.length+1).fill(0)
    for (let i=0; i<queries.length; i++){
        diff[queries[i][0]]++
        diff[queries[i][1]+1]--
    }
    let curr = 0
    for (let i=0; i<nums.length; i++){
        curr += diff[i]
        if (curr < nums[i]) return false
    }

    return true
};