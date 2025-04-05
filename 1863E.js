/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 52.82MB Beats 81.87%
 */
var subsetXORSum = function(nums) {
    let ans = 0

    function recur(ind, curr){
       if (ind === nums.length) return
       recur(ind+1, curr)
       curr ^= nums[ind]
       ans += curr
       recur(ind+1,curr)
    }
    recur(0,0)
    return ans
};
