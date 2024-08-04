/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 * Runtime: 298 ms, faster than 66.67% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
 * Memory Usage: 80.2 MB, less than 74.07% of JavaScript online submissions for Range Sum of Sorted Subarray Sums.
 */
var rangeSum = function(nums, n, left, right) {
    let arr = []
    let mod = 1000000007
    let ans = 0
    for (let i=0; i<nums.length; i++){
        let curr = 0
        for (let j=i; j<i+n && j<nums.length; j++){
            curr += nums[j]
            arr.push(curr %= mod)
        }
    }
    arr.sort((a,b)=>a-b)
    left--

    while(left < right && left < arr.length){
        ans += arr[left++]
        ans %= mod

    }

    return ans
    
};