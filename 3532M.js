/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 * Runtime 17ms Beats 94.74%
 * Memory 87.24MB Beats 94.74%
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    let ans = []
    let arr = new Array(nums.length)
    arr[0] = 0

    for (let i=1; i<nums.length; i++){
        if ((nums[i] - nums[i-1]) <= maxDiff) arr[i] = arr[i-1]
        else arr[i] = arr[i-1] + 1
    }

    for (let i=0; i<queries.length; i++) ans.push(arr[queries[i][0]] === arr[queries[i][1]])

    return ans
};