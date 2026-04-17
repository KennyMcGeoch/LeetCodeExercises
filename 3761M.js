/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 286ms Beats 12.50%
 * Memory 81.67MB Beats 75.00%
 */
var minMirrorPairDistance = function(nums) {
    let hash = {}
    let ans = Infinity
    let temp = ""

    for (let i=0; i<nums.length; i++){
        if (hash[nums[i]] !== undefined){
            ans = Math.min(ans,i-hash[nums[i]])
        }
        temp = nums[i].toString().split("").reverse().join("")
        hash[parseInt(temp)] = i
    }

    if (ans === Infinity) return -1
    return ans
};