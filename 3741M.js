/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 252ms Beats 66.67%
 * Memory 96.85MB Beats 66.67%
 */
var minimumDistance = function(nums) {
    let arr = new Array(100001)
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

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 193ms Beats 100.00%
 * Memory 96.05MB Beats 66.67%
 */
var minimumDistance = function(nums) {
    let arr = new Array(100001)
    let ans = Infinity

    for (let i=0; i<nums.length; i++){
        if (arr[nums[i]] == undefined) arr[nums[i]] = [i]
        else if (arr[nums[i]].length === 1)arr[nums[i]].push(i)
        else{
            ans = Math.min(ans, (2*i) - (arr[nums[i]][arr[nums[i]].length-2]*2))
            arr[nums[i]].push(i)
        }
    }
    if (ans === Infinity) return -1
    return ans
};

