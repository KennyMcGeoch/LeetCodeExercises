/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 * Runtime: 14 ms, faster than 30.77% of JavaScript online submissions for Special Array II.
 * Memory Usage: 84.9 MB, less than 46.67% of JavaScript online submissions for Special Array II.
 */
var isArraySpecial = function(nums, queries) {
    let hash = {0:0}
    let count = 0
    
    for (let i=1; i<nums.length; i++){
        if (nums[i] % 2 === nums[i-1] % 2) count++
        hash[i] = count
    }
    let ans = []
    for (let i=0; i<queries.length; i++){
        ans.push(hash[queries[i][0]] === hash[queries[i][1]])
    }
    return ans
};

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 * Runtime: 6 ms, faster than 100.00% of JavaScript online submissions for Special Array II.
 * Memory Usage: 85.8 MB, less than 26.67% of JavaScript online submissions for Special Array II.
 */
var isArraySpecial = function(nums, queries) {
    let hash = [0]
    let count = 0
    
    for (let i=1; i<nums.length; i++){
        if (nums[i] % 2 === nums[i-1] % 2) count++
        hash[i] = count
    }
    let ans = []
    for (let i=0; i<queries.length; i++){
        ans.push(hash[queries[i][0]] === hash[queries[i][1]])
    }
    return ans
};