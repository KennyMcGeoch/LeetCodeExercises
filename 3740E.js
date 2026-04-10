/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.12MB Beats 95.00%
 */
var minimumDistance = function(nums) {
    let arr = new Array(101)
    let ans = Infinity

    for (let i=0; i<nums.length; i++){
        if (arr[nums[i]] == undefined) arr[nums[i]] = [i]
        else if (arr[nums[i]].length === 1)arr[nums[i]].push(i)
        else{
            ans = Math.min(ans, (2*i) - (arr[nums[i]][0]*2))
            arr[nums[i]].shift()
            arr[nums[i]].push(i)
        }
    }
    if (ans === Infinity) return -1
    return ans
};