/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 6ms Beats99.19%
 * Memory 67.62MB Beats 95.12%
 */
var maximumUniqueSubarray = function(nums) {
    let dupe = false
    let arr = new Array(Math.max(...nums)+1).fill(0)
    let left = 0
    let right = 0
    let curr = nums[0]
    let ans = nums[0]
    arr[nums[0]]++
   

    while(right < nums.length-1){
        while(dupe === false && right < nums.length-1){
            if (arr[nums[++right]]++ === 1) dupe = true
            curr += nums[right]
            if (dupe === false) ans = Math.max(curr,ans)
        }
        while (dupe){
            curr -= nums[left]
            if (arr[nums[left++]]-- === 2) dupe = false
        }
    }

    return ans
};

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime 7ms Beats 96.75%
 * Memory 68.68MB Beats 91.87%
 */
var maximumUniqueSubarray = function(nums) {
    let dupe = false
    let arr = new Array(10001).fill(0)
    let left = 0
    let right = 0
    let curr = nums[0]
    let ans = nums[0]
    arr[nums[0]]++
   

    while(right < nums.length-1){
        while(dupe === false && right < nums.length-1){
            if (arr[nums[++right]]++ === 1) dupe = true
            curr += nums[right]
            if (dupe === false) ans = Math.max(curr,ans)
        }
        while (dupe){
            curr -= nums[left]
            if (arr[nums[left++]]-- === 2) dupe = false
        }
    }

    return ans
};