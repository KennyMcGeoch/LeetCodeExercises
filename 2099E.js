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

maxSubsequence([-1,-2,3,4,3,3],3)