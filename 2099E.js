/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime: 114 ms, faster than 60.96% of JavaScript online submissions for Find Subsequence of Length K With the Largest Sum.
Memory Usage: 44.2 MB, less than 57.53% of JavaScript online submissions for Find Subsequence of Length K With the Largest Sum.
 */
 var maxSubsequence = function(nums, k) {

    let sortedArray = [...nums].sort(function(a, b){return a-b}).slice(nums.length - k)

    let filteredArray = nums.filter(num => num >= sortedArray[0])

    while(filteredArray.length > k){
        filteredArray.splice(filteredArray.indexOf(sortedArray[0]),1)
    }

    return filteredArray
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime 4ms Beats 89.26%
 * Memory 58.39MB Beats 17.36%
 */
var maxSubsequence = function(nums, k) {

    let ans = []
    let arr = new Array(nums.length)
    for (let i=0; i<arr.length; i++) arr[i] = i
    arr.sort((a,b)=>nums[a] - nums[b])
    while (ans.length < k) ans.push(arr.pop())
    ans.sort((a,b)=>a-b)
    for (let i=0; i<ans.length; i++) ans[i] = nums[ans[i]]
    return ans
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * Runtime 2ms Beats99.17%
 * Memory 57.00MB Beats 67.77%
 */
var maxSubsequence = function(nums, k) {

    let ans = []
    let arr = new Array(nums.length)
    for (let i=0; i<arr.length; i++) arr[i] = i
    arr.sort((a,b)=>nums[b] - nums[a])
    for (let i=0; i<k; i++) ans[arr[i]] = nums[arr[i]]
    return ans.filter((a)=>a !== undefined)
};