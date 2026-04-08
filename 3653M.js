/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 * Runtime 478ms Beats 40.00%
 * 73.43MB Beats-%
 */
var xorAfterQueries = function(nums, queries) {
    for (let i=0; i<nums.length; i++) nums[i] = BigInt(nums[i])

    for (let i=0; i<queries.length; i++){
        queries[i][3] = BigInt(queries[i][3])
        for (let j=queries[i][0]; j<=queries[i][1]; j += queries[i][2]){
            nums[j] *= queries[i][3]
            nums[j] %= 1000000007n
        }
    }

    return Number(nums.reduce((a,b)=> a ^ b))
};

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 * Runtime 239ms Beats100.00%
 * Memory 68.14MB Beats 100.00%
 */
var xorAfterQueries = function(nums, queries) {

    for (let i=0; i<queries.length; i++){
        for (let j=queries[i][0]; j<=queries[i][1]; j += queries[i][2]){
            nums[j] *= queries[i][3]
            nums[j] %= 1000000007
        }
    }

    return nums.reduce((a,b)=> a ^ b)
};