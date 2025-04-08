/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 55.62MB Beats 66.67%
 */
var minimumOperations = function(nums) {
    let arr = new Array(101).fill(0)
    let dupe = 0
    let ans = 0
    let ind = 0

    for (let i = 0; i<nums.length; i++){
        if (arr[nums[i]]++ === 1) dupe++
    }
    while(dupe){
        ans++
        if (arr[nums[ind++]]-- === 2) dupe--
        if (arr[nums[ind++]]-- === 2) dupe--
        if (arr[nums[ind++]]-- === 2) dupe--
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 1ms Beats100.00%
 * Memory 57.08MB Beats 54.02%
 */
var minimumOperations = function(nums) {
    let arr = new Array(101).fill(-1)
    let dupe = -1


    for (let i = 0; i<nums.length; i++){
        if (arr[nums[i]] !== -1){
            dupe = Math.max(arr[nums[i]],dupe)
        }
        arr[nums[i]] = i
    }

    return Math.ceil((dupe+1)/3)
};