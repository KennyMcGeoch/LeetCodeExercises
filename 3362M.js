/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 * Runtime 150ms Beats 100.00%
 * Memory 96.56MB Beats 75.00%
 */
var maxRemoval = function(nums, queries) {
    queries.sort((a,b)=>b[1]-a[1])
    let diff = new Array(nums.length+1).fill(0)
    let curr = 0

    for (let i=0; i<nums.length; i++){
        curr += diff[i]
        if (curr < nums[i]){
            let ind = 0
            while(ind < queries.length && curr < nums[i]){
                if (queries[ind][0] <= i && queries[ind][1] >= i){
                    curr++
                    diff[queries[ind][1]+1]--
                    queries[ind++] = 0
                }
                else ind++
            }
            queries = queries.filter((a)=>a !== 0)
        }
        if (curr < nums[i]) return -1
    }
    return queries.length
};